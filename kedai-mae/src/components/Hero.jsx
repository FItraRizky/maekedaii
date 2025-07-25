import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SparklesIcon, HeartIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
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
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="hero-greeting">Selamat Datang di</span>
              <span className="hero-brand">Kedai Mae</span>
              <span className="hero-tagline">Cita Rasa Autentik Indonesia</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Nikmati kelezatan masakan tradisional Indonesia dengan bahan-bahan segar pilihan 
              dan resep turun temurun yang telah terjaga kualitasnya sejak puluhan tahun.
            </motion.p>
            
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
            <motion.div 
              className="feature-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">
                <SparklesIcon className="icon-svg" />
              </div>
              <span>Cita Rasa Autentik</span>
            </motion.div>
            
            <motion.div 
              className="feature-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">
                <HeartIcon className="icon-svg" />
              </div>
              <span>Bahan Segar</span>
            </motion.div>
            
            <motion.div 
              className="feature-item clickable" 
              onClick={() => window.location.href = '/menu'} 
              style={{ cursor: 'pointer' }}
              whileHover={{ scale: 1.1, y: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">
                <ClockIcon className="icon-svg" />
              </div>
              <span>Pelayanan Cepat</span>
              <div className="click-indicator">Klik untuk pesan!</div>
            </motion.div>
            
            <motion.div 
              className="feature-item"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">
                <CurrencyDollarIcon className="icon-svg" />
              </div>
              <span>Harga Terjangkau</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      

    </section>
  );
};

export default Hero;