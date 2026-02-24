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
    { label: 'Home', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'CV', href: '#cv' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Kontak', href: '#contact' },
];

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Joko<span>bim</span></h3>
                        <p>
                            Software Developer 
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Navigasi</h4>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Sosial Media</h4>
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

                <div className="footer-bottom">
                    &copy; {year} Joko<span>bim</span>. Semua hak dilindungi.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
