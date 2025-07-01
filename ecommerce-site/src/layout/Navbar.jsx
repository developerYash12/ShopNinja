import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const [open, setOpen] = useState(false)
  return (
    <>
    <header className='navbar'>
        <div className="navbar-container">
        <Link to="/" className="logo">☰ MyShop</Link>

        <nav className={`nav-links ${open ? 'active' : ''}`}>
           <Link to="/">Home</Link>
           <Link to="/products">Products</Link>
           <Link to="/cart">Cart</Link>
           <Link to='/login' className='login-btn'>Login</Link>
        </nav>
       

         <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
         </div>
        </div>
    </header>
    </>
  )
}






