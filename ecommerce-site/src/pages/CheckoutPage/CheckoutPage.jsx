// pages/CheckoutPage.jsx
import React, { useState } from 'react';
import './CheckoutPage.css';

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const cartItems = [
    {
      id: 1,
      title: 'Cotton T-shirt',
      price: 499,
      image: 'https://sepiastories.in/wp-content/uploads/2024/07/shirts-2-1.webp',
    },
    {
      id: 2,
      title: 'Denim Jacket',
      price: 1499,
      image: 'https://sepiastories.in/wp-content/uploads/2024/07/shirts-2-1.webp',
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (form.name && form.email && form.phone && form.address) {
      alert('🎉 Order placed successfully!');
    } else {
      alert('⚠️ Please fill out all fields.');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <div className="checkout-form">
          <h3>Shipping Information</h3>
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
          <textarea name="address" placeholder="Full Address" value={form.address} onChange={handleChange} />
        </div>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {cartItems.map(item => (
            <div key={item.id} className="summary-item-with-image">
                <img src={item.image} alt={item.title} />
                <div className="summary-info">
                <p className="summary-title">{item.title}</p>
                <p className="summary-price">₹{item.price}</p>
                </div>
            </div>
            ))}
          <hr />
          <div className="summary-total">
            <strong>Total:</strong>
            <strong>₹{total}</strong>
          </div>
          <button className="place-order-btn" onClick={handleOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
}
