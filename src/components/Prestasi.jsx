import { FaTrophy, FaMedal, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Prestasi.css';

const achievements = [
    {
        title: 'Finalis KMIPN 2026',
        category: 'Game Development',
        organizer: 'Politeknik Negeri Jakarta (Tuan Rumah)',
        year: '2026',
        desc: 'Finalis Kejuaraan Nasional Mahasiswa Bidang Informatika dan Komputer (KMIPN) Kategori Aplikasi Permainan atau Game Development.',
        icon: <FaTrophy />,
        image: '/KMIPN.png'
    },
    {
        title: 'Best Project 2025',
        category: 'Software Development',
        organizer: 'TEFA IT Politala',
        year: '2025',
        desc: 'Penghargaan atas pengembangan proyek perangkat lunak terbaik di lingkungan Teaching Factory (TEFA) IT Politeknik Negeri Tanah Laut.',
        icon: <FaMedal />,
        image: '/Best Project.png'
    },
    {
        title: 'Junior Web Developer',
        category: 'Sertifikasi Kompetensi',
        organizer: 'BNSP',
        year: '2025', // Assuming 2025 based on other dates, or maybe earlier
        desc: 'Sertifikasi Keahlian Junior Web Developer yang diterbitkan secara resmi oleh Badan Nasional Sertifikasi Profesi.',
        icon: <FaCertificate />,
        image: '/JWD.jpg'
    },
];

function Prestasi() {
    return (
        <section className="prestasi section" id="prestasi">
            <div className="container">
                <h2 className="section-title">Prestasi & <span>Penghargaan</span></h2>
                <p className="section-subtitle">
                    Pengakuan atas karya, kompetensi, dan dedikasi saya di bidang teknologi.
                </p>

                <div className="prestasi-grid">
                    {achievements.map((item, i) => (
                        <div className="prestasi-card fade-in" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                            <div className="prestasi-image-wrapper">
                                <img src={item.image} alt={item.title} className="prestasi-image" />
                                <div className="prestasi-image-overlay">
                                    <div className="prestasi-icon-large">
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                            <div className="prestasi-content">
                                <div className="prestasi-header">
                                    <h3 className="prestasi-title">{item.title}</h3>
                                    <span className="prestasi-year">{item.year}</span>
                                </div>
                                <div className="prestasi-meta">
                                    <span className="prestasi-category">{item.category}</span>
                                    <span className="prestasi-dot">•</span>
                                    <span className="prestasi-organizer">{item.organizer}</span>
                                </div>
                                <p className="prestasi-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Prestasi;
