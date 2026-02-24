import { useRef, useCallback, useEffect } from 'react';
import './About.css';

const skills = [
    'React JS', 'JavaScript', 'HTML', 'CSS', 'Node.js',
    'Git', 'Figma', 'Python', 'MySQL', 'Tailwind CSS', 'Laravel', 'PHP', 'Bootstrap', 'Photoshop',
    'Canva',
];

function About() {
    const cardRef = useRef(null);
    const shineRef = useRef(null);
    const rafRef = useRef(null);
    const gyroActiveRef = useRef(false);

    // Gyroscope — foto miring sesuai kemiringan HP
    useEffect(() => {
        const onOrientation = (e) => {
            const card = cardRef.current;
            if (!card) return;

            const gamma = e.gamma || 0;
            const beta = e.beta || 0;

            const rotateY = Math.max(-15, Math.min(15, gamma * 0.4));
            const rotateX = Math.max(-15, Math.min(15, -(beta - 45) * 0.3));

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            gyroActiveRef.current = true;

            if (shineRef.current) {
                const px = 50 + gamma;
                const py = 50 + (beta - 45);
                shineRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.3) 0%, transparent 60%)`;
                shineRef.current.style.opacity = '1';
            }
        };

        const enable = () => {
            if (typeof DeviceOrientationEvent !== 'undefined' &&
                typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission()
                    .then(s => { if (s === 'granted') window.addEventListener('deviceorientation', onOrientation); })
                    .catch(() => { });
            } else if ('DeviceOrientationEvent' in window) {
                window.addEventListener('deviceorientation', onOrientation);
            }
        };
        enable();
        const firstTouch = () => { enable(); window.removeEventListener('touchstart', firstTouch); };
        window.addEventListener('touchstart', firstTouch, { once: true });

        return () => {
            window.removeEventListener('deviceorientation', onOrientation);
            window.removeEventListener('touchstart', firstTouch);
        };
    }, []);

    // Mouse/touch tilt (desktop & manual touch)
    const handleMove = useCallback((clientX, clientY) => {
        if (gyroActiveRef.current) return; // gyro takes priority
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 15;
        const rotateX = ((centerY - y) / centerY) * 15;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;

        if (shineRef.current) {
            const px = (x / rect.width) * 100;
            const py = (y / rect.height) * 100;
            shineRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.35) 0%, transparent 60%)`;
            shineRef.current.style.opacity = '1';
        }
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => handleMove(e.clientX, e.clientY));
    }, [handleMove]);

    const handleTouchMove = useCallback((e) => {
        if (e.touches.length !== 1) return;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() =>
            handleMove(e.touches[0].clientX, e.touches[0].clientY)
        );
    }, [handleMove]);

    const handleLeave = useCallback(() => {
        if (gyroActiveRef.current) return; // gyro handles reset
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        const card = cardRef.current;
        if (card) {
            card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
        if (shineRef.current) {
            shineRef.current.style.opacity = '0';
        }
    }, []);

    return (
        <section className="about section" id="about">
            <div className="container">
                <h2 className="section-title">Tentang <span>Saya</span></h2>
                <p className="section-subtitle">
                    Kenali lebih jauh siapa saya dan apa yang saya lakukan.
                </p>

                <div className="about-content">
                    <div className="about-photo">
                        <div
                            className="about-photo-wrapper tilt-card"
                            ref={cardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleLeave}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleLeave}
                        >
                            <img src="/penghargaan.jpg" alt="Jokobim" />
                            <div className="tilt-shine" ref={shineRef}></div>
                        </div>
                    </div>

                    <div className="about-info">
                        <h3>Halo! Saya Joko Bimantaro</h3>
                        <p style={{ textAlign: 'justify' }}>
                            Saya adalah mahasiswa Teknologi Informasi di Politeknik Negeri
                            Tanah laut. Memiliki ketertarikan dalam bidang teknologi
                            informasi dan Olahraga. Saya menekuni dunia teknologi sejak saya berusia 16 Tahun
                        </p>

                        <div className="about-details">
                            <div className="about-detail-item">
                                <strong>Nama:</strong>
                                <span>Joko Bimantaro</span>
                            </div>
                            <div className="about-detail-item">
                                <strong>Email:</strong>
                                <span>joko.bimantaro@mhs.politala.ac.id</span>
                            </div>
                            <div className="about-detail-item">
                                <strong>Alamat:</strong>
                                <span>Takisung - Tanah Laut - Kalsel</span>
                            </div>
                            <div className="about-detail-item">
                                <strong>Status:</strong>
                                <span>Tersedia untuk kerja</span>
                            </div>
                        </div>

                        <h4 className="skills-title">Keahlian</h4>
                        <div className="skills-list">
                            {skills.map((skill) => (
                                <span className="skill-tag" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
