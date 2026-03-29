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

    // Mouse/touch tilt
    const handleMove = useCallback((clientX, clientY) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 20;
        const rotateX = ((centerY - y) / centerY) * 20;

        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;

        if (shineRef.current) {
            const px = (x / rect.width) * 100;
            const py = (y / rect.height) * 100;
            shineRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.4) 0%, transparent 55%)`;
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
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        const card = cardRef.current;
        if (card) {
            card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
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
