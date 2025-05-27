import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Whatsapp.css'; // Create this CSS file for styling

const Whatsapp = () => {
    const handleClick = () => {
        window.open('https://wa.me/your-number', '_blank');
    };

    return (
        <div className="whatsapp-icon" onClick={handleClick}>
            <FaWhatsapp size={40} color="#25D366" />
        </div>
    );
};

export default Whatsapp;