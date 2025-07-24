import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  HeartIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Kontak', href: '/contact' }
  ];

  const menuCategories = [
    { name: 'Makanan', href: '/menu?category=makanan' },
    { name: 'Minuman', href: '/menu?category=minuman' },
    { name: 'Cemilan', href: '/menu?category=cemilan' },
    { name: 'Menu Populer', href: '/menu?popular=true' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/kedaimae',
      icon: (
        <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/kedaimae',
      icon: (
        <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.366 3.323c-.875.876-2.026 1.366-3.323 1.366zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.876-.875-1.366-2.026-1.366-3.323s.49-2.448 1.366-3.323c.875-.876 2.026-1.366 3.323-1.366s2.448.49 3.323 1.366c.876.875 1.366 2.026 1.366 3.323s-.49 2.448-1.366 3.323c-.875.876-2.026 1.366-3.323 1.366z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/6281234567890',
      icon: (
        <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/kedaimae',
      icon: (
        <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppOrder = () => {
    const message = "Halo Kedai Mae! Saya ingin memesan makanan. Bisa bantu saya?";
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <motion.div 
              className="footer-brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="brand-logo">
                <h3 className="brand-name">Kedai Mae</h3>
                <p className="brand-tagline">Nikmati Lezatnya Setiap Gigitan</p>
              </div>
              <p className="brand-description">
                Kedai Mae menghadirkan cita rasa autentik Indonesia dengan pelayanan terbaik. 
                Kami berkomitmen untuk memberikan pengalaman kuliner yang tak terlupakan.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">Link Cepat</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Menu Categories */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">Kategori Menu</h4>
              <ul className="footer-links">
                {menuCategories.map((category, index) => (
                  <motion.li 
                    key={category.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a href={category.href} className="footer-link">
                      {category.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">Kontak Kami</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPinIcon className="contact-icon" />
                  <div className="contact-details">
                    <p>Jl. Endro Suratmin Gang Urip Sentosa I</p>
                    <p>Bandar Lampung</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <PhoneIcon className="contact-icon" />
                  <div className="contact-details">
                    <p>+62 21 1234 5678</p>
                    <p>+62 812 3456 7890</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <EnvelopeIcon className="contact-icon" />
                  <div className="contact-details">
                    <p>info@kedaimae.com</p>
                    <p>order@kedaimae.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <ClockIcon className="contact-icon" />
                  <div className="contact-details">
                    <p>Senin - Jumat: 08:00 - 22:00</p>
                    <p>Sabtu - Minggu: 07:00 - 23:00</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="btn btn-primary order-btn"
                onClick={handleWhatsAppOrder}
              >
                Pesan Sekarang
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div 
        className="newsletter-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h4 className="newsletter-title">Dapatkan Update Terbaru</h4>
              <p className="newsletter-subtitle">
                Berlangganan newsletter kami untuk mendapatkan info promo dan menu terbaru
              </p>
            </div>
            <div className="newsletter-form">
              <div className="newsletter-input-container">
                <input 
                  type="email" 
                  placeholder="Masukkan email Anda"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  Berlangganan
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <motion.div 
              className="copyright"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                © 2024 Kedai Mae{' '}
                {/* <HeartIcon className="heart-icon" />{' '}
                untuk pengalaman kuliner terbai. */}
              </p>
            </motion.div>
            
            <motion.div 
              className="footer-bottom-links"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <a href="/privacy" className="bottom-link">Kebijakan Privasi</a>
              <a href="/terms" className="bottom-link">Syarat & Ketentuan</a>
              <a href="/sitemap" className="bottom-link">Sitemap</a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="scroll-icon" />
      </motion.button>
    </footer>
  );
};

export default Footer;