import React from "react";
import classes from './style.module.css'

const Sidebar = ({ isOpen }) => {
    return (
        <div className={`${classes.sidebar} ${isOpen && classes.open}`}>
        Sidebar
        </div>
    )
}

export default Sidebar;  