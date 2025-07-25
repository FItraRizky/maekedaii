import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  cartItems: [],
  isCartOpen: false,
  isLoading: true
};

// Action types
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  TOGGLE_CART: 'TOGGLE_CART',
  SET_LOADING: 'SET_LOADING'
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };

    case actionTypes.UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0)
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };

    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      };

    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem('kedaiMaeCart');

    if (savedCartItems) {
      const cartItems = JSON.parse(savedCartItems);
      cartItems.forEach(item => {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: item });
      });
    }

    // Simulate loading
    setTimeout(() => {
      dispatch({ type: actionTypes.SET_LOADING, payload: false });
    }, 1500);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kedaiMaeCart', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  // Action creators
  const addToCart = (item) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: actionTypes.UPDATE_QUANTITY, payload: { id: itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR_CART });
  };

  const toggleCart = () => {
    dispatch({ type: actionTypes.TOGGLE_CART });
  };

  const setLoading = (loading) => {
    dispatch({ type: actionTypes.SET_LOADING, payload: loading });
  };

  // Calculate cart totals
  const cartTotal = state.cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  const cartItemCount = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    setLoading,
    cartTotal,
    cartItemCount
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;