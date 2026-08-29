import {
    FaWhatsapp,
    FaInstagram,
    FaYoutube,
    FaGithub,
    FaTiktok,
    FaLinkedin,
    FaEnvelope,
} from 'react-icons/fa';
import './Footer.css';

const socialLinks = [
    { icon: <FaWhatsapp />, href: 'https://wa.me/6283112294396', label: 'WhatsApp' },
    { icon: <FaInstagram />, href: 'https://instagram.com/jokobim12', label: 'Instagram' },
    { icon: <FaTiktok />, href: 'https://tiktok.com/@jokobimmm12', label: 'TikTok' },
    { icon: <FaYoutube />, href: 'https://youtube.com/@jokobim12', label: 'YouTube' },
    { icon: <FaGithub />, href: 'https://github.com/jokobim12', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/jokobim', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:jokobimantaro88@gmail.com', label: 'Email' },
];

const navLinks = [
    { label: 'Overview', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'CV', href: '#cv' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Prestasi', href: '#prestasi' },
    { label: 'Aktivitas', href: '#activity' },
    { label: 'Lokasi', href: '#location' },
    { label: 'Kontak', href: '#contact' },
];

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="font-mono">jokobim12<span>/portfolio</span></h3>
                        <p>
                            Software Developer & IT Student Politeknik Negeri Tanah Laut.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="font-mono">Navigation</h4>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4 className="font-mono">Social Connect</h4>
                        <div className="footer-social-icons">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="social-icon"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom font-mono">
                    <span>&copy; {year} Joko Bimantaro (@jokobim12)</span>
                    <span className="dot-divider">•</span>
                    <span>Built with React & GitHub Design System</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
