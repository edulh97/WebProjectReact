import React from "react";
import classes from './style.module.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
        <div className={`${classes.sidebar} ${isOpen && classes.open}`}>
            <span className={classes.closeIcon} onClick={closeSidebar}>
            <FontAwesomeIcon icon={faX} className="side-icon"/>
            </span>
            <nav><Link to="/Home">Inicio</Link></nav>
            <nav><Link to="/AboutUs">About us</Link></nav>
            <nav><Link to="/Services">Services</Link></nav>
            <nav><Link to="/Contact">Contact</Link></nav>
        </div>
    )
}

export default Sidebar;  

/**
 * 
 *             <div   >
                
            </div>
 * 
 * 
 */