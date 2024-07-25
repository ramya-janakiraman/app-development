import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/Header.css';


const Header = () => {
  return (
    <div>
      <div className='home-container'>
        <i className="fa-solid fa-envelope"></i>
        <h3>support@toyzone.in</h3>
        <h4>100% Replacement Available T&C Applied</h4>
      </div>
    <header className="header">
      <div className="logo">
        <img src="https://toyzone.in/cdn/shop/files/logo.png?v=1658730951" alt="Logo" />
      </div>
      <div className="nav-search-container">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
        <nav>
          <ul>
            <li><Link component={NavLink} to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    
    </header>
    </div>
  );
};

export default Header;
