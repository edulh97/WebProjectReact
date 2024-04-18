import React, { useState } from 'react';
import './PopUpMessage.css';

function PopupMessage() {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true); 
    };

    const handleClosePopup = () => {
        setShowPopup(false); 
    };

    return (
        <div>
            <button className='PopUp-button' onClick={handleButtonClick}>Send email</button>
            {showPopup && (
                <div className="popup-container" onClick={handleClosePopup}>
                    <div className="popup-message" onClick={(e) => e.stopPropagation()}>
                        <h2>Message sent correctly</h2>
                        <p>we will contact you as soon as possible.</p>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopupMessage;
