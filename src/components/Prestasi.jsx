import { useState } from 'react';
import {
  FaTrophy,
  FaMedal,
  FaCertificate,
  FaSearchPlus,
  FaTimes,
  FaCheckCircle
} from 'react-icons/fa';
import './Prestasi.css';

const achievements = [
  {
    id: 'kmipn-2026',
    title: 'Finalis KMIPN 2026',
    subtitle: 'Kategori Game Development (Aplikasi Permainan)',
    category: 'Kompetisi Nasional Mahasiswa',
    organizer: 'Politeknik Negeri Ujung Pandang (Tuan Rumah KMIPN)',
    year: '2026',
    desc: 'Lolos sebagai Finalis Kejuaraan Nasional Mahasiswa Bidang Informatika dan Komputer (KMIPN) melalui karya game simulasi perkuliahan orisinal "Niskala Masa" oleh Tim Soto Banjar Politala.',
    icon: <FaTrophy />,
    badgeColor: 'var(--accent-amber)',
    image: '/KMIPN.png',
  },
  {
    id: 'best-project-2025',
    title: 'Best Project TEFA IT 2025',
    subtitle: 'Pengembangan Perangkat Lunak Terbaik',
    category: 'Penghargaan Institusi',
    organizer: 'TEFA IT Politeknik Negeri Tanah Laut',
    year: '2025',
    desc: 'Dianugerahi penghargaan proyek terbaik berkat dedikasi, kualitas arsitektur kode, dan implementasi sistem software handal di lingkungan Teaching Factory IT Politala.',
    icon: <FaMedal />,
    badgeColor: 'var(--accent-primary)',
    image: '/Best Project.png',
  },
  {
    id: 'jwd-bnsp',
    title: 'Junior Web Developer',
    subtitle: 'Sertifikasi Kompetensi Profesi Nasional',
    category: 'Standar Kompetensi Kerja Nasional (SKKNI)',
    organizer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2025',
    desc: 'Memperoleh sertifikat kompetensi resmi profesi Junior Web Developer yang membuktikan kecakapan standar industri dalam pemrograman web, basis data, dan implementasi aplikasi.',
    icon: <FaCertificate />,
    badgeColor: 'var(--accent-emerald)',
    image: '/JWD.jpg',
  },
];

function Prestasi() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="prestasi section" id="prestasi">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaTrophy /> Rekognisi & Kredensial
          </div>
          <h2 className="section-title">
            Prestasi & <span className="highlight">Sertifikasi Resmi</span>
          </h2>
          <p className="section-subtitle">
            Validasi kompetensi profesional dan rekam jejak prestasi di tingkat nasional maupun institusi.
          </p>
        </div>

        {/* Accolade Cards Grid */}
        <div className="prestasi-grid">
          {achievements.map((item) => (
            <div className="accolade-card" key={item.id}>
              {/* Media Thumbnail with Lightbox trigger */}
              <div
                className="accolade-thumb-box"
                onClick={() => setSelectedImage({ src: item.image, title: item.title })}
                title="Klik untuk memperbesar sertifikat"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="accolade-thumb-img"
                  loading="lazy"
                  width="500"
                  height="350"
                />
                <div className="accolade-thumb-overlay">
                  <span className="zoom-btn">
                    <FaSearchPlus /> Perbesar
                  </span>
                </div>
                <div className="accolade-year-chip font-mono">
                  {item.year}
                </div>
              </div>

              {/* Accolade Body */}
              <div className="accolade-body">
                <div className="accolade-meta-row">
                  <span className="accolade-icon-badge" style={{ color: item.badgeColor }}>
                    {item.icon}
                  </span>
                  <div className="accolade-org-info">
                    <span className="accolade-cat">{item.category}</span>
                    <span className="accolade-organizer">{item.organizer}</span>
                  </div>
                </div>

                <h3 className="accolade-title">{item.title}</h3>
                <h4 className="accolade-sub">{item.subtitle}</h4>
                <p className="accolade-desc">{item.desc}</p>

                <div className="accolade-footer">
                  <span className="verified-badge">
                    <FaCheckCircle className="verified-ic" /> Terverifikasi
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal / Lightbox */}
        {selectedImage && (
          <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-header">
                <h4 className="lightbox-title">{selectedImage.title}</h4>
                <button
                  className="lightbox-close-btn"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Tutup pratinjau"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="lightbox-img-wrapper">
                <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-img" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Prestasi;
