import React from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, StarIcon } from '@heroicons/react/24/solid';
import { useApp } from '../context/AppContext';
import { formatPrice } from '../data/menuData';
import './MenuCard.css';

const MenuCard = ({ item, index }) => {
  const { addToCart } = useApp();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <motion.div
      className="menu-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="menu-card-image-container">
        <img 
          src={item.image} 
          alt={item.name}
          className="menu-card-image"
          loading="lazy"
        />
        {item.popular && (
          <div className="popular-badge">
            <StarIcon className="star-icon" />
            <span>Popular</span>
          </div>
        )}
        <div className="image-overlay">
          <button 
            className="quick-add-btn"
            onClick={handleAddToCart}
            aria-label={`Add ${item.name} to cart`}
          >
            <PlusIcon className="plus-icon" />
          </button>
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
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlusIcon className="btn-icon" />
            Tambah
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;