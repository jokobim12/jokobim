import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
  FaCode,
  FaTrophy,
  FaGraduationCap,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Software Developer & Creator of Banjar Script</span>
          </div>

          <h1 className="hero-heading">
            Membangun Solusi Digital & <span className="highlight">Bahasa Pemrograman</span> Orisinal.
          </h1>

          <p className="hero-lead">
            Halo! Saya <strong>Joko Bimantaro</strong> (Jokobim), Mahasiswa D3 Teknologi Informasi 
            Politeknik Negeri Tanah Laut (Politala). Berfokus pada Full-Stack Web Development, 
            pengembangan game <em>Niskala Masa</em> (Finalis KMIPN 2026), serta pencipta 
            bahasa pemrograman <em>Banjar Script</em>.
          </p>

          {/* Key Metrics / Highlights */}
          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="stat-value">14+</span>
              <span className="stat-name">Proyek Selesai</span>
            </div>
            <div className="stat-separator"></div>
            <div className="hero-stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-name">Commits GitHub</span>
            </div>
            <div className="stat-separator"></div>
            <div className="hero-stat-item">
              <span className="stat-value">KMIPN</span>
              <span className="stat-name">Finalis Game Dev</span>
            </div>
            <div className="stat-separator"></div>
            <div className="hero-stat-item">
              <span className="stat-value">BNSP</span>
              <span className="stat-name">Tersertifikasi JWD</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              Lihat Proyek <FaArrowRight />
            </a>
            <a href="#banjar-script" className="btn btn-secondary">
              <FaCode /> Banjar Script
            </a>
            <a href="#contact" className="btn btn-outline">
              Hubungi Saya
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Terhubung:</span>
            <div className="socials-group">
              <a
                href="https://github.com/jokobim12"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
                title="GitHub @jokobim12"
              >
                <FaGithub /> <span>@jokobim12</span>
              </a>
              <a
                href="https://linkedin.com/in/joko-bimantaro"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile"
                title="LinkedIn Joko Bimantaro"
              >
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/6283112294396"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="WhatsApp Contact"
                title="WhatsApp Joko Bimantaro"
              >
                <FaWhatsapp /> <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Refined Profile Showcase */}
        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-image-frame">
              <img
                src="/saya.jpg"
                alt="Joko Bimantaro - Software Developer Politala"
                className="profile-photo"
                width="400"
                height="500"
                fetchPriority="high"
              />
              <div className="profile-overlay-gradient"></div>
              
              <div className="profile-location-chip font-mono">
                <FaMapMarkerAlt className="chip-icon" /> Takisung, Tanah Laut, Kalsel
              </div>
            </div>

            <div className="profile-card-details">
              <div className="profile-header-info">
                <h2 className="profile-name">Joko Bimantaro</h2>
                <p className="profile-role">Full-Stack & Game Developer</p>
              </div>

              <div className="profile-badges-row">
                <div className="profile-tag">
                  <FaGraduationCap className="tag-ic" /> Politala '24
                </div>
                <div className="profile-tag">
                  <FaTrophy className="tag-ic" /> TEFA IT Politala
                </div>
              </div>

              <div className="profile-tech-stack">
                <span className="tech-chip">PHP</span>
                <span className="tech-chip">Laravel 12</span>
                <span className="tech-chip">React JS</span>
                <span className="tech-chip">Tailwind</span>
                <span className="tech-chip">MySQL</span>
                <span className="tech-chip highlight-chip">Banjar Script</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
