import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: [0.8, 1.1, 1],
      opacity: [0, 1, 1],
      transition: {
        duration: 1.5,
        times: [0, 0.6, 1],
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const dotVariants = {
    initial: { scale: 0 },
    animate: {
      scale: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="loading-screen"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="loading-content">
        {/* Logo Animation */}
        <motion.div 
          className="loading-logo"
          variants={logoVariants}
        >
          <div className="logo-circle">
            <div className="logo-text">KM</div>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div 
          className="loading-brand"
          variants={textVariants}
        >
          <h1 className="brand-name">Kedai Mae</h1>
          <p className="brand-tagline">Nikmati Lezatnya Setiap Gigitan</p>
        </motion.div>

        {/* Loading Spinner */}
        <div className="loading-spinner-container">
          <motion.div 
            className="loading-spinner"
            variants={spinnerVariants}
            animate="animate"
          >
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </motion.div>
        </div>

        {/* Loading Dots */}
        <div className="loading-dots">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="loading-dot"
              variants={dotVariants}
              animate="animate"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.div 
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <p>Menyiapkan pengalaman kuliner terbaik...</p>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="loading-background">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
        <div className="bg-circle bg-circle-4"></div>
      </div>

      {/* Food Icons Animation */}
      <div className="food-icons">
        <motion.div 
          className="food-icon food-icon-1"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          🍛
        </motion.div>
        <motion.div 
          className="food-icon food-icon-2"
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 5, 0],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }
          }}
        >
          🥤
        </motion.div>
        <motion.div 
          className="food-icon food-icon-3"
          animate={{
            y: [-5, 15, -5],
            rotate: [0, 10, -10, 0],
            transition: {
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
        >
          🍪
        </motion.div>
        <motion.div 
          className="food-icon food-icon-4"
          animate={{
            y: [8, -12, 8],
            rotate: [0, -8, 8, 0],
            transition: {
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }
          }}
        >
          🍜
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <motion.div 
            className="progress-fill"
            initial={{ width: "0%" }}
            animate={{ 
              width: "100%",
              transition: {
                duration: 3,
                ease: "easeInOut"
              }
            }}
          />
        </div>
        <motion.p 
          className="progress-text"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.5
            }
          }}
        >
          Memuat...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;