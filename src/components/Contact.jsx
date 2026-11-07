import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp, FaComments } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Pesan Portofolio dari ${form.name}`);
        const body = encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`);
        window.location.href = `mailto:jokobimantaro88@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleWhatsAppSubmit = () => {
        if (!form.name || !form.message) {
            alert('Mohon isi nama dan pesan Anda terlebih dahulu.');
            return;
        }
        const text = encodeURIComponent(`Halo Joko Bimantaro,\n\nNama: ${form.name}\nEmail: ${form.email || '-'}\n\nPesan:\n${form.message}`);
        window.open(`https://wa.me/6283112294396?text=${text}`, '_blank');
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">
                        <FaComments /> Mari Berkolaborasi
                    </div>
                    <h2 className="section-title">
                        Hubungi <span className="highlight">Saya</span>
                    </h2>
                    <p className="section-subtitle">
                        Punya proyek web, game, ide kolaborasi, atau peluang karir? Kirim pesan langsung melalui formulir atau kontak di bawah ini.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Left Info Panel */}
                    <div className="contact-info">
                        <div className="contact-info-top">
                            <h3 className="contact-info-heading">Mari Terhubung</h3>
                            <p className="contact-info-intro">
                                Saya selalu antusias mendiskusikan inovasi teknologi, tantangan teknis, maupun kesempatan bekerja sama. Silakan hubungi saya kapan saja!
                            </p>
                        </div>

                        <div className="contact-details">
                            <a href="mailto:jokobimantaro88@gmail.com" className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <FaEnvelope />
                                </div>
                                <div className="contact-detail-text">
                                    <h4>Email Resmi</h4>
                                    <p>jokobimantaro88@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://wa.me/6283112294396" target="_blank" rel="noreferrer" className="contact-detail-item">
                                <div className="contact-detail-icon wa">
                                    <FaWhatsapp />
                                </div>
                                <div className="contact-detail-text">
                                    <h4>WhatsApp</h4>
                                    <p>+62 831 1229 4396</p>
                                </div>
                            </a>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon loc">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="contact-detail-text">
                                    <h4>Domisili</h4>
                                    <p>Takisung, Tanah Laut, Kalsel</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-availability-banner">
                            <span className="avail-pulse"></span>
                            <span>Status: Tersedia untuk Freelance & Full-time</span>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Masukkan nama Anda"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Alamat Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="nama@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Pesan atau Kebutuhan Proyek</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Ceritakan detail proyek atau pertanyaan Anda..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="contact-form-actions">
                                <button type="submit" className="btn btn-primary">
                                    <FaPaperPlane /> Kirim via Email
                                </button>
                                <button
                                    type="button"
                                    onClick={handleWhatsAppSubmit}
                                    className="btn btn-secondary btn-wa"
                                >
                                    <FaWhatsapp /> Kirim via WhatsApp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;