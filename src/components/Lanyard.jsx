import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './Lanyard.css';

const { Engine, Bodies, Composite, Constraint, Body } = Matter;

function Lanyard() {
    const wrapperRef = useRef(null);
    const canvasRef = useRef(null);
    const cardDivRef = useRef(null);
    const engineRef = useRef(null);
    const animRef = useRef(null);
    const dragRef = useRef({ active: false, body: null, offset: { x: 0, y: 0 } });

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const canvas = canvasRef.current;
        if (!wrapper || !canvas) return;

        // HMR cleanup
        if (engineRef.current) {
            Engine.clear(engineRef.current);
            engineRef.current = null;
        }
        if (animRef.current) {
            cancelAnimationFrame(animRef.current);
            animRef.current = null;
        }

        const W = wrapper.clientWidth;
        const H = wrapper.clientHeight;
        const dpr = window.devicePixelRatio || 1;
        const isMobile = W < 300;

        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = W + 'px';
        canvas.style.height = H + 'px';
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);

        const SEG = isMobile ? 12 : 12;
        const LEN = isMobile ? 16 : 16;
        const AX = W / 2;
        const AY = 8;
        const CW = isMobile ? 60 : 80;
        const CH = isMobile ? 40 : 50;
        const LW = isMobile ? 3 : 4;
        // Hit area padding — bigger so easier to grab
        const HIT_PAD = isMobile ? 40 : 30;

        const engine = Engine.create({ gravity: { x: 0, y: 2.5 } });
        engineRef.current = engine;

        // Rope links
        const links = [];
        for (let i = 0; i < SEG; i++) {
            links.push(Bodies.circle(AX, AY + (i + 1) * LEN, 3, {
                mass: 0.1, friction: 0.4, frictionAir: 0.02, restitution: 0.01,
            }));
        }

        // Chain
        const constraints = [];
        constraints.push(Constraint.create({
            pointA: { x: AX, y: AY }, bodyB: links[0],
            length: LEN, stiffness: 0.7, damping: 0.04,
        }));
        for (let i = 0; i < links.length - 1; i++) {
            constraints.push(Constraint.create({
                bodyA: links[i], bodyB: links[i + 1],
                length: LEN, stiffness: 0.7, damping: 0.04,
            }));
        }

        // Card
        const cardY = AY + (SEG + 1) * LEN + CH / 2;
        const card = Bodies.rectangle(AX, cardY, CW, CH, {
            mass: 0.6, friction: 0.3, frictionAir: 0.02, restitution: 0.01,
            chamfer: { radius: 6 },
        });
        constraints.push(Constraint.create({
            bodyA: links[links.length - 1], bodyB: card,
            pointB: { x: 0, y: -CH / 2 },
            length: LEN * 0.5, stiffness: 0.7, damping: 0.04,
        }));

        Composite.add(engine.world, [...links, ...constraints, card]);

        // --- Hit detection ---
        const getPos = (e) => {
            const rect = canvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            return { x: clientX - rect.left, y: clientY - rect.top, clientX, clientY };
        };

        const getPosFromClient = (clientX, clientY) => {
            const rect = canvas.getBoundingClientRect();
            return { x: clientX - rect.left, y: clientY - rect.top };
        };

        const findBody = (pos) => {
            // Card — generous hit area
            const dx = pos.x - card.position.x;
            const dy = pos.y - card.position.y;
            if (Math.abs(dx) < CW + HIT_PAD && Math.abs(dy) < CH + HIT_PAD) return card;
            // Links
            for (const link of links) {
                const ldx = pos.x - link.position.x;
                const ldy = pos.y - link.position.y;
                if (ldx * ldx + ldy * ldy < (HIT_PAD + 10) * (HIT_PAD + 10)) return link;
            }
            return null;
        };

        // --- Mouse events (desktop) ---
        const onMouseDown = (e) => {
            if (e.button !== 0) return; // left click only
            const pos = getPosFromClient(e.clientX, e.clientY);
            const body = findBody(pos);
            if (body) {
                dragRef.current = {
                    active: true, body,
                    offset: { x: pos.x - body.position.x, y: pos.y - body.position.y },
                };
                canvas.style.cursor = 'grabbing';
                e.preventDefault();
                e.stopPropagation();
            }
            // If no body hit, let event pass through for scrolling
        };

        const onMouseMove = (e) => {
            if (!dragRef.current.active) return;
            const pos = getPosFromClient(e.clientX, e.clientY);
            const x = pos.x - dragRef.current.offset.x;
            const y = pos.y - dragRef.current.offset.y;
            Body.setPosition(dragRef.current.body, { x, y });
            Body.setVelocity(dragRef.current.body, { x: 0, y: 0 });
        };

        const onMouseUp = () => {
            if (dragRef.current.active) {
                dragRef.current.active = false;
                dragRef.current.body = null;
                canvas.style.cursor = 'grab';
            }
        };

        // --- Touch events (mobile) ---
        const onTouchStart = (e) => {
            if (e.touches.length !== 1) return;
            const touch = e.touches[0];
            const pos = getPosFromClient(touch.clientX, touch.clientY);
            const body = findBody(pos);
            if (body) {
                dragRef.current = {
                    active: true, body,
                    offset: { x: pos.x - body.position.x, y: pos.y - body.position.y },
                };
                // Prevent scroll ONLY when touching the lanyard
                e.preventDefault();
            }
            // If no body hit → don't preventDefault, so page scrolls normally
        };

        const onTouchMove = (e) => {
            if (!dragRef.current.active) return;
            const touch = e.touches[0];
            const pos = getPosFromClient(touch.clientX, touch.clientY);
            const x = pos.x - dragRef.current.offset.x;
            const y = pos.y - dragRef.current.offset.y;
            Body.setPosition(dragRef.current.body, { x, y });
            Body.setVelocity(dragRef.current.body, { x: 0, y: 0 });
            e.preventDefault(); // prevent scroll while dragging
        };

        const onTouchEnd = () => {
            dragRef.current.active = false;
            dragRef.current.body = null;
        };

        // Attach events — canvas gets mousedown/touchstart, window gets move/up
        canvas.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        canvas.addEventListener('touchstart', onTouchStart, { passive: false });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd);

        // Animation loop
        let lastTime = performance.now();
        const loop = (now) => {
            const delta = now - lastTime;
            lastTime = now;
            Engine.update(engine, Math.min(delta, 20));

            ctx.clearRect(0, 0, W, H);

            // Smooth rope
            const pts = [
                { x: AX, y: AY },
                ...links.map(l => l.position),
                { x: card.position.x, y: card.position.y - CH / 2 },
            ];
            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y);
            for (let i = 1; i < pts.length; i++) {
                const prev = pts[i - 1];
                const curr = pts[i];
                ctx.quadraticCurveTo(prev.x, prev.y, (prev.x + curr.x) / 2, (prev.y + curr.y) / 2);
            }
            ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
            ctx.strokeStyle = '#1a1a1a';
            ctx.lineWidth = LW;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();

            // Anchor
            ctx.beginPath();
            ctx.arc(AX, AY, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#374151';
            ctx.fill();

            // Sync card
            if (cardDivRef.current) {
                cardDivRef.current.style.transform =
                    `translate(${card.position.x}px, ${card.position.y}px) translate(-50%, -50%) rotate(${card.angle}rad)`;
            }

            animRef.current = requestAnimationFrame(loop);
        };
        animRef.current = requestAnimationFrame(loop);

        return () => {
            if (animRef.current) cancelAnimationFrame(animRef.current);
            canvas.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            canvas.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
            Engine.clear(engine);
            engineRef.current = null;
        };
    }, []);

    return (
        <div className="lanyard-wrapper" ref={wrapperRef}>
            <canvas ref={canvasRef} className="lanyard-canvas" />
            <div
                ref={cardDivRef}
                className="lanyard-card-overlay"
                style={{ position: 'absolute', left: 0, top: 0 }}
            >
                <div className="lanyard-id-card">
                    <div className="lanyard-id-header"></div>
                    <div className="lanyard-id-hole"></div>
                    <div className="lanyard-id-photo">
                        <img src="/saya.jpg" alt="Joko Bimantaro" />
                    </div>
                    <div className="lanyard-id-info">
                        <div className="lanyard-id-name">Joko Bimantaro</div>
                        <div className="lanyard-id-role">Software Developer</div>
                        <div className="lanyard-id-divider"></div>
                        <div className="lanyard-id-org">Teknologi Informasi</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lanyard;
