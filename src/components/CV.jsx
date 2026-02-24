import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { FaGraduationCap, FaBriefcase, FaDownload } from 'react-icons/fa';
import './CV.css';

const education = [
    {
        date: '2024 - Sekarang',
        title: 'D3 Teknologi Informasi',
        place: 'Politeknik Negeri Tanah Laut',
        desc: 'Fokus pada pengembangan web dan algoritma pemrograman.',
    },
    {
        date: '2021 - 2024',
        title: 'SMK',
        place: 'SMKN 1 Takisung',
        desc: 'Teknik Komputer dan Jaringan',
    },
    {
        date: '2018 - 2021',
        title: 'MTs',
        place: 'MTs Al-Irsyad Takisung',
        desc: 'Fokus pendalaman Agama Islam',
    },
];

const experience = [
    {
        date: '2025 - Sekarang',
        title: 'Software Developer - TEFA IT Politala',
        place: 'Politeknik Negeri Tanah Laut',
        desc: 'Membangun website dan aplikasi web untuk klien dari berbagai industri.',
    },
    {
        date: '2025 - Sekarang',
        title: 'Bimbel Privat',
        place: 'Batuah Talenta Semesta',
        desc: 'Mengajar Mahasiswa/i dalam pembuatan website berbasis laravel 12',
    },
    {
        date: '2025 - Sekarang',
        title: 'HIMA TI Politala',
        place: 'Politeknik Negeri Tanah Laut',
        desc: 'Menjadi bagian dari Himpunan Mahasiswa Teknologi Informasi',
    },
];

function CV() {
    const cvRef = useRef(null);

    const handleDownload = () => {
        const element = cvRef.current;
        const opt = {
            margin: [10, 10, 10, 10],
            filename: 'CV_Joko_Bimantaro.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };
        html2pdf().set(opt).from(element).save();
    };

    return (
        <section className="cv section" id="cv">
            <div className="container">
                <h2 className="section-title">Curriculum <span>Vitae</span></h2>
                <p className="section-subtitle">
                    Riwayat pendidikan dan pengalaman kerja saya.
                </p>

                <div className="cv-grid" ref={cvRef}>
                    <div className="cv-column">
                        <h3><FaGraduationCap /> Pendidikan</h3>
                        <div className="timeline">
                            {education.map((item, i) => (
                                <div className="timeline-item" key={i}>
                                    <span className="timeline-date">{item.date}</span>
                                    <h4 className="timeline-title">{item.title}</h4>
                                    <p className="timeline-place">{item.place}</p>
                                    <p className="timeline-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cv-column">
                        <h3><FaBriefcase /> Pengalaman</h3>
                        <div className="timeline">
                            {experience.map((item, i) => (
                                <div className="timeline-item" key={i}>
                                    <span className="timeline-date">{item.date}</span>
                                    <h4 className="timeline-title">{item.title}</h4>
                                    <p className="timeline-place">{item.place}</p>
                                    <p className="timeline-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="cv-download">
                    <button onClick={handleDownload} className="btn btn-primary">
                        <FaDownload /> Download CV
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CV;
