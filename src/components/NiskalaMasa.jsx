import {
  FaGamepad,
  FaDownload,
  FaExternalLinkAlt,
  FaTrophy,
  FaWindows,
  FaLinux,
  FaDesktop,
  FaInfoCircle
} from 'react-icons/fa';
import './NiskalaMasa.css';

const gameFeatures = [
  {
    number: '01',
    title: 'Sistem Statistik',
    desc: 'Anda harus mengelola statistik tokoh utama yang terdiri dari Nilai, Stress, dan Tenaga. Dalam 1 semester disediakan 5 tenaga yang dapat digunakan untuk melaksanakan berbagai kegiatan.',
  },
  {
    number: '02',
    title: 'Mini Game',
    desc: 'Mainkan Mini Game Akademik (CBT, Fast Typing) untuk meningkatkan nilai, dan Mini Game Sosial (Tebak-tebakan, Lengkapi Peribahasa) untuk menurunkan tingkat stress karakter Anda.',
  },
  {
    number: '03',
    title: 'Multiple Endings',
    desc: 'Terdapat 5 variasi akhir cerita (ending) yang dipengaruhi oleh pilihan aktivitas dan statistik Anda selama masa perkuliahan, seperti Good Ending (Cum laude) dan Normal Ending (Lulus Tepat Waktu).',
  },
];

function NiskalaMasa() {
  return (
    <section className="niskala-masa section" id="niskala-masa">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaGamepad /> Karya Kompetisi Nasional Mahasiswa
          </div>
          <h2 className="section-title">
            Game Showcase: <span className="highlight">Niskala Masa</span>
          </h2>
          <p className="section-subtitle">
            Karya orisinal <strong>Tim Soto Banjar (Politeknik Negeri Tanah Laut)</strong> yang berhasil menjadi{' '}
            <strong>Finalis Kejuaraan Nasional Mahasiswa Bidang Informatika dan Komputer (KMIPN) 2026</strong>{' '}
            Kategori Game Development.
          </p>
        </div>

        {/* 1. Apa itu Niskala Masa? (Image 1 style) */}
        <div className="niskala-intro-card">
          <div className="intro-grid">
            {/* Visual Cover Poster */}
            <div className="intro-poster-wrap">
              <img
                src="/niskala-poster.jpg"
                alt="Banner Game Niskala Masa - Tim Soto Banjar Politala"
                className="intro-poster-img"
                loading="lazy"
                width="744"
                height="422"
              />
              <div className="intro-poster-meta">
                <span className="platform-tag font-mono">
                  <FaDesktop /> Game PC: Windows & Linux
                </span>
                <span className="poster-tagline">
                  "Karena setiap keputusan akan menentukan masa depanmu"
                </span>
              </div>
            </div>

            {/* Explanation Content */}
            <div className="intro-content">
              <h3 className="intro-red-title">Apa itu Niskala Masa?</h3>
              <p className="intro-text">
                Permainan <strong>"Niskala Masa"</strong> adalah sebuah permainan berbasis{' '}
                <strong>Windows (PC) dan Linux</strong> yang mengangkat konsep cerita simulasi perkuliahan
                dari awal masuk hingga wisuda dengan sistem pengambilan keputusan yang akan berdampak pada
                akhir cerita (<em>ending</em>) sang tokoh utama.
              </p>
              <p className="intro-text">
                Tidak hanya sebagai hiburan, permainan ini juga bertujuan untuk memberikan pelajaran bahwa
                setiap pilihan yang dipilih hari ini akan menentukan hasil di masa depan. Judul{' '}
                <strong>"Niskala Masa"</strong> bermakna <em>"Waktu yang tak berwujud"</em>, mengajarkan
                bahwa waktu terus berjalan dan setiap detik keputusan memiliki konsekuensi nyata.
              </p>

              {/* Developer Box */}
              <div className="intro-dev-box">
                <span className="dev-box-label">Dikembangkan oleh:</span>
                <strong className="dev-box-name">Tim Soto Banjar (Politeknik Negeri Tanah Laut)</strong>
              </div>

              {/* Game Web Download Notice */}
              <div className="intro-notice-box">
                <FaInfoCircle className="notice-icon" />
                <span>
                  Game ini berbasis PC desktop (Windows & Linux) dan tidak dapat dimainkan langsung di web browser.
                  Silakan unduh melalui website resmi.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Gameplay Features Cards (Image 2 style: 01, 02, 03) */}
        <div className="niskala-features-list">
          {gameFeatures.map((feat) => (
            <div className="feature-block-card" key={feat.number}>
              <div className="feature-num-col font-mono">{feat.number}</div>
              <div className="feature-body-col">
                <h4 className="feature-card-title">{feat.title}</h4>
                <p className="feature-card-desc">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. System Requirements (Image 3 style) */}
        <div className="niskala-sys-section">
          <h3 className="sys-red-title">System Requirements</h3>
          
          <div className="sys-cards-grid">
            {/* Windows Card */}
            <div className="sys-os-card">
              <div className="sys-os-header">
                <FaWindows className="os-icon os-win" />
                <h4 className="os-title">Windows</h4>
              </div>
              <ul className="sys-specs-list">
                <li>
                  <span className="spec-label">OS:</span>
                  <span className="spec-val">Windows 10/11 (64-bit)</span>
                </li>
                <li>
                  <span className="spec-label">Processor:</span>
                  <span className="spec-val">Intel Core i3 / AMD Ryzen 3 atau setara</span>
                </li>
                <li>
                  <span className="spec-label">Memory:</span>
                  <span className="spec-val">4 GB RAM (8 GB Direkomendasikan)</span>
                </li>
                <li>
                  <span className="spec-label">Graphics:</span>
                  <span className="spec-val">VGA dengan dukungan OpenGL 3.3</span>
                </li>
                <li>
                  <span className="spec-label">Storage:</span>
                  <span className="spec-val">1 GB ruang penyimpanan tersedia</span>
                </li>
              </ul>
            </div>

            {/* Linux Card */}
            <div className="sys-os-card">
              <div className="sys-os-header">
                <FaLinux className="os-icon os-lnx" />
                <h4 className="os-title">Linux</h4>
              </div>
              <ul className="sys-specs-list">
                <li>
                  <span className="spec-label">OS:</span>
                  <span className="spec-val">Ubuntu 20.04+ atau distribusi berbasis Debian/Arch</span>
                </li>
                <li>
                  <span className="spec-label">Processor:</span>
                  <span className="spec-val">Intel Core i3 / AMD Ryzen 3 atau setara</span>
                </li>
                <li>
                  <span className="spec-label">Memory:</span>
                  <span className="spec-val">4 GB RAM (8 GB Direkomendasikan)</span>
                </li>
                <li>
                  <span className="spec-label">Graphics:</span>
                  <span className="spec-val">VGA dengan dukungan OpenGL 3.3</span>
                </li>
                <li>
                  <span className="spec-label">Storage:</span>
                  <span className="spec-val">1 GB ruang penyimpanan tersedia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Action CTA Buttons */}
        <div className="niskala-action-cta">
          <a
            href="https://niskala-masa.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary cta-main-btn"
          >
            <FaDownload />
            <span>Kunjungi Web & Unduh Game</span>
            <FaExternalLinkAlt className="cta-ext" />
          </a>
          <a href="#prestasi" className="btn btn-secondary cta-sub-btn">
            <FaTrophy />
            <span>Lihat Prestasi KMIPN 2026</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default NiskalaMasa;
