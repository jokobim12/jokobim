import { useState } from 'react';
import {
  FaFolderOpen,
  FaExternalLinkAlt,
  FaGithub,
  FaGamepad,
  FaDownload,
  FaStar,
  FaCodeBranch
} from 'react-icons/fa';
import './Portfolio.css';

const projects = [
  {
    id: 'niskala-masa',
    title: 'Niskala Masa',
    subtitle: 'Simulasi Perkuliahan (PC & Linux)',
    category: 'Game',
    featured: true,
    badgeText: 'Finalis KMIPN 2026',
    desc: 'Permainan simulasi perkuliahan berbasis Windows & Linux dengan sistem manajemen statistik (Nilai, Stress, Tenaga), mini game akademik & sosial, serta 5 variasi ending. Karya Tim Soto Banjar Politala.',
    techs: ['Windows & Linux', 'Life Simulation', 'Decision Making', 'Mini Games'],
    demo: 'https://niskala-masa.vercel.app/',
    github: 'https://github.com/jokobim12',
    image: '/niskala-poster.jpg',
  },
  {
    id: 'lms-bekantan',
    title: 'LMS-Bekantan',
    subtitle: 'Computer-Based-Test (CBT)',
    category: 'Web App',
    featured: true,
    badgeText: 'Laravel 12 & Filament',
    desc: 'Platform Computer Based Test (CBT) komprehensif dengan manajemen bank soal multi-kategori, timer ujian otomatis, anti-kecurangan, dan rekapitulasi penilaian real-time.',
    techs: ['Laravel 12', 'Filament Admin', 'MySQL', 'Tailwind CSS'],
    stars: 12,
    forks: 5,
    demo: 'https://cat.beja.biz.id',
    github: 'https://github.com/jokobim12/LMS-Bekantan',
    image: '/portfolio/cbt.png',
  },
  {
    id: 'absen-hima',
    title: 'Absensi HIMA TI',
    subtitle: 'QR Attendance System',
    category: 'Sistem Kampus',
    badgeText: 'Produksi Organisasi',
    desc: 'Sistem presensi digital berbasis pemindaian QR Code cepat dan rekapan data otomatis untuk kegiatan Himpunan Mahasiswa Teknologi Informasi Politala.',
    techs: ['PHP Native', 'MySQL', 'QR Engine', 'Tailwind CSS'],
    stars: 8,
    forks: 3,
    demo: 'https://sadhati.kesug.com',
    github: 'https://github.com/jokobim12/absenhima',
    image: '/portfolio/absensi.png',
  },
  {
    id: 'tefa-note',
    title: 'TEFA Note',
    subtitle: 'Service Logging System',
    category: 'Sistem Kampus',
    badgeText: 'TEFA IT Politala',
    desc: 'Aplikasi pencatatan layanan Teaching Factory (TEFA) IT Politeknik Negeri Tanah Laut untuk monitoring pekerjaan, inventaris, dan efisiensi workflow mahasiswa.',
    techs: ['React JS', 'JavaScript', 'Tailwind CSS', 'Vite'],
    stars: 15,
    forks: 6,
    demo: 'https://tefanote.vercel.app',
    github: 'https://github.com/jokobim12/tefanote',
    image: '/portfolio/tefanote.png',
  },
  {
    id: 'siapgrak',
    title: 'SiapGrak',
    subtitle: 'Manajemen Perkuliahan Terpadu',
    category: 'Web App',
    badgeText: 'Google Drive API',
    desc: 'Platform terpusat pengarsipan materi dan penyerahan tugas perkuliahan yang terintegrasi secara otomatis dengan Google Drive API untuk penyimpanan cloud.',
    techs: ['PHP', 'MySQL', 'Drive API', 'Tailwind CSS'],
    stars: 7,
    forks: 2,
    demo: 'https://siapgrak.kesug.com',
    github: 'https://github.com/jokobim12/siapgrak',
    image: '/portfolio/siapgrak.png',
  },
  {
    id: 'jofinku',
    title: 'Jofinku',
    subtitle: 'Task Reminder WhatsApp API',
    category: 'Web App',
    badgeText: 'WhatsApp Integration',
    desc: 'Aplikasi manajemen tugas dan pengingat deadline kuliah interaktif yang langsung mengirimkan notifikasi otomatis ke nomor WhatsApp pengguna.',
    techs: ['React JS', 'WhatsApp API', 'Tailwind CSS'],
    stars: 10,
    forks: 4,
    demo: 'https://jofinku.vercel.app',
    github: 'https://github.com/jokobim12/jofinku',
    image: '/portfolio/jofinku.png',
  },
  {
    id: 'webbuku',
    title: 'WebBuku',
    subtitle: 'Novel Reading Platform',
    category: 'Web App',
    badgeText: 'Content Portal',
    desc: 'Portal web membaca dan mempublikasikan karya novel secara daring, dilengkapi panel manajemen penulis, sistem bab, dan analytics pembaca.',
    techs: ['PHP', 'MySQL', 'Tailwind CSS'],
    stars: 6,
    forks: 2,
    demo: 'https://webbuku.kesug.com',
    github: 'https://github.com/jokobim12/webbuku',
    image: '/portfolio/webbuku.png',
  },
];

const categories = ['Semua', 'Web App', 'Game', 'Sistem Kampus'];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filteredProjects = activeFilter === 'Semua'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="portfolio-top-bar">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <div className="section-tag">
              <FaFolderOpen /> Koleksi Karya
            </div>
            <h2 className="section-title">
              Portofolio & <span className="highlight">Proyek Unggulan</span>
            </h2>
            <p className="section-subtitle">
              Pilihan sistem aplikasi, website produksi, dan game yang dirancang dengan arsitektur bersih serta performa optimal.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((item) => (
            <article className={`project-card ${item.featured ? 'featured' : ''}`} key={item.id}>
              {/* Media Preview */}
              <div className="project-image-box">
                <img
                  src={item.image}
                  alt={`Preview ${item.title}`}
                  className="project-image"
                  loading="lazy"
                  width="600"
                  height="340"
                />
                <div className="project-badge-pill">
                  {item.category === 'Game' && <FaGamepad className="badge-ic" />}
                  <span>{item.badgeText}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="project-body">
                <div className="project-title-group">
                  <h3 className="project-title">{item.title}</h3>
                  <span className="project-subtitle">{item.subtitle}</span>
                </div>

                <p className="project-desc">{item.desc}</p>

                {/* Tech Pills */}
                <div className="project-tech-tags">
                  {item.techs.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="project-footer">
                  <div className="project-stats font-mono">
                    {item.stars !== undefined && (
                      <span className="stat-pill" title="Stars">
                        <FaStar className="star-ic" /> {item.stars}
                      </span>
                    )}
                    {item.forks !== undefined && (
                      <span className="stat-pill" title="Forks">
                        <FaCodeBranch className="fork-ic" /> {item.forks}
                      </span>
                    )}
                  </div>

                  <div className="project-links">
                    {item.demo && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-action demo"
                        title={item.category === 'Game' ? 'Kunjungi Website & Unduh Game' : 'Buka Website Langsung'}
                      >
                        {item.category === 'Game' ? <FaDownload /> : <FaExternalLinkAlt />} {item.category === 'Game' ? 'Unduh Game' : 'Live Demo'}
                      </a>
                    )}
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-action gh"
                        title="Lihat Kode di GitHub"
                      >
                        <FaGithub /> Kode
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
