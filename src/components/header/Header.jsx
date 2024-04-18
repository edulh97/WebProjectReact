import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

      <div className='header-container'>
        <div className="header-logo">
          <Link to="/Home">
            <img src="/src/images/WhiteRock.png" alt="logo" />
          </Link>
        </div>
        <div className="header-list">
          <ul className="header-nav-menu">
            <li><Link to="/Home">Inicio</Link></li>
            <li><Link to="/AboutUs">About us</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;