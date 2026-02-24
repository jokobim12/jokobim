import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Pesan dari ${form.name}`);
        const body = encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.location.href = `mailto:jokobimantaro88@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title">Hubungi <span>Saya</span></h2>
                <p className="section-subtitle">
                    Punya pertanyaan atau ingin bekerja sama? Silakan hubungi saya.
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Mari Terhubung</h3>
                        <p className="text-justify">
                            Saya selalu terbuka untuk peluang baru, proyek kolaborasi,
                            atau sekadar ngobrol. Jangan ragu untuk menghubungi saya
                            melalui form di samping atau info di bawah.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <FaEnvelope />
                                </div>
                                <div className="contact-detail-text">
                                    <h4>Email</h4>
                                    <p>jokobimantaro88@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <FaPhone />
                                </div>
                                <div className="contact-detail-text">
                                    <h4>Telepon</h4>
                                    <p>+62 831 1229 4396</p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="contact-detail-text">
                                    <h4>Lokasi</h4>
                                    <p>Takisung - Tanah Laut - Kalimantan Selatan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nama</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Nama lengkap Anda"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="email@contoh.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Pesan</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tulis pesan Anda..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                <FaPaperPlane /> Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
