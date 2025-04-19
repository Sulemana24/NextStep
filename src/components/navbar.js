import React, { useState } from 'react';
import './navbar.css';
import logo from '../Images/logo.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="nav-header">
          <div className="nav-logo">
            <a href="#html">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>
          <div className={`nav-menu ${isOpen ? 'open' : ''}`} 
            id="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
           {/*  <i className="ri-menu-line"></i> */}
          </div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="nav-links">

          <li><a href="#html" className="hover-underline">Home</a></li>
          <li><a href="#html" className="hover-underline">Jobs</a></li>
          <li><a href="#html" className="hover-underline">Courses</a></li>
          <li><a href="#html" className="hover-underline">Projects</a></li>
          <li><a href="#html" className="hover-underline">Marketplace</a></li>
          <li><a href="#html" className="hover-underline">Community</a></li>
          <li><a href="#html" className="btn liquid">Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
