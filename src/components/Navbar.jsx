import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartTotalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🌿 Paradise Nursery
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Plants</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-icon">
              🛒
              {cartTotalQuantity > 0 && <span className="cart-count">{cartTotalQuantity}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
