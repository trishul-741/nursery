import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './App.css';

// Redux
import CartSlice from './redux/CartSlice';

// Components
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

// Redux Store Configuration
const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

// Landing Page Component
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery 🌿</h1>
        <p>Your Gateway to Beautiful Indoor Plants</p>
        <button className="get-started-btn" onClick={() => window.location.href = '/products'}>
          Get Started
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            {/* Landing Page - No Navbar */}
            <Route path="/" element={<LandingPage />} />

            {/* Pages with Navbar */}
            <Route
              path="/products"
              element={
                <>
                  <Navbar />
                  <ProductList />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Navbar />
                  <CartItem />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Navbar />
                  <AboutUs />
                </>
              }
            />

            {/* Redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
