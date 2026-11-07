import { useState } from 'react';
import {
  FaGamepad,
  FaPlay,
  FaExternalLinkAlt,
  FaTrophy,
  FaCode,
  FaVolumeUp,
  FaCheckCircle,
  FaBolt,
  FaBookOpen
} from 'react-icons/fa';
import './NiskalaMasa.css';

const gameDetails = [
  {
    id: 'story',
    label: 'Sinopsis & Cerita',
    icon: <FaBookOpen />,
    title: 'Perjalanan Melintasi Dimensi Waktu',
    content:
      'Niskala Masa mengajak pemain menyelami petualangan naratif misterius di mana batas antara masa lalu, masa kini, dan masa depan saling bertaut. Pemain ditugaskan memecahkan misteri anomalitas waktu, mengungkap sejarah yang terpendam, serta merajut kembali memori yang hilang melalui eksplorasi lingkungan yang penuh teka-teki.',
    points: [
      'Alur narasi emosional bertema dimensi waktu',
      'Eksplorasi misteri masa lalu & dampaknya di masa depan',
      'Dialog interaktif dan pengembangan karakter yang hidup',
    ],
  },
  {
    id: 'gameplay',
    label: 'Mekanik & Gameplay',
    icon: <FaGamepad />,
    title: 'Puzzle Interaktif & Eksplorasi Cerdas',
    content:
      'Gameplay berfokus pada interaksi cerdas pemain dengan lingkungan di sekitarnya. Pemain memecahkan teka-teki berbasis logika lingkungan, memanipulasi objek lintas era waktu, dan menavigasi rintangan dengan kontrol yang mulus dan intuitif.',
    points: [
      'Mekanik puzzle logika & manipulasi benda antar era',
      'Sistem interaksi objek dan navigasi peta yang responsif',
      'Desain rintangan yang menguji rasa ingin tahu pemain',
    ],
  },
  {
    id: 'audio',
    label: 'Visual & Audio',
    icon: <FaVolumeUp />,
    title: 'Atmosfer Sinematik & Soundscape Adaptif',
    content:
      'Dibalut dengan visual atmosferik yang menonjolkan nuansa hangat dan misteri. Arsitektur audio dirancang secara adaptif untuk memberikan efek kehadiran yang nyata, di mana musik latar bertransisi dinamis mengikuti ketegangan cerita.',
    points: [
      'Gaya visual atmosferik dengan pencahayaan dinamis',
      'Soundscape ambient imersif via Web Audio API',
      'Efek suara kontekstual di setiap interaksi pemain',
    ],
  },
];

function NiskalaMasa() {
  const [activeTab, setActiveTab] = useState(gameDetails[0].id);

  const currentTab = gameDetails.find((d) => d.id === activeTab) || gameDetails[0];

  return (
    <section className="niskala-masa section" id="niskala-masa">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaGamepad /> Karya Unggulan & Kompetisi Nasional
          </div>
          <h2 className="section-title">
            Game Showcase: <span className="highlight">Niskala Masa</span>
          </h2>
          <p className="section-subtitle">
            Karya game petualangan naratif orisinal yang berhasil mengantarkan Joko Bimantaro dan tim
            menjadi <strong>Finalis Kejuaraan Nasional Mahasiswa Bidang Informatika dan Komputer (KMIPN) 2026</strong>{' '}
            pada Kategori Game Development.
          </p>
        </div>

        {/* Bento / Showcase Grid */}
        <div className="game-grid">
          {/* Left Column: Visual Theater & Live Launch */}
          <div className="game-theater-card">
            {/* Window Bar */}
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

            {/* Visual Frame */}
            <div className="theater-viewport">
              <img
                src="/KMIPN.png"
                alt="Banner Game Niskala Masa - Finalis KMIPN 2026"
                className="theater-img"
                loading="lazy"
                width="800"
                height="450"
              />
              <div className="theater-overlay">
                <div className="theater-overlay-badge font-mono">
                  <span className="live-pulse"></span> Game Dapat Dimainkan Langsung di Web
                </div>
                <a
                  href="https://niskala-masa.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="theater-play-btn"
                  title="Mainkan Game Niskala Masa di Vercel"
                >
                  <FaPlay className="play-icon" />
                  <span>Mainkan Game Sekarang</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="theater-metrics font-mono">
              <div className="metric-chip">
                <span className="metric-lbl">Kategori</span>
                <strong className="metric-val">Game Dev KMIPN</strong>
              </div>
              <div className="metric-sep"></div>
              <div className="metric-chip">
                <span className="metric-lbl">Frame Rate</span>
                <strong className="metric-val">60 FPS Smooth</strong>
              </div>
              <div className="metric-sep"></div>
              <div className="metric-chip">
                <span className="metric-lbl">Akses</span>
                <strong className="metric-val">Live Web Browser</strong>
              </div>
            </div>

            {/* Interactive Detail Switcher */}
            <div className="theater-tabs-box">
              <div className="theater-tab-nav">
                {gameDetails.map((tab) => (
                  <button
                    key={tab.id}
                    className={`theater-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="theater-tab-body">
                <h4 className="tab-body-title">{currentTab.title}</h4>
                <p className="tab-body-desc">{currentTab.content}</p>
                <div className="tab-points-list">
                  {currentTab.points.map((pt, i) => (
                    <div className="point-item" key={i}>
                      <FaCheckCircle className="point-check" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural & Technical Credentials */}
          <div className="game-spec-card">
            <h3 className="spec-heading">Rekayasa & Rekam Jejak Prestasi</h3>
            <p className="spec-desc">
              Dikembangkan dengan metodologi rekayasa game modern berbasis web, memastikan kualitas grafis,
              kecepatan pemuatan tinggi, serta kompatibilitas lintas peramban tanpa instalasi pihak ketiga.
            </p>

            <div className="spec-items-container">
              <div className="spec-card-item">
                <div className="spec-card-top">
                  <span className="spec-pill pill-gold font-mono">KMIPN 2026</span>
                  <span className="spec-badge-label">Kompetisi Nasional Mahasiswa</span>
                </div>
                <h4 className="spec-item-title">Lolos Seleksi Finalis Nasional</h4>
                <p className="spec-item-desc">
                  Terpilih dari ratusan karya perguruan tinggi dan politeknik se-Indonesia pada ajang
                  Kejuaraan Nasional Mahasiswa Bidang Informatika dan Komputer 2026.
                </p>
              </div>

              <div className="spec-card-item">
                <div className="spec-card-top">
                  <span className="spec-pill pill-blue font-mono">Canvas & Web Engine</span>
                  <span className="spec-badge-label">Arsitektur Grafis</span>
                </div>
                <h4 className="spec-item-title">Rendering 60 FPS Tanpa Lag</h4>
                <p className="spec-item-desc">
                  Mengoptimalkan alur loop animasi <code>requestAnimationFrame</code> dengan manajemen sprite dan
                  pencahayaan yang efisien pada browser modern.
                </p>
              </div>

              <div className="spec-card-item">
                <div className="spec-card-top">
                  <span className="spec-pill pill-emerald font-mono">Web Audio API</span>
                  <span className="spec-badge-label">Desain Tata Suara</span>
                </div>
                <h4 className="spec-item-title">Soundscape Dinamis & Adaptif</h4>
                <p className="spec-item-desc">
                  Sistem pemutar suara adaptif yang secara otomatis memodulasi volume, frekuensi, dan transisi trek
                  sesuai peristiwa yang terjadi pada pemain.
                </p>
              </div>

              <div className="spec-card-item">
                <div className="spec-card-top">
                  <span className="spec-pill pill-purple font-mono">Vercel Edge</span>
                  <span className="spec-badge-label">Penyebaran Cloud</span>
                </div>
                <h4 className="spec-item-title">Akses Instan & Ringan</h4>
                <p className="spec-item-desc">
                  Aset game dikompresi secara cerdas sehingga waktu pemuatan awal kurang dari beberapa detik di
                  jaringan internet standar.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="spec-actions">
              <a
                href="https://niskala-masa.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <FaPlay /> Mainkan Niskala Masa <FaExternalLinkAlt />
              </a>
              <a
                href="#prestasi"
                className="btn btn-secondary"
              >
                <FaTrophy /> Lihat Piagam Prestasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NiskalaMasa;