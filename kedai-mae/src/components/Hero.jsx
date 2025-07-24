import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="https://picsum.photos/1920/1080?random=1" 
          alt="Delicious Indonesian Food"
          className="hero-image"
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
              <div className="feature-icon">🍽️</div>
              <span>Cita Rasa Autentik</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🌿</div>
              <span>Bahan Segar</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <span>Pelayanan Cepat</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">💝</div>
              <span>Harga Terjangkau</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="scroll-arrow"></div>
        <span>Scroll untuk melihat menu</span>
      </motion.div>
    </section>
  );
};

export default Hero;