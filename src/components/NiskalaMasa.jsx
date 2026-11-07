import { useState } from 'react';
import {
  FaGamepad,
  FaDownload,
  FaExternalLinkAlt,
  FaTrophy,
  FaCheckCircle,
  FaWindows,
  FaLinux,
  FaChartLine,
  FaDice,
  FaGraduationCap,
  FaDesktop,
  FaUsers
} from 'react-icons/fa';
import './NiskalaMasa.css';

const gameFeatures = [
  {
    id: 'stats',
    number: '01',
    label: 'Sistem Statistik',
    icon: <FaChartLine />,
    title: 'Kelola Nilai, Stress, dan Tenaga',
    desc: 'Anda harus mengelola statistik tokoh utama yang terdiri dari Nilai, Stress, dan Tenaga. Dalam 1 semester disediakan 5 tenaga yang dapat digunakan untuk melaksanakan berbagai kegiatan perkuliahan, belajar, bersosialisasi, atau beristirahat.',
    points: [
      '3 Indikator Utama: Nilai Akademik, Tingkat Stress, dan Tenaga Fisik',
      'Kuota 5 Tenaga per semester untuk mengeksekusi pilihan aktivitas',
      'Manajemen Keseimbangan: Jangan biarkan stress terlalu tinggi atau tenaga habis',
    ],
  },
  {
    id: 'minigame',
    number: '02',
    label: 'Mini Game',
    icon: <FaDice />,
    title: 'Mini Game Akademik & Sosial',
    desc: 'Mainkan Mini Game Akademik (CBT, Fast Typing) untuk meningkatkan nilai, dan Mini Game Sosial (Tebak-tebakan, Lengkapi Peribahasa) untuk menurunkan tingkat stress karakter Anda secara efektif.',
    points: [
      'Mini Game Akademik (CBT & Fast Typing): Menunjang prestasi dan mendongkrak Nilai',
      'Mini Game Sosial (Tebak-tebakan & Lengkapi Peribahasa): Menurunkan level stress',
      'Interaksi Dinamis: Mengasah kecepatan berpikir dan ketangkasan pemain',
    ],
  },
  {
    id: 'endings',
    number: '03',
    label: 'Multiple Endings',
    icon: <FaGraduationCap />,
    title: '5 Variasi Akhir Cerita (Ending)',
    desc: 'Terdapat 5 variasi akhir cerita (ending) yang dipengaruhi oleh pilihan aktivitas dan statistik Anda selama masa perkuliahan, seperti Good Ending (Cum laude) dan Normal Ending (Lulus Tepat Waktu).',
    points: [
      'Good Ending: Meraih predikat kelulusan kehormatan Cum Laude',
      'Normal Ending: Menyelesaikan seluruh sks dan Lulus Tepat Waktu',
      '3 Ending Alternatif: Jalan cerita berbeda berdasarkan konsekuensi tiap keputusan',
    ],
  },
];

function NiskalaMasa() {
  const [activeTab, setActiveTab] = useState(gameFeatures[0].id);

  const currentFeature = gameFeatures.find((f) => f.id === activeTab) || gameFeatures[0];

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
            Permainan simulasi perkuliahan berbasis PC (Windows & Linux) dengan sistem pengambilan keputusan nyata.
            Karya orisinal <strong>Tim Soto Banjar (Politeknik Negeri Tanah Laut)</strong> yang berhasil menjadi{' '}
            <strong>Finalis Kejuaraan Nasional Mahasiswa Bidang Informatika dan Komputer (KMIPN) 2026</strong>{' '}
            Kategori Game Development.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="game-grid">
          {/* Left Column: Visual Card & Gameplay Mechanics */}
          <div className="game-theater-card">
            {/* Header window */}
            <div className="theater-header">
              <div className="theater-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="theater-title font-mono">
                <span>niskala-masa.vercel.app</span>
              </div>
              <div className="theater-badge">
                <FaTrophy className="badge-trophy" /> Finalis KMIPN '26
              </div>
            </div>

            {/* Poster / Screenshot Viewport */}
            <div className="theater-viewport">
              <img
                src="/KMIPN.png"
                alt="Banner Game Niskala Masa - Tim Soto Banjar Politala"
                className="theater-img"
                loading="lazy"
                width="800"
                height="450"
              />
              <div className="theater-overlay">
                <div className="theater-tagline-box">
                  <span className="theater-platform-chip font-mono">
                    <FaDesktop /> Game PC: Windows & Linux
                  </span>
                  <p className="theater-tagline">
                    "Karena setiap keputusan akan menentukan masa depanmu"
                  </p>
                </div>

                <a
                  href="https://niskala-masa.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="theater-download-btn"
                  title="Kunjungi website untuk download game Niskala Masa"
                >
                  <FaDownload />
                  <span>Kunjungi Web & Unduh Game</span>
                  <FaExternalLinkAlt className="ext-ic" />
                </a>
              </div>
            </div>

            {/* Platform & Team Bar */}
            <div className="theater-meta-bar">
              <div className="meta-col">
                <span className="meta-label">Platform Rilis</span>
                <div className="platform-badges font-mono">
                  <span className="plat-tag"><FaWindows /> Windows</span>
                  <span className="plat-tag"><FaLinux /> Linux</span>
                </div>
              </div>
              <div className="meta-sep"></div>
              <div className="meta-col">
                <span className="meta-label">Tim Pengembang</span>
                <strong className="meta-val"><FaUsers className="val-ic" /> Tim Soto Banjar</strong>
              </div>
              <div className="meta-sep"></div>
              <div className="meta-col">
                <span className="meta-label">Metode Akses</span>
                <strong className="meta-val highlight-val">Download via Website</strong>
              </div>
            </div>

            {/* Interactive Feature & Cara Main Tabs */}
            <div className="game-mechanics-box">
              <div className="mechanics-tab-nav">
                {gameFeatures.map((feat) => (
                  <button
                    key={feat.id}
                    className={`mech-tab-btn ${activeTab === feat.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(feat.id)}
                  >
                    <span className="mech-tab-num font-mono">{feat.number}</span>
                    <span className="mech-tab-lbl">{feat.label}</span>
                  </button>
                ))}
              </div>

              <div className="mechanics-tab-content">
                <div className="mech-content-header">
                  <span className="mech-icon-pill">{currentFeature.icon}</span>
                  <h4 className="mech-title">{currentFeature.title}</h4>
                </div>
                <p className="mech-desc">{currentFeature.desc}</p>

                <div className="mech-points">
                  {currentFeature.points.map((point, idx) => (
                    <div className="mech-point-item" key={idx}>
                      <FaCheckCircle className="point-check" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About, Meaning & System Requirements */}
          <div className="game-spec-card">
            {/* Story Concept & Meaning */}
            <div className="about-game-block">
              <h3 className="spec-heading">Apa itu Niskala Masa?</h3>
              <p className="spec-desc">
                Permainan <strong>"Niskala Masa"</strong> adalah sebuah permainan berbasis{' '}
                <strong>Windows (PC) dan Linux</strong> yang mengangkat konsep cerita simulasi perkuliahan
                dari awal masuk hingga wisuda dengan sistem pengambilan keputusan yang akan berdampak pada
                akhir cerita (<em>ending</em>) sang tokoh utama.
              </p>
              <p className="spec-desc">
                Tidak hanya sebagai hiburan, permainan ini juga bertujuan untuk memberikan pelajaran bahwa
                setiap pilihan yang dipilih hari ini akan menentukan hasil di masa depan. Judul{' '}
                <strong>"Niskala Masa"</strong> bermakna <em>"Waktu yang tak berwujud"</em>, mengajarkan
                bahwa waktu terus berjalan dan setiap detik keputusan memiliki konsekuensi nyata.
              </p>

              <div className="developer-team-chip">
                <span className="dev-team-lbl">Dikembangkan oleh:</span>
                <strong className="dev-team-name">Tim Soto Banjar (Politeknik Negeri Tanah Laut)</strong>
              </div>
            </div>

            {/* System Requirements Table */}
            <div className="sys-req-block">
              <h4 className="sys-req-title">System Requirements</h4>
              <div className="sys-req-grid">
                {/* Windows Card */}
                <div className="req-col">
                  <div className="req-header">
                    <FaWindows className="os-ic win" />
                    <span>Windows (64-bit)</span>
                  </div>
                  <ul className="req-list">
                    <li><strong>OS:</strong> Windows 10/11 (64-bit)</li>
                    <li><strong>Processor:</strong> Core i3 / Ryzen 3 atau setara</li>
                    <li><strong>Memory:</strong> 4 GB RAM (8 GB Disarankan)</li>
                    <li><strong>Graphics:</strong> OpenGL 3.3 support</li>
                    <li><strong>Storage:</strong> 1 GB ruang kosong</li>
                  </ul>
                </div>

                {/* Linux Card */}
                <div className="req-col">
                  <div className="req-header">
                    <FaLinux className="os-ic lnx" />
                    <span>Linux (Debian/Arch)</span>
                  </div>
                  <ul className="req-list">
                    <li><strong>OS:</strong> Ubuntu 20.04+ / Arch Linux</li>
                    <li><strong>Processor:</strong> Core i3 / Ryzen 3 atau setara</li>
                    <li><strong>Memory:</strong> 4 GB RAM (8 GB Disarankan)</li>
                    <li><strong>Graphics:</strong> OpenGL 3.3 support</li>
                    <li><strong>Storage:</strong> 1 GB ruang kosong</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="game-action-bar">
              <a
                href="https://niskala-masa.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <FaDownload /> Kunjungi Website & Unduh Game <FaExternalLinkAlt />
              </a>
              <a
                href="#prestasi"
                className="btn btn-secondary"
              >
                <FaTrophy /> Lihat Prestasi KMIPN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NiskalaMasa;