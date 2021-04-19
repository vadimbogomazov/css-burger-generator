import React from 'react';
import './Footer.scss';

const Footer = (props) => (
    <footer className="footer">   
        { new Date().getFullYear() }
    </footer>
);

export default Footer;
