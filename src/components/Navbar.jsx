import { useState, useEffect } from 'react';
import {
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaCode,
  FaFolderOpen,
  FaTrophy,
  FaUser,
  FaEnvelope,
  FaFileAlt
} from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { label: 'Tentang', href: '#about', icon: <FaUser /> },
  { label: 'Banjar Script', href: '#banjar-script', icon: <FaCode />, badge: 'Bahasa' },
  { label: 'Portofolio', href: '#portfolio', icon: <FaFolderOpen /> },
  { label: 'Prestasi', href: '#prestasi', icon: <FaTrophy /> },
  { label: 'CV', href: '#cv', icon: <FaFileAlt /> },
  { label: 'Kontak', href: '#contact', icon: <FaEnvelope /> },
];

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);

          const sections = ['home', 'about', 'banjar-script', 'portfolio', 'prestasi', 'cv', 'contact'];
          const scrollPos = window.scrollY + 120;

          for (const id of sections) {
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(`#${id}`);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand */}
        <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="brand-badge">JB</div>
          <div className="brand-info">
            <span className="brand-name">Joko Bimantaro</span>
            <span className="brand-status">
              <span className="status-dot"></span>
              Tersedia untuk kerja
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Navigasi Utama">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
              {item.badge && <span className="nav-pill">{item.badge}</span>}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
            title={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
          >
            {theme === 'dark' ? <FaSun className="icon-sun" /> : <FaMoon className="icon-moon" />}
          </button>

          <a
            href="#contact"
            className="btn btn-primary btn-sm desktop-only"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Hubungi
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-links">
            <a
              href="#home"
              className={`mobile-link ${activeSection === '#home' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#home')}
            >
              Beranda
            </a>
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`mobile-link ${activeSection === item.href ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span className="mobile-link-icon">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && <span className="nav-pill">{item.badge}</span>}
              </a>
            ))}
          </div>
          <div className="mobile-drawer-footer">
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
