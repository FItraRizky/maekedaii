import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Delicious Indonesian Food"
          className="hero-image"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
      </div>
      
      <div className="hero-content">
        <div className="container">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title">
              Nikmati Lezatnya Setiap Gigitan di 
              <span className="hero-brand">Kedai Mae</span>
            </h1>
            
            <p className="hero-subtitle">
              Cita rasa autentik Indonesia dengan sentuhan modern. 
              Dibuat dengan bahan-bahan segar dan resep turun temurun 
              yang telah terjaga kualitasnya.
            </p>
            
            <div className="hero-buttons">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link to="/menu" className="btn btn-primary hero-btn">
                  Pesan Sekarang
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link to="/about" className="btn btn-secondary hero-btn">
                  Tentang Kami
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-features"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="feature-item">
              <div className="feature-icon">Cita Rasa</div>
              <span>Cita Rasa Autentik</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">Bahan Segar</div>
              <span>Bahan Segar</span>
            </div>
            
            <div className="feature-item clickable" onClick={() => window.location.href = '/menu'} style={{ cursor: 'pointer' }}>
              <div className="feature-icon">Cepat</div>
              <span>Pelayanan Cepat</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">Terjangkau</div>
              <span>Harga Terjangkau</span>
            </div>
          </motion.div>
        </div>
      </div>
      

    </section>
  );
};

export default Hero;