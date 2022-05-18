import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p>Copyright © {year} ElectroMart.</p>
        </footer>
    );
};

export default Footer;