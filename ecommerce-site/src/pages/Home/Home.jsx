import React from 'react';
import './home.css';
import ProductCard from '../../componets/ProductCard/ProductCard';

export default function Home() {
  const product = [
    {
      id: 1,
      title: "Cotton T-shirt",
      price: 499,
      image: "https://www.reikiaustralia.com.au/wp-content/uploads/2022/03/ra-tshirt1-300x200.jpeg",
    },
    {
      id: 2,
      title: "Denim Jacket",
      price: 1499,
      image: "https://www.reikiaustralia.com.au/wp-content/uploads/2022/03/ra-tshirt1-300x200.jpeg",
    },
    {
      id: 3,
      title: "Leather Boots",
      price: 2999,
      image: "https://www.reikiaustralia.com.au/wp-content/uploads/2022/03/ra-tshirt1-300x200.jpeg",
    },
    {
      id: 4,
      title: "Slim Fit Jeans",
      price: 1099,
      image: "https://www.reikiaustralia.com.au/wp-content/uploads/2022/03/ra-tshirt1-300x200.jpeg",
    },
    {
      id: 5,
      title: "Slim Fit Jeans",
      price: 1099,
      image: "https://www.reikiaustralia.com.au/wp-content/uploads/2022/03/ra-tshirt1-300x200.jpeg",
    },
   
  ];

  return (
    <div className="home-container">
      <h2 className="section-title">Latest Products</h2>
      <div className="product-grid">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
