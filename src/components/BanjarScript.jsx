import { useState } from 'react';
import { FaCode, FaPlay, FaCopy, FaCheck, FaTerminal, FaGithub, FaBook, FaUndo } from 'react-icons/fa';
import './BanjarScript.css';

const defaultHello = {
  pesan1: 'Halo Dunia matan Joko Bimantaro!',
  pesan2: 'Selamat datang di bahasa Banjar Script!',
  nama: 'Jokobim',
  asal: 'Tanah Laut, Kalimantan Selatan',
};

const defaultCond = {
  nilaiUjian: 88,
  pesanA: 'Kategori: Harat Banar! Nilai pian A.',
  pesanB: 'Kategori: Baikan banar. Nilai pian B.',
  pesanC: 'Kategori: Belajar pulang kawan lah.',
};

const defaultLoop = {
  totalProyek: 5,
  prefix: 'Memproses proyek ke-',
  status: 'Sukses dibangun!',
  pesanTuntas: 'Samunyaan proyek tuntung dikerjakan.',
};

function BanjarScript() {
  const [activeTab, setActiveTab] = useState('hello');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // Editable states for each tab
  const [helloData, setHelloData] = useState(defaultHello);
  const [condData, setCondData] = useState(defaultCond);
  const [loopData, setLoopData] = useState(defaultLoop);

  // Evaluated terminal outputs
  const getOutput = (tabId) => {
    if (tabId === 'hello') {
      return `> Menjalankan halo_dunia.bjr ...\n${helloData.pesan1}\n${helloData.pesan2}\nPencipta: ${helloData.nama} (${helloData.asal})\n[Program selesai dieksekusi dengan kode 0]`;
    }
    if (tabId === 'conditional') {
      const score = Number(condData.nilaiUjian) || 0;
      let evaluatedMsg = condData.pesanC;
      if (score >= 85) {
        evaluatedMsg = condData.pesanA;
      } else if (score >= 70) {
        evaluatedMsg = condData.pesanB;
      }
      return `> Menjalankan kondisi_nilai.bjr ...\n${evaluatedMsg}\n[Program selesai dieksekusi dengan kode 0]`;
    }
    if (tabId === 'loop') {
      const total = Math.min(Math.max(Number(loopData.totalProyek) || 1, 1), 10);
      const lines = [];
      lines.push('> Menjalankan perulangan.bjr ...');
      for (let i = 1; i <= total; i++) {
        lines.push(`${loopData.prefix}${i} : ${loopData.status}`);
      }
      lines.push(loopData.pesanTuntas);
      lines.push('[Program selesai dieksekusi dengan kode 0]');
      return lines.join('\n');
    }
    return '';
  };

  // Raw code generator for copy
  const getRawCode = (tabId) => {
    if (tabId === 'hello') {
      return `// Program Pertama Banjar Script
tulis("${helloData.pesan1}");
tulis("${helloData.pesan2}");

wadah nama = "${helloData.nama}";
wadah asal = "${helloData.asal}";

tulis("Pencipta: " + nama + " (" + asal + ")");`;
    }
    if (tabId === 'conditional') {
      return `// Logika Percabangan dalam Bahasa Banjar
wadah nilaiUjian = ${condData.nilaiUjian};

amun (nilaiUjian >= 85) {
    tulis("${condData.pesanA}");
} lamun (nilaiUjian >= 70) {
    tulis("${condData.pesanB}");
} kadada {
    tulis("${condData.pesanC}");
}`;
    }
    if (tabId === 'loop') {
      return `// Perulangan Sederhana
wadah totalProyek = ${loopData.totalProyek};

bila (wadah i = 1; i <= totalProyek; i = i + 1) {
    tulis("${loopData.prefix}" + i + " : ${loopData.status}");
}

tulis("${loopData.pesanTuntas}");`;
    }
    return '';
  };

  const [activeOutput, setActiveOutput] = useState(getOutput('hello'));

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setActiveOutput(getOutput(activeTab));
      setIsRunning(false);
    }, 280);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActiveOutput(getOutput(tabId));
  };

  const handleReset = () => {
    if (activeTab === 'hello') {
      setHelloData(defaultHello);
      setTimeout(() => setActiveOutput(getOutput('hello')), 50);
    } else if (activeTab === 'conditional') {
      setCondData(defaultCond);
      setTimeout(() => setActiveOutput(getOutput('conditional')), 50);
    } else if (activeTab === 'loop') {
      setLoopData(defaultLoop);
      setTimeout(() => setActiveOutput(getOutput('loop')), 50);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getRawCode(activeTab));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFileName = () => {
    if (activeTab === 'hello') return 'halo_dunia.bjr';
    if (activeTab === 'conditional') return 'kondisi_nilai.bjr';
    return 'perulangan.bjr';
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
          {/* Left: MacBook Style Code IDE Playground */}
          <div className="mac-terminal-window">
            {/* macOS Window Title Bar */}
            <div className="mac-titlebar">
              <div className="mac-traffic-lights">
                <span className="mac-dot mac-red" title="Close"></span>
                <span className="mac-dot mac-yellow" title="Minimize"></span>
                <span className="mac-dot mac-green" title="Zoom"></span>
              </div>
              <div className="mac-window-title font-mono">
                jokobim@macbook-pro — banjar-script (zsh)
              </div>
              <div className="mac-spacer"></div>
            </div>

            {/* Editor Toolbar: Tabs & Actions */}
            <div className="mac-editor-toolbar">
              <div className="mac-tab-group">
                <button
                  className={`mac-tab-btn ${activeTab === 'hello' ? 'active' : ''}`}
                  onClick={() => handleTabChange('hello')}
                >
                  <span className="tab-dot"></span>
                  <span>halo_dunia.bjr</span>
                </button>
                <button
                  className={`mac-tab-btn ${activeTab === 'conditional' ? 'active' : ''}`}
                  onClick={() => handleTabChange('conditional')}
                >
                  <span className="tab-dot"></span>
                  <span>kondisi_nilai.bjr</span>
                </button>
                <button
                  className={`mac-tab-btn ${activeTab === 'loop' ? 'active' : ''}`}
                  onClick={() => handleTabChange('loop')}
                >
                  <span className="tab-dot"></span>
                  <span>perulangan.bjr</span>
                </button>
              </div>

              <div className="mac-action-group">
                <button
                  className="mac-btn mac-reset-btn"
                  onClick={handleReset}
                  title="Kembalikan teks awal"
                >
                  <FaUndo />
                  <span>Reset</span>
                </button>
                <button
                  className="mac-btn mac-copy-btn"
                  onClick={handleCopy}
                  title="Salin kode program"
                >
                  {copied ? <FaCheck className="icon-copied" /> : <FaCopy />}
                  <span>{copied ? 'Tersalin' : 'Salin'}</span>
                </button>
                <button
                  className="mac-btn mac-run-btn"
                  onClick={handleRun}
                  title="Jalankan Banjar Script"
                >
                  <FaPlay className={isRunning ? 'spin-run' : ''} />
                  <span>{isRunning ? 'Running...' : 'Jalankan'}</span>
                </button>
              </div>
            </div>

            {/* Editable Notice Tip */}
            <div className="mac-editor-hint font-mono">
              <span className="hint-pill">EDITABLE</span>
              <span>Kata dalam tanda petik &amp; nilai variabel dapat diedit langsung. Klik <strong>Jalankan</strong> untuk melihat output baru!</span>
            </div>

            {/* Code Body with Inline Editable Strings/Variables */}
            <div className="mac-code-viewport font-mono">
              {activeTab === 'hello' && (
                <div className="code-canvas">
                  <div className="code-line comment">// Program Pertama Banjar Script</div>
                  <div className="code-line">
                    <span className="kw-func">tulis</span>
                    <span className="punc">(</span>
                    <span className="str-quote">"</span>
                    <input
                      type="text"
                      className="mac-inline-input"
                      value={helloData.pesan1}
                      onChange={(e) => setHelloData({ ...helloData, pesan1: e.target.value })}
                      style={{ width: `${Math.max(helloData.pesan1.length, 12)}ch` }}
                      title="Edit kata dalam kalimat ini"
                    />
                    <span className="str-quote">"</span>
                    <span className="punc">);</span>
                  </div>
                  <div className="code-line">
                    <span className="kw-func">tulis</span>
                    <span className="punc">(</span>
                    <span className="str-quote">"</span>
                    <input
                      type="text"
                      className="mac-inline-input"
                      value={helloData.pesan2}
                      onChange={(e) => setHelloData({ ...helloData, pesan2: e.target.value })}
                      style={{ width: `${Math.max(helloData.pesan2.length, 12)}ch` }}
                      title="Edit kata dalam kalimat ini"
                    />
                    <span className="str-quote">"</span>
                    <span className="punc">);</span>
                  </div>

                  <div className="code-line empty-line">&nbsp;</div>

                  <div className="code-line">
                    <span className="kw-def">wadah</span>{' '}
                    <span className="var-name">nama</span>{' '}
                    <span className="op">=</span>{' '}
                    <span className="str-quote">"</span>
                    <input
                      type="text"
                      className="mac-inline-input"
                      value={helloData.nama}
                      onChange={(e) => setHelloData({ ...helloData, nama: e.target.value })}
                      style={{ width: `${Math.max(helloData.nama.length, 6)}ch` }}
                      title="Edit nilai variabel nama"
                    />
                    <span className="str-quote">"</span>
                    <span className="punc">;</span>
                  </div>
                  <div className="code-line">
                    <span className="kw-def">wadah</span>{' '}
                    <span className="var-name">asal</span>{' '}
                    <span className="op">=</span>{' '}
                    <span className="str-quote">"</span>
                    <input
                      type="text"
                      className="mac-inline-input"
                      value={helloData.asal}
                      onChange={(e) => setHelloData({ ...helloData, asal: e.target.value })}
                      style={{ width: `${Math.max(helloData.asal.length, 12)}ch` }}
                      title="Edit nilai variabel asal"
                    />
                    <span className="str-quote">"</span>
                    <span className="punc">;</span>
                  </div>

                  <div className="code-line empty-line">&nbsp;</div>

                  <div className="code-line">
                    <span className="kw-func">tulis</span>
                    <span className="punc">(</span>
                    <span className="str-val">"Pencipta: "</span>{' '}
                    <span className="op">+</span>{' '}
                    <span className="var-name">nama</span>{' '}
                    <span className="op">+</span>{' '}
                    <span className="str-val">" ("</span>{' '}
                    <span className="op">+</span>{' '}
                    <span className="var-name">asal</span>{' '}
                    <span className="op">+</span>{' '}
                    <span className="str-val">")"</span>
                    <span className="punc">);</span>
                  </div>
                </div>
              )}

              {activeTab === 'conditional' && (
                <div className="code-canvas">
                  <div className="code-line comment">// Logika Percabangan dalam Bahasa Banjar</div>
                  <div className="code-line">
                    <span className="kw-def">wadah</span>{' '}
                    <span className="var-name">nilaiUjian</span>{' '}
                    <span className="op">=</span>{' '}
                    <input
                      type="number"
                      min="0"
                      max="100"
                      className="mac-inline-input num-input"
                      value={condData.nilaiUjian}
                      onChange={(e) => setCondData({ ...condData, nilaiUjian: e.target.value })}
                      style={{ width: `${Math.max(String(condData.nilaiUjian).length, 3)}ch` }}
                      title="Ubah nilai angka (contoh: 90, 75, atau 50)"
                    />
                    <span className="punc">;</span>
                  </div>

                  <div className="code-line empty-line">&nbsp;</div>

                  <div className="code-line">
                    <span className="kw-control">amun</span>{' '}
                    <span className="punc">(</span>
                    <span className="var-name">nilaiUjian</span>{' '}
                    <span className="op">&gt;=</span>{' '}
                    <span className="num-val">85</span>
                    <span className="punc">) {`{`}</span>
                  </div>
                  <div className="code-line indent">
                    <span className="kw-func">tulis</span>
                    <span className="punc">(</span>
                    <span className="str-quote">"</span>
                    <input
                      type="text"
                      className="mac-inline-input"
                      value={condData.pesanA}
                      onChange={(e) => setCondData({ ...condData, pesanA: e.target.value })}
                      style={{ width: `${Math.max(condData.pesanA.length, 12)}ch` }}
                      title="Edit kalimat hasil nilai A"
                    />
                    <span className="str-quote">"</span>
                    <span className="punc">);</span>
                  </div>
                  <div className="code-line">
                    <span className="punc">{`}`}</span>{' '}
                    <span className="kw-control">lamun</span>{' '}
                    <span className="punc">(</span>
                    <span className="var-name">nilaiUjian</span>{' '}
                    <span className="op">&gt;=</span>{' '}
                    <span className="num-val">70</span>
                    <span className="punc">) {`{`}</span>
                  </div>
                  <div className="code-line indent">
                    <span className="kw-func">tulis</span>
                    <span className="punc">(</span>
                    <span className="str-quote">"</span>
                    <input
                      type="text"
                      className="mac-inline-input"
                      value={condData.pesanB}
                      onChange={(e) => setCondData({ ...condData, pesanB: e.target.value })}
                      style={{ width: `${Math.max(condData.pesanB.length, 12)}ch` }}
                      title="Edit kalimat hasil nilai B"
                    />
                    <span className="str-quote">"</span>
                    <span className="punc">);</span>
                  </div>
                  <div className="code-line">
                    <span className="punc">{`}`}</span>{' '}
                    <span className="kw-control">kadada</span>{' '}
                    <span className="punc">{`{`}</span>
                  </div>
                  <div className="code-line indent">
                    <span className="kw-func">tulis</span>
                    <span className="punc">(</span>
                    <span className="str-quote">"</span>
                    <input
                      type="text"
                      className="mac-inline-input"
                      value={condData.pesanC}
                      onChange={(e) => setCondData({ ...condData, pesanC: e.target.value })}
                      style={{ width: `${Math.max(condData.pesanC.length, 12)}ch` }}
                      title="Edit kalimat hasil selain A & B"
                    />
                    <span className="str-quote">"</span>
                    <span className="punc">);</span>
                  </div>
                  <div className="code-line">
                    <span className="punc">{`}`}</span>
                  </div>
                </div>
              )}

              {activeTab === 'loop' && (
                <div className="code-canvas">
                  <div className="code-line comment">// Perulangan Sederhana</div>
                  <div className="code-line">
                    <span className="kw-def">wadah</span>{' '}
                    <span className="var-name">totalProyek</span>{' '}
                    <span className="op">=</span>{' '}
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="mac-inline-input num-input"
                      value={loopData.totalProyek}
                      onChange={(e) => setLoopData({ ...loopData, totalProyek: e.target.value })}
                      style={{ width: `${Math.max(String(loopData.totalProyek).length, 3)}ch` }}
                      title="Ubah batas perulangan (1-10)"
                    />
                    <span className="punc">;</span>
                  </div>

                  <div className="code-line empty-line">&nbsp;</div>

                  <div className="code-line">
                    <span className="kw-control">bila</span>{' '}
                    <span className="punc">(</span>
                    <span className="kw-def">wadah</span>{' '}
                    <span className="var-name">i</span>{' '}
                    <span className="op">=</span>{' '}
                    <span className="num-val">1</span>
                    <span className="punc">;</span>{' '}
                    <span className="var-name">i</span>{' '}
                    <span className="op">&lt;=</span>{' '}
                    <span className="var-name">totalProyek</span>
                    <span className="punc">;</span>{' '}
                    <span className="var-name">i</span>{' '}
                    <span className="op">=</span>{' '}
                    <span className="var-name">i</span>{' '}
                    <span className="op">+</span>{' '}
                    <span className="num-val">1</span>
                    <span className="punc">) {`{`}</span>
                  </div>
                  <div className="code-line indent">
                    <span className="kw-func">tulis</span>
                    <span className="punc">(</span>
                    <span className="str-quote">"</span>
                    <input
                      type="text"
                      className="mac-inline-input"
                      value={loopData.prefix}
                      onChange={(e) => setLoopData({ ...loopData, prefix: e.target.value })}
                      style={{ width: `${Math.max(loopData.prefix.length, 12)}ch` }}
                      title="Edit teks awalan loop"
                    />
                    <span className="str-quote">"</span>{' '}
                    <span className="op">+</span>{' '}
                    <span className="var-name">i</span>{' '}
                    <span className="op">+</span>{' '}
                    <span className="str-quote">" : </span>
                    <input
                      type="text"
                      className="mac-inline-input"
                      value={loopData.status}
                      onChange={(e) => setLoopData({ ...loopData, status: e.target.value })}
                      style={{ width: `${Math.max(loopData.status.length, 10)}ch` }}
                      title="Edit status hasil loop"
                    />
                    <span className="str-quote">"</span>
                    <span className="punc">);</span>
                  </div>
                  <div className="code-line">
                    <span className="punc">{`}`}</span>
                  </div>

                  <div className="code-line empty-line">&nbsp;</div>

                  <div className="code-line">
                    <span className="kw-func">tulis</span>
                    <span className="punc">(</span>
                    <span className="str-quote">"</span>
                    <input
                      type="text"
                      className="mac-inline-input"
                      value={loopData.pesanTuntas}
                      onChange={(e) => setLoopData({ ...loopData, pesanTuntas: e.target.value })}
                      style={{ width: `${Math.max(loopData.pesanTuntas.length, 15)}ch` }}
                      title="Edit kalimat penutup perulangan"
                    />
                    <span className="str-quote">"</span>
                    <span className="punc">);</span>
                  </div>
                </div>
              )}
            </div>

            {/* Simulated MacBook Terminal Output */}
            <div className="mac-terminal-console font-mono">
              <div className="mac-console-header">
                <FaTerminal className="console-icon" />
                <span>OUTPUT TERMINAL — {getFileName()}</span>
              </div>
              <div className="mac-console-prompt">
                <span className="prompt-user">jokobim@macbook-pro</span>
                <span className="prompt-sep">:</span>
                <span className="prompt-dir">~/banjar-script</span>
                <span className="prompt-sign">$</span>
                <span className="prompt-cmd">banjar run {getFileName()}</span>
              </div>
              <pre className="mac-console-output">
                <code>{isRunning ? '> Menjalankan kode banjar...' : activeOutput}</code>
              </pre>
            </div>
          </div>

          {/* Right: Technical Architecture & Lexical Info */}
          <div className="bjr-info-card">
            <h3 className="info-title">Fondasi &amp; Arsitektur</h3>
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
