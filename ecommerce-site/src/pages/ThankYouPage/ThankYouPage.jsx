// pages/ThankYouPage.jsx
import React from 'react';
import './ThankYouPage.css';

export default function ThankYouPage() {
  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h2>🎉 Thank You for Your Order!</h2>
        <p>Your order has been placed successfully.</p>
        <div className="order-details">
          <p><strong>Order ID:</strong> #ORD12345</p>
          <p><strong>Estimated Delivery:</strong> 4–6 business days</p>
        </div>
        <button className="go-home-btn" onClick={() => window.location.href = '/'}>
          Go to Home
        </button>
      </div>
    </div>
  );
}
