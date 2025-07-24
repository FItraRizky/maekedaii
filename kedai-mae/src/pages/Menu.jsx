import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import MenuCard from '../components/MenuCard';
import { getAllMenu } from '../data/menuData';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const allMenuItems = getAllMenu();

  const categories = [
    { id: 'all', name: 'Semua Menu', icon: '🍽️' },
    { id: 'makanan', name: 'Makanan', icon: '🍛' },
    { id: 'minuman', name: 'Minuman', icon: '🥤' },
    { id: 'cemilan', name: 'Cemilan', icon: '🍪' }
  ];

  const filteredItems = useMemo(() => {
    let filtered = allMenuItems;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [allMenuItems, activeCategory, searchTerm]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="menu-page">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="menu-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="menu-title">Menu Kedai Mae</h1>
          <p className="menu-subtitle">
            Jelajahi koleksi lengkap hidangan lezat kami yang dibuat dengan cinta dan bahan-bahan berkualitas
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="search-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="search-input-container">
            <MagnifyingGlassIcon className="search-icon" />
            <input
              type="text"
              placeholder="Cari menu favorit Anda..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  activeCategory === category.id ? 'active' : ''
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Info */}
        <motion.div 
          className="results-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            Menampilkan {filteredItems.length} dari {allMenuItems.length} menu
            {searchTerm && (
              <span className="search-term"> untuk "{searchTerm}"</span>
            )}
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div 
          className="menu-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))
          ) : (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="no-results-icon">🔍</div>
              <h3>Tidak ada menu yang ditemukan</h3>
              <p>
                {searchTerm
                  ? `Tidak ada menu yang cocok dengan "${searchTerm}"`
                  : 'Tidak ada menu dalam kategori ini'
                }
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                Reset Filter
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Popular Items Section */}
        {activeCategory === 'all' && !searchTerm && (
          <motion.div 
            className="popular-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="popular-header">
              <h2>Menu Populer</h2>
              <p>Hidangan favorit yang paling banyak dipesan</p>
            </div>
            <div className="popular-tags">
              {allMenuItems
                .filter(item => item.popular)
                .map(item => (
                  <span key={item.id} className="popular-tag">
                    {item.name}
                  </span>
                ))
              }
            </div>
          </motion.div>
        )}

        {/* Quick Stats */}
        <motion.div 
          className="menu-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="stat-item">
            <span className="stat-number">{allMenuItems.filter(item => item.category === 'makanan').length}</span>
            <span className="stat-label">Makanan</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{allMenuItems.filter(item => item.category === 'minuman').length}</span>
            <span className="stat-label">Minuman</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{allMenuItems.filter(item => item.category === 'cemilan').length}</span>
            <span className="stat-label">Cemilan</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{allMenuItems.filter(item => item.popular).length}</span>
            <span className="stat-label">Populer</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;