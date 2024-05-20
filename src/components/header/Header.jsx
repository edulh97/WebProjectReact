import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openSidebar = () => {
    setIsOpen(true)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className='header-container'>
        <div className="header-logo">
          <img src="WhiteRock.png" alt="logo" onClick={openSidebar} />
        </div>
        <div className="header-list">
          <ul className="header-nav-menu">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/AboutUs">About us</Link></li>
            <li><Link to="/Consult">Consult</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
    </>

  )
}

export default Header;