import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <MapPinIcon className="contact-icon" />,
      title: "Alamat",
      details: [
        "Jl. Raya Kedai Mae No. 123",
        "Kelurahan Sukamaju",
        "Jakarta Selatan 12345"
      ]
    },
    {
      icon: <PhoneIcon className="contact-icon" />,
      title: "Telepon",
      details: [
        "+62 21 1234 5678",
        "+62 812 3456 7890"
      ]
    },
    {
      icon: <EnvelopeIcon className="contact-icon" />,
      title: "Email",
      details: [
        "info@kedaimae.com",
        "order@kedaimae.com"
      ]
    },
    {
      icon: <ClockIcon className="contact-icon" />,
      title: "Jam Buka",
      details: [
        "Senin - Jumat: 08:00 - 22:00",
        "Sabtu - Minggu: 07:00 - 23:00"
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create WhatsApp message
      const message = `Halo Kedai Mae!\n\nNama: ${formData.name}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\nSubjek: ${formData.subject}\n\nPesan:\n${formData.message}\n\nTerima kasih!`;
      
      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleWhatsAppDirect = () => {
    const message = "Halo Kedai Mae! Saya ingin bertanya tentang menu dan layanan Anda.";
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Hubungi Kami</h1>
            <p className="hero-subtitle">
              Kami siap melayani Anda dengan sepenuh hati. Jangan ragu untuk menghubungi kami!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Informasi Kontak</h2>
            <p className="section-subtitle">
              Berbagai cara untuk menghubungi Kedai Mae
            </p>
          </motion.div>
          
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-icon-container">
                  {info.icon}
                </div>
                <h3 className="contact-info-title">{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="contact-detail">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section section">
        <div className="container">
          <div className="contact-content-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="form-header">
                <h3 className="form-title">Kirim Pesan</h3>
                <p className="form-subtitle">
                  Isi formulir di bawah ini dan kami akan segera menghubungi Anda kembali
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Nama Lengkap *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Nomor Telepon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="08xx xxxx xxxx"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subjek *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Pilih subjek</option>
                      <option value="Pertanyaan Menu">Pertanyaan Menu</option>
                      <option value="Reservasi">Reservasi</option>
                      <option value="Catering">Catering</option>
                      <option value="Kerjasama">Kerjasama</option>
                      <option value="Keluhan">Keluhan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Pesan *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="5"
                    required
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button 
                    type="submit" 
                    className={`btn btn-primary form-submit ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </button>
                  
                  <button 
                    type="button" 
                    className="btn btn-secondary whatsapp-btn"
                    onClick={handleWhatsAppDirect}
                  >
                    <ChatBubbleLeftRightIcon className="btn-icon" />
                    Chat WhatsApp
                  </button>
                </div>
                
                {submitStatus && (
                  <motion.div 
                    className={`form-status ${submitStatus}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {submitStatus === 'success' 
                      ? 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.' 
                      : 'Terjadi kesalahan. Silakan coba lagi.'
                    }
                  </motion.div>
                )}
              </form>
            </motion.div>
            
            {/* Map Container */}
            <motion.div 
              className="map-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="map-header">
                <h3 className="map-title">Lokasi Kami</h3>
                <p className="map-subtitle">
                  Temukan Kedai Mae di lokasi yang strategis dan mudah dijangkau
                </p>
              </div>
              
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sMonas%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1635724073795!5m2!1sen!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kedai Mae Location"
                ></iframe>
              </div>
              
              <div className="map-info">
                <div className="map-info-item">
                  <MapPinIcon className="map-info-icon" />
                  <div>
                    <h4>Alamat Lengkap</h4>
                    <p>Jl. Raya Kedai Mae No. 123, Kelurahan Sukamaju, Jakarta Selatan 12345</p>
                  </div>
                </div>
                
                <div className="map-info-item">
                  <ClockIcon className="map-info-icon" />
                  <div>
                    <h4>Jam Operasional</h4>
                    <p>Senin - Minggu: 08:00 - 22:00 WIB</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Pertanyaan Umum</h2>
            <p className="section-subtitle">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </motion.div>
          
          <div className="faq-grid">
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="faq-question">Apakah Kedai Mae menerima pesanan online?</h4>
              <p className="faq-answer">
                Ya, kami menerima pesanan online melalui website dan WhatsApp. Anda juga bisa 
                memesan melalui aplikasi delivery partner kami.
              </p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="faq-question">Apakah tersedia layanan catering?</h4>
              <p className="faq-answer">
                Tentu saja! Kami menyediakan layanan catering untuk berbagai acara. 
                Silakan hubungi kami untuk konsultasi menu dan harga.
              </p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="faq-question">Bagaimana cara melakukan reservasi?</h4>
              <p className="faq-answer">
                Anda bisa melakukan reservasi melalui telepon, WhatsApp, atau mengisi 
                formulir kontak di website ini dengan subjek "Reservasi".
              </p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="faq-question">Apakah ada menu khusus vegetarian?</h4>
              <p className="faq-answer">
                Ya, kami memiliki berbagai pilihan menu vegetarian yang lezat dan bergizi. 
                Lihat menu kami untuk pilihan lengkap.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;