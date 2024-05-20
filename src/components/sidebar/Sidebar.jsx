import React from "react";
import classes from './style.module.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faRss } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`${classes.sidebar} ${isOpen && classes.open}`}>
      <span className={classes.closeIcon} onClick={closeSidebar}>
        <FontAwesomeIcon icon={faX} className="side-icon" />
      </span>
      <nav><Link to="/Home">Home</Link></nav>
      <nav><Link to="/AboutUs">About us</Link></nav>
      <nav><Link to="/Consult">Consult</Link></nav>
      <nav><Link to="/Contact">Contact</Link></nav>
      <div className="side-social">
        <p>Don't forget to follow us!</p>
        <a href="https://www.youtube.com/watch?v=r7086iAv50Q" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="side-icons" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="side-icons" />
        </a>
        <a href="https://www.facebook.com/?locale=es_ES" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="side-icons" />
        </a>
        <a href="https://github.com/edulh97/React-Project1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="side-icons" />
        </a>
        <a href="/mirss.xml" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faRss} className="side-icons" />

        </a>
      </div>
    </div>
  )
}

export default Sidebar;  