import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon, 
  MinusIcon, 
  PlusIcon, 
  TrashIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import { useApp } from '../context/AppContext';
import { formatPrice } from '../data/menuData';
import './Cart.css';

const Cart = () => {
  const { 
    cartItems, 
    isCartOpen, 
    toggleCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    cartTotal 
  } = useApp();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Format pesanan untuk WhatsApp
    let message = "Halo Kedai Mae! Saya ingin memesan:\n\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Jumlah: ${item.quantity}\n`;
      message += `   Harga: ${formatPrice(item.price)} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `Total: ${formatPrice(cartTotal)}\n\n`;
    message += "Terima kasih!";

    // Encode message untuk URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
    
    // Buka WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart setelah checkout
    clearCart();
    toggleCart();
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
          />
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            className="cart-sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="cart-header">
              <div className="cart-title">
                <ShoppingBagIcon className="cart-title-icon" />
                <h2>Keranjang Belanja</h2>
              </div>
              <button className="cart-close-btn" onClick={toggleCart}>
                <XMarkIcon className="close-icon" />
              </button>
            </div>

            <div className="cart-content">
              {cartItems.length === 0 ? (
                <div className="cart-empty">
                  <ShoppingBagIcon className="empty-cart-icon" />
                  <h3>Keranjang Kosong</h3>
                  <p>Belum ada item yang ditambahkan ke keranjang</p>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        className="cart-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        layout
                      >
                        <div className="cart-item-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        
                        <div className="cart-item-details">
                          <h4 className="cart-item-name">{item.name}</h4>
                          <p className="cart-item-price">{formatPrice(item.price)}</p>
                          
                          <div className="cart-item-controls">
                            <div className="quantity-controls">
                              <button
                                className="quantity-btn"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              >
                                <MinusIcon className="quantity-icon" />
                              </button>
                              
                              <span className="quantity-display">{item.quantity}</span>
                              
                              <button
                                className="quantity-btn"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                <PlusIcon className="quantity-icon" />
                              </button>
                            </div>
                            
                            <button
                              className="remove-btn"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <TrashIcon className="remove-icon" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="cart-item-total">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="cart-summary">
                    <div className="cart-total">
                      <div className="total-row">
                        <span>Subtotal:</span>
                        <span>{formatPrice(cartTotal)}</span>
                      </div>
                      <div className="total-row">
                        <span>Pajak (10%):</span>
                        <span>{formatPrice(cartTotal * 0.1)}</span>
                      </div>
                      <div className="total-row final-total">
                        <span>Total:</span>
                        <span>{formatPrice(cartTotal * 1.1)}</span>
                      </div>
                    </div>

                    <div className="cart-actions">
                      <button 
                        className="clear-cart-btn"
                        onClick={clearCart}
                      >
                        Kosongkan Keranjang
                      </button>
                      
                      <motion.button 
                        className="checkout-btn"
                        onClick={handleCheckout}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Pesan via WhatsApp
                      </motion.button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;