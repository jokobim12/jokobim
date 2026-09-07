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

        // Clean previous engine if any
        if (engineRef.current) {
            Engine.clear(engineRef.current);
            engineRef.current = null;
        }
        if (animRef.current) {
            cancelAnimationFrame(animRef.current);
            animRef.current = null;
        }

        const W = wrapper.clientWidth || 280;
        const H = wrapper.clientHeight || 420;
        const dpr = window.devicePixelRatio || 1;
        const isMobileScreen = typeof window !== 'undefined' && window.innerWidth <= 768;

        const CW_CANVAS = W * 3;
        const CH_CANVAS = H * 3;
        const OFFSET_X = W;
        const OFFSET_Y = H;

        canvas.width = CW_CANVAS * dpr;
        canvas.height = CH_CANVAS * dpr;
        canvas.style.width = CW_CANVAS + 'px';
        canvas.style.height = CH_CANVAS + 'px';
        canvas.style.left = -OFFSET_X + 'px';
        canvas.style.top = -OFFSET_Y + 'px';
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);

        // Extended rope length so badge hangs significantly lower as requested
        const SEG = isMobileScreen ? 6 : 7;
        const LEN = isMobileScreen ? 16 : 14;
        const AX = OFFSET_X + W / 2;
        const AY = OFFSET_Y + 24;
        const CW = isMobileScreen ? 48 : 65;
        const CH = isMobileScreen ? 28 : 40;
        const LW = isMobileScreen ? 3 : 4;
        const HIT_PAD = isMobileScreen ? 30 : 30;

        const engine = Engine.create({ gravity: { x: 0, y: 2.2 } });
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
            mass: 0.5, friction: 0.3, frictionAir: 0.02, restitution: 0.01,
            chamfer: { radius: 6 },
        });
        constraints.push(Constraint.create({
            bodyA: links[links.length - 1], bodyB: card,
            pointB: { x: 0, y: -CH / 2 },
            length: LEN * 0.5, stiffness: 0.7, damping: 0.04,
        }));

        Composite.add(engine.world, [...links, ...constraints, card]);

        // Hit detection
        const getPosFromClient = (clientX, clientY) => {
            const rect = canvas.getBoundingClientRect();
            return { x: clientX - rect.left, y: clientY - rect.top };
        };

        const findBody = (pos) => {
            const dx = pos.x - card.position.x;
            const dy = pos.y - card.position.y;
            if (Math.abs(dx) < CW + HIT_PAD && Math.abs(dy) < CH + HIT_PAD) return card;
            for (const link of links) {
                const ldx = pos.x - link.position.x;
                const ldy = pos.y - link.position.y;
                if (ldx * ldx + ldy * ldy < (HIT_PAD + 10) * (HIT_PAD + 10)) return link;
            }
            return null;
        };

        // Mouse events
        const onMouseDown = (e) => {
            if (e.button !== 0) return;
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

        // Touch events
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
                e.preventDefault();
            }
        };

        const onTouchMove = (e) => {
            if (!dragRef.current.active) return;
            const touch = e.touches[0];
            const pos = getPosFromClient(touch.clientX, touch.clientY);
            const x = pos.x - dragRef.current.offset.x;
            const y = pos.y - dragRef.current.offset.y;
            Body.setPosition(dragRef.current.body, { x, y });
            Body.setVelocity(dragRef.current.body, { x: 0, y: 0 });
            e.preventDefault();
        };

        const onTouchEnd = () => {
            dragRef.current.active = false;
            dragRef.current.body = null;
        };

        canvas.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        canvas.addEventListener('touchstart', onTouchStart, { passive: false });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd);

        let lastTime = performance.now();
        const loop = (now) => {
            const delta = now - lastTime;
            lastTime = now;
            Engine.update(engine, Math.min(delta, 20));

            ctx.clearRect(0, 0, CW_CANVAS, CH_CANVAS);

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
            ctx.strokeStyle = '#30363d';
            ctx.lineWidth = LW;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(AX, AY, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#58a6ff';
            ctx.fill();

            if (cardDivRef.current) {
                const cx = card.position.x - OFFSET_X;
                const cy = card.position.y - OFFSET_Y;
                cardDivRef.current.style.transform =
                    `translate(${cx}px, ${cy}px) translate(-50%, -50%) rotate(${card.angle}rad)`;
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
