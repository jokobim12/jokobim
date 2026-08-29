import { FaExternalLinkAlt, FaGithub, FaStar, FaCodeBranch, FaBookmark } from 'react-icons/fa';
import './Portfolio.css';

const projects = [
    {
        title: 'LMS-Bekantan / Computer-Based-Test',
        repoName: 'LMS-Bekantan',
        desc: 'Platform Computer Based Test (CBT) interaktif dengan manajemen soal, bank soal, timer ujian, serta penilaian otomatis.',
        primaryLang: 'PHP',
        langColor: '#4F5D95',
        tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Filament'],
        stars: 12,
        forks: 5,
        demo: 'https://cat.beja.biz.id',
        github: 'https://github.com/jokobim12/LMS-Bekantan',
        image: '/portfolio/cbt.png',
    },
    {
        title: 'absenhima / Absensi-HIMA-TI',
        repoName: 'absenhima',
        desc: 'Sistem absensi digital Himpunan Mahasiswa Teknologi Informasi (HIMA TI) berbasis scan QR Code cepat & rekapan otomatis.',
        primaryLang: 'PHP',
        langColor: '#4F5D95',
        tags: ['PHP Native', 'MySQL', 'Tailwind CSS', 'QR Engine'],
        stars: 8,
        forks: 3,
        demo: 'https://sadhati.kesug.com',
        github: 'https://github.com/jokobim12/absenhima',
        image: '/portfolio/absensi.png',
    },
    {
        title: 'tefanote / Service-Logging-System',
        repoName: 'tefanote',
        desc: 'Aplikasi web pencatatan layanan Teaching Factory (TEFA) IT Politeknik Negeri Tanah Laut untuk efisiensi workflow mahasiswa.',
        primaryLang: 'JavaScript',
        langColor: '#f1e05a',
        tags: ['ReactJS', 'JavaScript', 'Tailwind CSS'],
        stars: 15,
        forks: 6,
        demo: 'https://tefanote.vercel.app',
        github: 'https://github.com/jokobim12/tefanote',
        image: '/portfolio/tefanote.png',
    },
    {
        title: 'siapgrak / Manajemen-Perkuliahan',
        repoName: 'siapgrak',
        desc: 'Platform manajemen materi dan tugas perkuliahan yang terintegrasi secara otomatis dengan Google Drive API.',
        primaryLang: 'PHP',
        langColor: '#4F5D95',
        tags: ['PHP Native', 'MySQL', 'Drive API', 'Tailwind CSS'],
        stars: 7,
        forks: 2,
        demo: 'https://siapgrak.kesug.com',
        github: 'https://github.com/jokobim12/siapgrak',
        image: '/portfolio/siapgrak.png',
    },
    {
        title: 'jofinku / Task-Reminder-Web',
        repoName: 'jofinku',
        desc: 'Website pengingat tugas kuliah interaktif yang terhubung langsung dengan notifikasi WhatsApp API.',
        primaryLang: 'JavaScript',
        langColor: '#f1e05a',
        tags: ['ReactJS', 'WhatsApp API', 'Tailwind CSS'],
        stars: 10,
        forks: 4,
        demo: 'https://jofinku.vercel.app',
        github: 'https://github.com/jokobim12/jofinku',
        image: '/portfolio/jofinku.png',
    },
    {
        title: 'webbuku / Novel-Reading-Platform',
        repoName: 'webbuku',
        desc: 'Web portal membaca dan menulis cerita novel online yang dilengkapi dashboard manajemen penulis & pembaca.',
        primaryLang: 'PHP',
        langColor: '#4F5D95',
        tags: ['PHP Native', 'MySQL', 'Tailwind CSS'],
        stars: 6,
        forks: 2,
        demo: 'https://webbuku.kesug.com',
        github: 'https://github.com/jokobim12/webbuku',
        image: '/portfolio/webbuku.png',
    },
];

function Portfolio() {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <div className="portfolio-header">
                    <h2 className="section-title">
                        <FaBookmark /> Pinned <span>Repositories</span>
                    </h2>
                    <span className="badge font-mono">6 Featured Projects</span>
                </div>
                <p className="section-subtitle">
                    Koleksi proyek unggulan yang saya kembangkan dengan standar GitHub repository modern.
                </p>

                <div className="portfolio-grid">
                    {projects.map((project, i) => (
                        <div className="repo-card" key={i}>
                            <div className="repo-card-top">
                                <div className="repo-card-title-group">
                                    <FaBookmark className="repo-icon" />
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="repo-title-link font-mono"
                                    >
                                        {project.repoName}
                                    </a>
                                    <span className="repo-visibility-badge">Public</span>
                                </div>
                            </div>

                            {project.image && (
                                <div className="repo-preview-image">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                </div>
                            )}

                            <p className="repo-desc">{project.desc}</p>

                            <div className="repo-tags-list">
                                {project.tags.map((tag) => (
                                    <span className="repo-tag-pill font-mono" key={tag}>{tag}</span>
                                ))}
                            </div>

                            <div className="repo-card-footer">
                                <div className="repo-meta-left">
                                    <span className="repo-lang font-mono">
                                        <span className="lang-dot" style={{ backgroundColor: project.langColor }}></span>
                                        {project.primaryLang}
                                    </span>
                                    <span className="repo-stat font-mono">
                                        <FaStar className="stat-ic" /> {project.stars}
                                    </span>
                                    <span className="repo-stat font-mono">
                                        <FaCodeBranch className="stat-ic" /> {project.forks}
                                    </span>
                                </div>

                                <div className="repo-links-right">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-repo-link demo"
                                        title="Live Website Demo"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-repo-link gh"
                                        title="GitHub Repository"
                                    >
                                        <FaGithub /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
