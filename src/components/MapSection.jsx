import { useState } from 'react';
import { FaMapMarkerAlt, FaTimes, FaDirections, FaPhone, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import './MapSection.css';

function MapSection() {
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <section className="map-section section" id="location">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">
                        <FaMapMarkerAlt /> Domisili & Wilayah
                    </div>
                    <h2 className="section-title">
                        Lokasi <span className="highlight">Domisili</span>
                    </h2>
                    <p className="section-subtitle">
                        Berbasis di Takisung, Kabupaten Tanah Laut, Kalimantan Selatan. Terbuka untuk diskusi proyek lokal, remote collaboration, maupun kesempatan kerja profesional.
                    </p>
                </div>

                <div className="map-content">
                    <div className="map-info">
                        <h3 className="map-info-title">Detail Alamat</h3>
                        <p className="map-info-desc">
                            Saya berdomisili di Kalimantan Selatan. Jika Anda berada di sekitar Banjarmasin, Banjarbaru, atau Pelaihari dan ingin berkolaborasi secara tatap muka, jangan ragu untuk berkoordinasi terlebih dahulu.
                        </p>

                        <div className="map-address-box">
                            <div className="address-icon-wrap">
                                <FaMapMarkerAlt className="map-address-icon" />
                            </div>
                            <div className="map-address-text">
                                <strong>Desa Sumber Makmur, RT 03 RW 01</strong>
                                <span>Kecamatan Takisung, Kabupaten Tanah Laut</span>
                                <span>Kalimantan Selatan, Indonesia, 70861</span>
                            </div>
                        </div>

                        <div className="map-quick-links">
                            <a
                                href="https://www.google.com/maps/dir//Takisung,+Kabupaten+Tanah+Laut,+Kalimantan+Selatan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-btn map-btn-primary"
                            >
                                <FaDirections /> Petunjuk Arah Google Maps
                            </a>
                            <a href="tel:+6283112294396" className="map-btn map-btn-secondary">
                                <FaPhone /> +62 831 1229 4396
                            </a>
                            <a href="mailto:jokobimantaro88@gmail.com" className="map-btn map-btn-secondary">
                                <FaEnvelope /> Email Langsung
                            </a>
                        </div>
                    </div>

                    <div className="map-embed-wrapper">
                        <div className="map-embed">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1089.3968748419122!2d114.64541741336852!3d-3.871879634842239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6e5eff1e53a75%3A0x290b55cfb3eca096!2sTakisung%2C%20Kabupaten%20Tanah%20Laut%2C%20Kalimantan%20Selatan!5e0!3m2!1sid!2sid!4v1771906684259!5m2!1sid!2sid"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Joko Bimantaro di Takisung, Tanah Laut"
                            ></iframe>

                            {/* Floating pin marker */}
                            <div
                                className={`map-pin-marker ${popupOpen ? 'active' : ''}`}
                                onClick={() => setPopupOpen(!popupOpen)}
                                title="Klik untuk info lokasi"
                            >
                                <div className="map-pin-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="map-pin-pulse"></div>

                                {popupOpen && (
                                    <div className="map-popup" onClick={(e) => e.stopPropagation()}>
                                        <button
                                            className="map-popup-close"
                                            onClick={() => setPopupOpen(false)}
                                            aria-label="Tutup"
                                        >
                                            <FaTimes />
                                        </button>
                                        <div className="map-popup-header">
                                            <img src="/saya.jpg" alt="Joko Bimantaro" className="map-popup-avatar" width="42" height="42" />
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
                                            className="map-popup-action"
                                        >
                                            <FaExternalLinkAlt /> Buka Google Maps
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