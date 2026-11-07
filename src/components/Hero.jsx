import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCode,
  FaGamepad,
  FaFolderOpen,
  FaMapMarkerAlt,
  FaTrophy,
  FaCertificate,
  FaMedal
} from 'react-icons/fa';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        {/* Barcelona Accent Bar */}
        <div className="barca-stripe"></div>

        <div className="hero-grid">
          {/* Left Column: Personal Editorial Bio */}
          <div className="hero-text-col">
            <div className="hero-kicker">
              <span className="kicker-badge">Politala TI '24</span>
              <span className="kicker-sep">/</span>
              <span className="kicker-role">Software & Game Developer</span>
            </div>

            <h1 className="hero-name">
              Joko Bimantaro
            </h1>

            <p className="hero-role-title">
              Creator of <span className="highlight-blue">Banjar Script</span> & Developer of <span className="highlight-red">Niskala Masa</span>
            </p>

            <p className="hero-bio">
              Mahasiswa D3 Teknologi Informasi di <strong>Politeknik Negeri Tanah Laut (Politala)</strong> dan developer aktif di <strong>Teaching Factory (TEFA) IT</strong>.
              Berfokus pada rekayasa perangkat lunak web, perancangan bahasa pemrograman daerah <em>Banjar Script</em>,
              serta game simulasi perkuliahan <em>Niskala Masa</em> (Finalis KMIPN 2026).
            </p>

            {/* Solid Action Buttons (No Gradient, No Shadow) */}
            <div className="hero-btn-group">
              <a href="#portfolio" className="btn btn-red">
                <FaFolderOpen /> Lihat Portofolio
              </a>
              <a href="#niskala-masa" className="btn btn-blue">
                <FaGamepad /> Game Niskala Masa
              </a>
              <a href="#banjar-script" className="btn btn-secondary">
                <FaCode /> Banjar Script
              </a>
            </div>

            {/* Highlights Grid (Solid, Flat) */}
            <div className="hero-credentials-row">
              <div className="cred-card">
                <div className="cred-icon red"><FaTrophy /></div>
                <div className="cred-info">
                  <strong>Finalis KMIPN 2026</strong>
                  <span>Game Development (Nasional)</span>
                </div>
              </div>

              <div className="cred-card">
                <div className="cred-icon blue"><FaMedal /></div>
                <div className="cred-info">
                  <strong>Best Project 2025</strong>
                  <span>TEFA IT Politeknik Tanah Laut</span>
                </div>
              </div>

              <div className="cred-card">
                <div className="cred-icon blue"><FaCertificate /></div>
                <div className="cred-info">
                  <strong>Sertifikasi BNSP</strong>
                  <span>Junior Web Developer</span>
                </div>
              </div>
            </div>

            {/* Social Connect bar */}
            <div className="hero-social-strip">
              <span className="social-label">Kontak & Profil:</span>
              <div className="social-links-list">
                <a
                  href="https://github.com/jokobim12"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title="GitHub Profile"
                >
                  <FaGithub /> <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/joko-bimantaro"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin /> <span>LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/6283112294396"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn red-btn"
                  title="WhatsApp"
                >
                  <FaWhatsapp /> <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Editorial Portrait */}
          <div className="hero-photo-col">
            <div className="photo-frame">
              <div className="photo-top-tag">
                <span className="tag-dot red"></span>
                <span className="tag-dot blue"></span>
                <span className="tag-text font-mono">RESMI • PORTOFOLIO</span>
              </div>
              <img
                src="/saya.jpg"
                alt="Joko Bimantaro - Software & Game Developer"
                className="photo-main"
                width="400"
                height="500"
                fetchPriority="high"
              />
              <div className="photo-caption">
                <strong className="caption-name">Joko Bimantaro (Jokobim)</strong>
                <span className="caption-domicile">
                  <FaMapMarkerAlt className="loc-icon" /> Takisung, Kabupaten Tanah Laut, Kalsel
                </span>
                <div className="caption-status">
                  <span className="status-solid-dot"></span>
                  <span>Tersedia untuk Proyek Web & Game</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;