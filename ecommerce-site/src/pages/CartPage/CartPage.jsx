import React from 'react';
import './CartPage.css';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      title: "Cotton T-shirt",
      price: 499,
      image: "https://cdn.thewirecutter.com/wp-content/media/2024/09/menswhitetees-2048px-03483.jpg?auto=webp&quality=75&width=1024",
    },
    {
      id: 2,
      title: "Denim Jacket",
      price: 1499,
      image: "https://cdn.thewirecutter.com/wp-content/media/2024/09/menswhitetees-2048px-03483.jpg?auto=webp&quality=75&width=1024",
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-wrapper">
    <h2 className="cart-heading">🛒 Your Shopping Cart</h2>

    {cartItems.length === 0 ? (
      <p className="empty-message">Your cart is empty.</p>
    ) : (
      <>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-img" />
              <div className="cart-info">
                <h3>{item.title}</h3>
                <p className="price">₹{item.price}</p>
                <button className="remove-btn">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Total: <span>₹{total}</span></h3>
          <Link to="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
         
        </div>
      </>
    )}
  </div>
  
  );
}
