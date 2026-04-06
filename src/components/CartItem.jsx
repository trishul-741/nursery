import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../redux/CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const handleIncreaseQuantity = (id) => {
    dispatch(cartActions.increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(cartActions.decreaseQuantity(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const handleCheckout = () => {
    alert('Checkout Coming Soon! Thank you for your interest in Paradise Nursery.');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty</p>
          <p>Visit our Plants page to add some beautiful houseplants!</p>
          <button
            className="continue-shopping-btn"
            onClick={handleContinueShopping}
            style={{ marginTop: '1rem' }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="cart-items-container">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div
                  className="product-image"
                  style={{
                    fontSize: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e8f5e9',
                    width: '100px',
                    height: '100px',
                    borderRadius: '8px',
                    marginRight: '1.5rem'
                  }}
                >
                  {item.image}
                </div>

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
                </div>

                <div className="quantity-control">
                  <button
                    className="quantity-btn"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    −
                  </button>
                  <input
                    type="text"
                    className="quantity-input"
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    className="quantity-btn"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  ${item.totalPrice.toFixed(2)}
                </div>

                <button
                  className="delete-btn"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>${(totalPrice * 0.08).toFixed(2)}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Total:</span>
              <span>${(totalPrice * 1.08).toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="checkout-section">
            <button
              className="continue-shopping-btn"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
            <button
              className="checkout-btn coming-soon"
              onClick={handleCheckout}
              title="This feature is coming soon"
            >
              Checkout - Coming Soon
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
