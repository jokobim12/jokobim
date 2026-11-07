import { useState } from 'react';
import { FaCode, FaPlay, FaCopy, FaCheck, FaTerminal, FaGithub, FaBook } from 'react-icons/fa';
import './BanjarScript.css';

const codeExamples = [
  {
    id: 'hello',
    fileName: 'halo_dunia.bjr',
    tabName: 'Halo Dunia',
    code: `// Program Pertama Banjar Script
tulis("Halo Dunia matan Joko Bimantaro!");
tulis("Selamat datang di bahasa Banjar Script!");

wadah nama = "Jokobim";
wadah asal = "Tanah Laut, Kalimantan Selatan";

tulis("Pencipta: " + nama + " (" + asal + ")");`,
    output: `> Menjalankan halo_dunia.bjr ...
Halo Dunia matan Joko Bimantaro!
Selamat datang di bahasa Banjar Script!
Pencipta: Jokobim (Tanah Laut, Kalimantan Selatan)
[Program selesai dieksekusi dengan kode 0]`,
  },
  {
    id: 'conditional',
    fileName: 'kondisi_nilai.bjr',
    tabName: 'Percabangan (Amun)',
    code: `// Logika Percabangan dalam Bahasa Banjar
wadah nilaiUjian = 88;

amun (nilaiUjian >= 85) {
    tulis("Kategori: Harat Banar! Nilai pian A.");
} lamun (nilaiUjian >= 70) {
    tulis("Kategori: Baikan banar. Nilai pian B.");
} kadada {
    tulis("Kategori: Belajar pulang kawan lah.");
}`,
    output: `> Menjalankan kondisi_nilai.bjr ...
Kategori: Harat Banar! Nilai pian A.
[Program selesai dieksekusi dengan kode 0]`,
  },
  {
    id: 'loop',
    fileName: 'perulangan.bjr',
    tabName: 'Perulangan (Loop)',
    code: `// Perulangan Sederhana
wadah totalProyek = 5;

bila (wadah i = 1; i <= totalProyek; i = i + 1) {
    tulis("Memproses proyek ke-" + i + " : Sukses dibangun!");
}

tulis("Samunyaan proyek tuntung dikerjakan.");`,
    output: `> Menjalankan perulangan.bjr ...
Memproses proyek ke-1 : Sukses dibangun!
Memproses proyek ke-2 : Sukses dibangun!
Memproses proyek ke-3 : Sukses dibangun!
Memproses proyek ke-4 : Sukses dibangun!
Memproses proyek ke-5 : Sukses dibangun!
Samunyaan proyek tuntung dikerjakan.
[Program selesai dieksekusi dengan kode 0]`,
  },
];

function BanjarScript() {
  const [activeTab, setActiveTab] = useState(codeExamples[0].id);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);

  const currentExample = codeExamples.find((ex) => ex.id === activeTab) || codeExamples[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentExample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setShowTerminal(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 450);
  };

  return (
    <section className="banjar-script section" id="banjar-script">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaCode /> Inovasi & Rekayasa Perangkat Lunak
          </div>
          <h2 className="section-title">
            Bahasa Pemrograman: <span className="highlight">Banjar Script</span>
          </h2>
          <p className="section-subtitle">
            Karya orisinal perancangan bahasa pemrograman yang mengadaptasi leksikal dan sintaksis 
            bahasa daerah Banjar Kalimantan Selatan ke dalam engine interpreter modern.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="bjr-grid">
          {/* Left: Code IDE Playground */}
          <div className="bjr-ide-card">
            {/* IDE Header Tabs */}
            <div className="bjr-ide-header">
              <div className="bjr-window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>

              <div className="bjr-tabs">
                {codeExamples.map((ex) => (
                  <button
                    key={ex.id}
                    className={`bjr-tab ${activeTab === ex.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(ex.id);
                      setShowTerminal(true);
                    }}
                  >
                    <span className="tab-file-icon">⚡</span>
                    <span>{ex.tabName}</span>
                  </button>
                ))}
              </div>

              <div className="bjr-header-actions">
                <button
                  className="bjr-action-btn"
                  onClick={handleCopy}
                  title="Salin kode"
                >
                  {copied ? <FaCheck className="icon-success" /> : <FaCopy />}
                  <span className="action-btn-text">{copied ? 'Tersalin' : 'Salin'}</span>
                </button>
                <button
                  className="bjr-run-btn"
                  onClick={handleRun}
                  title="Jalankan kode"
                >
                  <FaPlay className={isRunning ? 'spin-play' : ''} />
                  <span>{isRunning ? 'Memproses...' : 'Jalankan'}</span>
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="bjr-code-viewport">
              <pre className="bjr-code-pre font-mono">
                <code>{currentExample.code}</code>
              </pre>
            </div>

            {/* Simulated Terminal Output */}
            {showTerminal && (
              <div className="bjr-terminal">
                <div className="terminal-header font-mono">
                  <FaTerminal className="term-ic" />
                  <span>Output Terminal ({currentExample.fileName})</span>
                </div>
                <pre className="terminal-output font-mono">
                  <code>{isRunning ? '> Menjalankan kode...' : currentExample.output}</code>
                </pre>
              </div>
            )}
          </div>

          {/* Right: Technical Architecture & Lexical Info */}
          <div className="bjr-info-card">
            <h3 className="info-title">Fondasi & Arsitektur</h3>
            <p className="info-desc">
              Banjar Script dibangun untuk membuktikan bahwa bahasa daerah Nusantara dapat 
              dikonseptualisasikan ke dalam komputasi formal dengan tata bahasa yang ekspresif.
            </p>

            <div className="bjr-spec-list">
              <div className="spec-item">
                <span className="spec-badge font-mono">wadah</span>
                <div className="spec-detail">
                  <strong>Deklarasi Variabel</strong>
                  <p>Menyimpan data primitif (string, angka, boolean).</p>
                </div>
              </div>

              <div className="spec-item">
                <span className="spec-badge font-mono">amun / lamun / kadada</span>
                <div className="spec-detail">
                  <strong>Logika Percabangan</strong>
                  <p>Padanan Banjar untuk struktur <code>if / else if / else</code>.</p>
                </div>
              </div>

              <div className="spec-item">
                <span className="spec-badge font-mono">tulis(...)</span>
                <div className="spec-detail">
                  <strong>Fungsi Output Standar</strong>
                  <p>Mencetak output ke konsol atau stream output interpreter.</p>
                </div>
              </div>

              <div className="spec-item">
                <span className="spec-badge font-mono">bila (...)</span>
                <div className="spec-detail">
                  <strong>Perulangan (Looping)</strong>
                  <p>Iterasi sekuensial dengan kondisi dan increment.</p>
                </div>
              </div>
            </div>

            <div className="bjr-card-cta">
              <a
                href="https://github.com/jokobim12"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <FaGithub /> Repository Banjar Script
              </a>
              <a
                href="#portfolio"
                className="btn btn-outline btn-sm"
              >
                <FaBook /> Lihat Proyek Lainnya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BanjarScript;
