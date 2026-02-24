import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa';
import './Portfolio.css';

const projects = [
    {
        title: 'Website Computer Based Test',
        desc: 'Platform Computer Based Test dengan fitur login, logout, dashboard, soal, jawaban, dan penilaian.',
        tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Filament'],
        demo: 'https://cat.beja.biz.id',
        github: 'https://github.com/jokobim12/LMS-Bekantan',
        image: '/portfolio/cbt.png',        
    },
    {
        title: 'Website Absensi HIMA TI Politala',
        desc: 'Website absensi HIMA TI Politala dengan fitur scan QR',
        tags: ['PHP Native', 'MySQL', 'Tailwind CSS',],
        demo: 'https://sadhati.kesug.com',
        github: 'https://github.com/jokobim12/absenhima',
        image: '/portfolio/absensi.png',
    },
    {
        title: 'Pencatatan Layanan TEFA IT Politala',
        desc: 'Website pencatatan layanan TEFA IT Politala untuk mempermudah mahasiswa dalam melakukan pencatatan layanan   ',
        tags: ['ReactJS', 'CSS', 'HTML', 'Tailwind CSS'],
        demo: 'https://tefanote.vercel.app',
        github: 'https://github.com/jokobim12/tefanote',
        image: '/portfolio/tefanote.png',
    },
    {
        title: 'Manajemen Perkuliahan',
        desc: 'Website untuk manajemen materi dan tugas kuliah secara otomatis yang diintegrasikan dengan google drive',
        tags: ['PHP Native', 'MySQL', 'Tailwind CSS', 'HTML'],
        demo: 'https://siapgrak.kesug.com',
        github: 'https://github.com/jokobim12/siapgrak',
        image: '/portfolio/siapgrak.png',
    },
    {
        title: 'Manajemen Tugas Kuliah',
        desc: 'Website untuk mencatat tugas kuliah yang harus dikerjakan, dilengkapi dengan fitur pengingat dan notifikasi yang terhubung ke whatsapp',
        tags: ['ReactJS', 'Tailwind CSS', 'HTML'],
        demo: 'https://jofinku.vercel.app',
        github: 'https://github.com/jokobim12/jofinku',
        image: '/portfolio/jofinku.png',
    },
    {
        title: 'Website Buku Novel',
        desc: 'Website untuk Membaca dan Menulis Novel yang dilengkapi dengan fitur login, logout, dashboard',
        tags: ['PHP Native', 'MySQL', 'Tailwind CSS', 'HTML'],
        demo: 'https://webbuku.kesug.com',
        github: 'https://github.com/jokobim12/webbuku',
        image: '/portfolio/webbuku.png',
    },
];

function Portfolio() {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <h2 className="section-title">Portofolio <span>Saya</span></h2>
                <p className="section-subtitle">
                    Berikut beberapa proyek yang sudah dan sedang saya kerjakan.
                </p>

                <div className="portfolio-grid">
                    {projects.map((project, i) => (
                        <div className="portfolio-card" key={i}>
                            <div className="portfolio-card-image">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <FaCode className="portfolio-card-placeholder" />
                                )}
                            </div>
                            <div className="portfolio-card-body">
                                <h3 className="portfolio-card-title">{project.title}</h3>
                                <p className="portfolio-card-desc">{project.desc}</p>
                                <div className="portfolio-card-tags">
                                    {project.tags.map((tag) => (
                                        <span className="portfolio-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className="portfolio-card-links">
                                    <a href={project.demo} target="_blank" rel="noreferrer">
                                        <FaExternalLinkAlt /> Website
                                    </a>
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <FaGithub /> GitHub
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
