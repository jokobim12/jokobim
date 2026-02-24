import { FaMapMarkerAlt } from 'react-icons/fa';
import './MapSection.css';

function MapSection() {
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
                    </div>

                    <div className="map-embed">
                        {/* Ganti src di bawah dengan embed URL Google Maps lokasi Anda yang sebenarnya */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1089.3968748419122!2d114.64541741336852!3d-3.871879634842239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6e5eff1e53a75%3A0x290b55cfb3eca096!2sTakisung%2C%20Kabupaten%20Tanah%20Laut%2C%20Kalimantan%20Selatan!5e0!3m2!1sid!2sid!4v1771906684259!5m2!1sid!2sid"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi Saya"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MapSection;
