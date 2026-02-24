import { useRef, useCallback, useState } from 'react';
import { FaMapMarkerAlt, FaTimes, FaDirections, FaPhone, FaEnvelope } from 'react-icons/fa';
import './MapSection.css';

function MapSection() {
    const mapCardRef = useRef(null);
    const shineRef = useRef(null);
    const rafRef = useRef(null);
    const [popupOpen, setPopupOpen] = useState(false);

    // 3D tilt effect
    const handleMove = useCallback((clientX, clientY) => {
        const card = mapCardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 8;
        const rotateX = ((centerY - y) / centerY) * 8;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        if (shineRef.current) {
            const px = (x / rect.width) * 100;
            const py = (y / rect.height) * 100;
            shineRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.2) 0%, transparent 50%)`;
            shineRef.current.style.opacity = '1';
        }
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => handleMove(e.clientX, e.clientY));
    }, [handleMove]);

    const handleLeave = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        if (mapCardRef.current) {
            mapCardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
        if (shineRef.current) shineRef.current.style.opacity = '0';
    }, []);

    return (
        <section className="map-section section" id="location">
            <div className="container">
                <h2 className="section-title">Lokasi <span>Saya</span></h2>
                <p className="section-subtitle">
                    Temukan di mana saya berada.
                </p>

                <div className="map-content">
                    <div className="map-info">
                        <h3>Alamat</h3>
                        <p className="text-justify">
                            Saya tinggal di Tanah Laut - Kalimantan Selatan. Jika Anda ingin berkolaborasi atau
                            bertemu langsung, jangan ragu untuk menghubungi saya terlebih dahulu.
                        </p>
                        <div className="map-address">
                            <FaMapMarkerAlt className="map-address-icon" />
                            <div className="map-address-text">
                                Sumber Makmur, RT 03 RW 01<br />
                                Tanah Laut, Kalimantan Selatan<br />
                                Indonesia, 70861
                            </div>
                        </div>

                        <div className="map-quick-links">
                            <a
                                href="https://www.google.com/maps/dir//Takisung,+Kabupaten+Tanah+Laut,+Kalimantan+Selatan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-quick-link"
                            >
                                <FaDirections /> Petunjuk Arah
                            </a>
                            <a href="tel:+6283112294396" className="map-quick-link">
                                <FaPhone /> Telepon
                            </a>
                            <a href="mailto:jokobimantaro88@gmail.com" className="map-quick-link">
                                <FaEnvelope /> Email
                            </a>
                        </div>
                    </div>

                    <div className="map-embed-wrapper">
                        <div
                            className="map-embed tilt-map"
                            ref={mapCardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleLeave}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1089.3968748419122!2d114.64541741336852!3d-3.871879634842239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6e5eff1e53a75%3A0x290b55cfb3eca096!2sTakisung%2C%20Kabupaten%20Tanah%20Laut%2C%20Kalimantan%20Selatan!5e0!3m2!1sid!2sid!4v1771906684259!5m2!1sid!2sid"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Saya"
                            ></iframe>
                            <div className="tilt-shine-map" ref={shineRef}></div>

                            {/* Floating pin popup */}
                            <div
                                className={`map-pin-marker ${popupOpen ? 'active' : ''}`}
                                onClick={() => setPopupOpen(!popupOpen)}
                            >
                                <div className="map-pin-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="map-pin-pulse"></div>

                                {popupOpen && (
                                    <div className="map-popup">
                                        <button className="map-popup-close" onClick={(e) => { e.stopPropagation(); setPopupOpen(false); }}>
                                            <FaTimes />
                                        </button>
                                        <div className="map-popup-header">
                                            <img src="/saya.jpg" alt="Joko" className="map-popup-avatar" />
                                            <div>
                                                <h4>Joko Bimantaro</h4>
                                                <p>Software Developer</p>
                                            </div>
                                        </div>
                                        <div className="map-popup-location">
                                            <FaMapMarkerAlt />
                                            <span>Takisung, Tanah Laut, Kalsel</span>
                                        </div>
                                        <a
                                            href="https://www.google.com/maps/dir//Takisung,+Kabupaten+Tanah+Laut,+Kalimantan+Selatan"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="map-popup-btn"
                                        >
                                            <FaDirections /> Buka di Google Maps
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MapSection;
