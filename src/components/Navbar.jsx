import { useState, useEffect } from 'react';
import {
    FaSun,
    FaMoon,
    FaGithub,
    FaBookOpen,
    FaUser,
    FaFileAlt,
    FaFolderOpen,
    FaTrophy,
    FaChartLine,
    FaMapMarkerAlt,
    FaEnvelope
} from 'react-icons/fa';
import './Navbar.css';

const navItems = [
    { label: 'Overview', href: '#home', icon: <FaBookOpen /> },
    { label: 'Tentang', href: '#about', icon: <FaUser /> },
    { label: 'CV', href: '#cv', icon: <FaFileAlt /> },
    { label: 'Portofolio', href: '#portfolio', icon: <FaFolderOpen />, badge: '6' },
    { label: 'Prestasi', href: '#prestasi', icon: <FaTrophy />, badge: '3' },
    { label: 'Aktivitas', href: '#activity', icon: <FaChartLine /> },
    { label: 'Lokasi', href: '#location', icon: <FaMapMarkerAlt /> },
    { label: 'Kontak', href: '#contact', icon: <FaEnvelope /> },
];

// 5 Main Tabs for Mobile Bottom App Dock
const mobileDockItems = [
    { label: 'Home', href: '#home', icon: <FaBookOpen /> },
    { label: 'About', href: '#about', icon: <FaUser /> },
    { label: 'Repos', href: '#portfolio', icon: <FaFolderOpen /> },
    { label: 'Activity', href: '#activity', icon: <FaChartLine /> },
    { label: 'Contact', href: '#contact', icon: <FaEnvelope /> },
];

function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navItems.map(item => item.href.slice(1));
            let current = '#home';

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 180) {
                        current = '#' + id;
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();

        if (window.lenis) {
            window.lenis.scrollTo(href, { offset: -80, duration: 1.2 });
        } else {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            {/* Main Header Bar */}
            <header className={`navbar-header${scrolled ? ' scrolled' : ''}`}>
                <div className="navbar-top-bar">
                    <div className="container navbar-top-container">
                        <div className="navbar-brand-group">
                            <a
                                href="https://github.com/jokobim12"
                                target="_blank"
                                rel="noreferrer"
                                className="navbar-github-icon"
                                title="GitHub Profile @jokobim12"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="#home"
                                onClick={(e) => handleLinkClick(e, '#home')}
                                className="navbar-brand-name font-mono"
                            >
                                jokobim12<span className="repo-slash">/</span><span className="repo-name">portfolio</span>
                            </a>
                            <span className="navbar-status-pill">
                                <span className="status-dot"></span> Available for hire
                            </span>
                        </div>

                        <div className="navbar-actions-group">
                            <button
                                className="theme-toggle-btn font-mono"
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            >
                                {theme === 'dark' ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
                                <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Tabs Bar */}
                <div className="navbar-tabs-bar desktop-only">
                    <div className="container navbar-tabs-container">
                        <nav className="gh-tabs-nav">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`gh-tab-item ${activeSection === item.href ? 'active' : ''}`}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                >
                                    <span className="tab-icon">{item.icon}</span>
                                    <span className="tab-label">{item.label}</span>
                                    {item.badge && <span className="tab-count-badge font-mono">{item.badge}</span>}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Mobile App Bottom Dock */}
            <nav className="mobile-app-dock mobile-only" aria-label="Mobile Bottom Navigation">
                <div className="mobile-dock-container">
                    {mobileDockItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`mobile-dock-item ${activeSection === item.href ? 'active' : ''}`}
                            onClick={(e) => handleLinkClick(e, item.href)}
                        >
                            <span className="dock-icon">{item.icon}</span>
                            <span className="dock-label font-mono">{item.label}</span>
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
