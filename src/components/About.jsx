import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCheckCircle,
  FaCode,
  FaLayerGroup,
  FaDatabase,
  FaAward
} from 'react-icons/fa';
import './About.css';

const skillCategories = [
  {
    title: 'Bahasa Pemrograman',
    icon: <FaCode />,
    skills: ['PHP', 'JavaScript (ES6+)', 'Python', 'SQL', 'HTML5 & CSS3', 'Banjar Script'],
  },
  {
    title: 'Framework & Frontend',
    icon: <FaLayerGroup />,
    skills: ['Laravel 12', 'React.js', 'Tailwind CSS', 'Bootstrap 5', 'Filament Admin'],
  },
  {
    title: 'Database & Tools',
    icon: <FaDatabase />,
    skills: ['MySQL', 'Git & GitHub', 'RESTful API', 'Figma', 'Node.js', 'Vite'],
  },
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaUser /> Profil Profesional
          </div>
          <h2 className="section-title">
            Mengenal Lebih Dekat <span className="highlight">Joko Bimantaro</span>
          </h2>
          <p className="section-subtitle">
            Perjalanan dedikasi di bidang teknologi informasi, pengembangan perangkat lunak, 
            dan riset implementasi komputasi praktis.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Visual Portrait & Key Highlights */}
          <div className="about-media-col">
            <div className="about-image-card">
              <img
                src="/penghargaan.jpg"
                alt="Joko Bimantaro menerima penghargaan di Politala"
                className="about-image"
                loading="lazy"
                width="600"
                height="800"
              />
              <div className="about-image-badge">
                <FaAward className="award-badge-icon" />
                <div>
                  <strong>Best Project 2025</strong>
                  <span>TEFA IT Politala</span>
                </div>
              </div>
            </div>

            <div className="about-quick-meta">
              <div className="quick-meta-item">
                <span className="meta-label">Pendidikan</span>
                <span className="meta-value">D3 Teknologi Informasi - Politala</span>
              </div>
              <div className="quick-meta-item">
                <span className="meta-label">Domisili</span>
                <span className="meta-value">Takisung, Tanah Laut, Kalsel</span>
              </div>
              <div className="quick-meta-item">
                <span className="meta-label">Status</span>
                <span className="meta-value available">
                  <span className="status-dot"></span> Siap untuk Proyek & Kerja
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Grouped Skills */}
          <div className="about-text-col">
            <div className="bio-block">
              <h3 className="bio-title">Halo! Saya Joko Bimantaro.</h3>
              <p className="bio-paragraph">
                Saya adalah mahasiswa aktif program studi <strong>D3 Teknologi Informasi</strong> di{' '}
                <strong>Politeknik Negeri Tanah Laut (Politala)</strong>. Kecintaan saya pada dunia rekayasa
                perangkat lunak berawal sejak usia 16 tahun, di mana saya mulai mendalami logika pemrograman,
                struktur data, dan arsitektur web modern.
              </p>
              <p className="bio-paragraph">
                Di lingkungan kampus, saya dipercaya berkontribusi sebagai Software Developer di{' '}
                <strong>Teaching Factory (TEFA) IT Politala</strong> dan aktif membimbing mahasiswa melalui 
                program bimbingan privat pembuatan web Laravel 12. Bagi saya, kode yang baik bukan hanya tentang 
                fungsi yang berjalan, tetapi juga performa yang cepat, struktur yang bersih, dan nilai nyata bagi penggunanya.
              </p>
            </div>

            {/* Direct Contact Table */}
            <div className="info-table-card">
              <div className="info-row">
                <span className="info-cell-label"><FaEnvelope /> Email</span>
                <a href="mailto:joko.bimantaro@mhs.politala.ac.id" className="info-cell-value">
                  joko.bimantaro@mhs.politala.ac.id
                </a>
              </div>
              <div className="info-row">
                <span className="info-cell-label"><FaBriefcase /> Peran Utama</span>
                <span className="info-cell-value">Full-Stack Web & Game Developer</span>
              </div>
              <div className="info-row">
                <span className="info-cell-label"><FaMapMarkerAlt /> Lokasi</span>
                <span className="info-cell-value">Tanah Laut, Kalimantan Selatan, Indonesia</span>
              </div>
            </div>

            {/* Skills Grouping */}
            <div className="skills-container">
              <h4 className="skills-heading">Keahlian & Ekosistem Teknologi</h4>
              <div className="skills-categories-grid">
                {skillCategories.map((cat, i) => (
                  <div className="skill-cat-card" key={i}>
                    <div className="skill-cat-header">
                      <span className="cat-icon">{cat.icon}</span>
                      <span className="cat-title">{cat.title}</span>
                    </div>
                    <div className="skill-cat-items">
                      {cat.skills.map((skill) => (
                        <span className="skill-pill" key={skill}>
                          <FaCheckCircle className="pill-check" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
