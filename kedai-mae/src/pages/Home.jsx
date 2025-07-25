import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import MenuCard from '../components/MenuCard';
import { getPopularItems } from '../data/menuData';
import { testimonials } from '../data/menuData';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import './Home.css';

const Home = () => {
  const popularItems = getPopularItems();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Parallax effect (only on desktop)
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* Popular Menu Section */}
      <section className="section popular-menu">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Menu Populer</h2>
            <p className="section-subtitle">
              Hidangan favorit pelanggan yang paling banyak dipesan
            </p>
          </motion.div>

          <div className="grid grid-3">
            {popularItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <motion.div 
            className="view-all-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/menu" className="btn btn-primary">
              Lihat Semua Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div 
          className="features-background"
          style={{
            transform: window.innerWidth > 768 ? `translateY(${scrollY * 0.3}px)` : 'none'
          }}
        ></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Mengapa Memilih Kedai Mae?</h2>
          </motion.div>

          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">Cita Rasa</div>
              <h3>Cita Rasa Autentik</h3>
              <p>Resep turun temurun yang telah terjaga keasliannya selama bertahun-tahun</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">Bahan Segar</div>
              <h3>Bahan Berkualitas</h3>
              <p>Menggunakan bahan-bahan segar pilihan terbaik dari petani lokal</p>
            </motion.div>

            <motion.div 
              className="feature-card clickable"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              onClick={() => window.location.href = '/menu'}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">Cepat</div>
              <h3>Pelayanan Cepat</h3>
              <p>Sistem pemesanan yang efisien untuk pengalaman yang memuaskan</p>
              <div className="feature-action">Klik untuk pesan sekarang →</div>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">Terjangkau</div>
              <h3>Harga Terjangkau</h3>
              <p>Kualitas premium dengan harga yang ramah di kantong</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Apa Kata Pelanggan</h2>
            <p className="section-subtitle">
              Testimoni dari pelanggan setia Kedai Mae
            </p>
          </motion.div>

          <div className="testimonials-slider">
            <div className="slider-container">
              <div 
                className="slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={testimonial.id}
                    className="testimonial-slide"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0.6,
                      scale: index === currentSlide ? 1 : 0.95,
                      y: index === currentSlide ? 0 : 10
                    }}
                    transition={{ 
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <div className="testimonial-card">
                      <div className="testimonial-content">
                        <div className="stars">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} className="star" />
                          ))}
                        </div>
                        <p className="testimonial-text">"{testimonial.comment}"</p>
                      </div>
                      <div className="testimonial-author">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="author-image"
                        />
                        <div className="author-info">
                          <h4 className="author-name">{testimonial.name}</h4>
                          <span className="author-title">Pelanggan Setia</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button className="slider-btn prev-btn" onClick={prevSlide}>
              <ChevronLeftIcon className="slider-icon" />
            </button>
            <button className="slider-btn next-btn" onClick={nextSlide}>
              <ChevronRightIcon className="slider-icon" />
            </button>
            
            {/* Dots Indicator */}
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parallax CTA Section */}
      <section className="parallax-cta-section">
        <div 
          className="parallax-background"
          style={{
            transform: window.innerWidth > 768 ? `translateY(${scrollY * 0.4}px)` : 'none'
          }}
        ></div>
        <div className="parallax-overlay"></div>
        <div className="container">
          <motion.div
            className="parallax-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="parallax-title">Rasakan Pengalaman Kuliner Terbaik</h2>
            <p className="parallax-subtitle">
              Bergabunglah dengan ribuan pelanggan yang telah merasakan kelezatan autentik Kedai Mae
            </p>
            <div className="parallax-buttons">
              <Link to="/menu" className="btn btn-primary parallax-btn">
                Pesan Sekarang
              </Link>
              <Link to="/about" className="btn btn-secondary parallax-btn">
                Tentang Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;