// /* import './ProductCard.css';

import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return(
        <div className="product-card">
                <Link to={`product/${product.id}`} className="product-link">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">₹{product.price}</p>
            <p className="rating">⭐ 1451 reviews</p>
            <button>Add to Cart</button>
        </Link>
        </div>
        
    )
}  