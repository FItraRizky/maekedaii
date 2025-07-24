import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useApp } from '../context/AppContext';
import './Navbar.css';

const Navbar = () => {
  const { cartItems, isDarkMode, toggleCart, toggleDarkMode } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Kontak', path: '/contact' }
  ];

  const cartItemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-text">Kedai Mae</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="navbar-menu desktop-menu">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`navbar-link ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* Dark Mode Toggle for Mobile */}
            <li>
              <button className="mobile-dark-mode-toggle" onClick={() => { toggleDarkMode(); closeMenu(); }}>
                {isDarkMode ? (
                  <>
                    {/* <SunIcon className="mobile-theme-icon" /> */}
                    {/* <span>Mode Terang</span> */}
                  </>
                ) : (
                  <>
                    {/* <MoonIcon className="mobile-theme-icon" /> */}
                    {/* <span>Mode Gelap</span> */}
                  </>
                )}
              </button>
            </li>
          </ul>

          {/* Cart, Dark Mode Toggle and Mobile Menu Button */}
          <div className="navbar-actions">
            {/* Dark Mode Toggle */}
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <SunIcon className="theme-icon" />
              ) : (
                <MoonIcon className="theme-icon" />
              )}
            </button>

            {/* Cart Button */}
            <button className="cart-button" onClick={toggleCart}>
              <ShoppingCartIcon className="cart-icon" />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-button" 
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {isOpen ? (
                <XMarkIcon className="menu-icon" />
              ) : (
                <Bars3Icon className="menu-icon" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <ul className="mobile-menu-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`mobile-menu-link ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;