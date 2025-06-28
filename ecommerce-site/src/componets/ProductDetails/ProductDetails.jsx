import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const dummyProducts = [ // replace with real API later
  {
    id: 1,
    title: "Cotton T-shirt",
    price: 499,
    image: "https://www.reikiaustralia.com.au/wp-content/uploads/2022/03/ra-tshirt1-300x200.jpeg",
    description: "High-quality cotton T-shirt for everyday comfort."
  },
  {
    id: 2,
    title: "Denim Jacket",
    price: 1499,
    image: "https://www.reikiaustralia.com.au/wp-content/uploads/2022/03/ra-tshirt1-300x200.jpeg",
    description: "Stylish and durable denim jacket."
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = dummyProducts.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
