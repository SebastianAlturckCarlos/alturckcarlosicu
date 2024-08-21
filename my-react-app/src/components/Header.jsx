// components/Header.jsx
import React from 'react';
import './Header.css'; // Create a CSS file for the header styles

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          {/* Replace with your icon of choice */}
          <img src="/path-to-your-icon.png" alt="Icon" className="icon" />
          <span className="initials">AC</span>
        </div>
        <hr className="divider" />
      </div>
    </header>
  );
}

export default Header;
