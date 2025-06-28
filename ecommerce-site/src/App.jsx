import {Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home/Home';
import ProductDetail from './componets/ProductDetails/ProductDetails';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage"



function App() {
  return (
    <>
    <Navbar />

     <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/product/:id" element={<ProductDetail/>} />  
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
    </>

       
       
   
  );
}

export default App;
