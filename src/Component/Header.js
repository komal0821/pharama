import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <button className="pharma-button">Ⓜ️EDICAL</button>
      </div>
      <nav className="navbar-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Product List</a></li>
          <li><a href="/Cart">Cart</a></li>
          <li><a href="/services">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
