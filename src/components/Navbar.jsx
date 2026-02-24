import { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'CV', href: '#cv' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Lokasi', href: '#location' },
    { label: 'Kontak', href: '#contact' },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);

            // Scroll spy — deteksi section mana yang sedang terlihat
            const sections = navItems.map(item => item.href.slice(1));
            let current = '#home';

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        current = '#' + id;
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="container">
                <a href="#home" className="navbar-logo">
                    Joko<span>bim</span>
                </a>

                <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={activeSection === item.href ? 'active' : ''}
                            onClick={handleLinkClick}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <button
                    className={`burger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
