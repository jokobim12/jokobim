import './About.css';

const skills = [
    'React JS', 'JavaScript', 'HTML', 'CSS', 'Node.js',
    'Git', 'Figma', 'Python', 'MySQL', 'Tailwind CSS','Laravel', 'PHP', 'Bootstrap', 'Photoshop',
    'Canva',
];

function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <h2 className="section-title">Tentang <span>Saya</span></h2>
                <p className="section-subtitle">
                    Kenali lebih jauh siapa saya dan apa yang saya lakukan.
                </p>

                <div className="about-content">
                    <div className="about-photo">
                        <div className="about-photo-wrapper">
                            <img src="/penghargaan.jpg" alt="Jokobim" />
                        </div>
                    </div>

                    <div className="about-info">
                        <h3>Halo! Saya Joko Bimantaro</h3>
                        <p style={{ textAlign: 'justify' }}>
                            Saya adalah mahasiswa Teknologi Informasi di Politeknik Negeri
                            Tanah laut. Memiliki ketertarikan dalam bidang teknologi
                            informasi dan Olahraga. Saya menekuni dunia teknologi sejak saya berusia 16 Tahun
                        </p>

                        <div className="about-details">
                            <div className="about-detail-item">
                                <strong>Nama:</strong>
                                <span>Joko Bimantaro</span>
                            </div>
                            <div className="about-detail-item">
                                <strong>Email:</strong>
                                <span>joko.bimantaro@mhs.politala.ac.id</span>
                            </div>
                            <div className="about-detail-item">
                                <strong>Alamat:</strong>
                                <span>Takisung - Tanah Laut - Kalsel</span>
                            </div>
                            <div className="about-detail-item">
                                <strong>Status:</strong>
                                <span>Tersedia untuk kerja</span>
                            </div>
                        </div>

                        <h4 className="skills-title">Keahlian</h4>
                        <div className="skills-list">
                            {skills.map((skill) => (
                                <span className="skill-tag" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
