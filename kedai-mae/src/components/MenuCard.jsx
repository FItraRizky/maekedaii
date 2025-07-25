import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, StarIcon, HeartIcon, FireIcon } from '@heroicons/react/24/solid';
import { useApp } from '../context/AppContext';
import { formatPrice } from '../data/menuData';
import './MenuCard.css';

const MenuCard = ({ item, index }) => {
  const { addToCart } = useApp();
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addToCart(item);
    setTimeout(() => setIsAdding(false), 600);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      className={`menu-card ${isAdding ? 'adding' : ''}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <div className="menu-card-image-container">
        <img 
          src={item.image} 
          alt={item.name}
          className="menu-card-image"
          loading="lazy"
        />
        {item.popular && (
          <motion.div 
            className="popular-badge"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          >
            <FireIcon className="fire-icon" />
            <span>Popular</span>
          </motion.div>
        )}
        
        <motion.button
          className={`like-btn ${isLiked ? 'liked' : ''}`}
          onClick={toggleLike}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <HeartIcon className="heart-icon" />
        </motion.button>
        <div className="image-overlay">
          <motion.button 
            className="quick-add-btn"
            onClick={handleAddToCart}
            aria-label={`Add ${item.name} to cart`}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            disabled={isAdding}
          >
            <PlusIcon className={`plus-icon ${isAdding ? 'spinning' : ''}`} />
          </motion.button>
          
          <div className="quick-view-overlay">
            <span className="quick-view-text">Klik untuk tambah ke keranjang</span>
          </div>
        </div>
      </div>
      
      <div className="menu-card-content">
        <div className="menu-card-header">
          <h3 className="menu-card-title">{item.name}</h3>
          <span className="menu-card-price">{formatPrice(item.price)}</span>
        </div>
        
        <p className="menu-card-description">{item.description}</p>
        
        <div className="menu-card-footer">
          <span className="menu-card-category">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
          
          <motion.button 
            className={`add-to-cart-btn ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            disabled={isAdding}
          >
            <PlusIcon className={`btn-icon ${isAdding ? 'spinning' : ''}`} />
            <span>{isAdding ? 'Menambah...' : 'Tambah'}</span>
            {isAdding && <div className="loading-dots"><span></span><span></span><span></span></div>}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;