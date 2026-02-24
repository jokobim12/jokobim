import Lanyard from './Lanyard';
import './Hero.css';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Halo, saya</p>
                    <h1 className="hero-name">
                        Joko<span> Bimantaro</span>
                    </h1>
                    <p className="hero-role">
                        Mahasiswa Teknologi Informasi
                        Politeknik Negeri Tanah Laut - Angkatan 2024
                    </p>
                    <div className="hero-buttons">
                        <a href="#portfolio" className="btn btn-primary">Lihat Portofolio</a>
                        <a href="#contact" className="btn btn-outline">Hubungi Saya</a>
                    </div>
                </div>
                <div className="hero-image">
                    <Lanyard />
                </div>
            </div>
        </section>
    );
}

export default Hero;
