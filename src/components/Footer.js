// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-primary text-white text-center fixed-bottom">
        <div className="container p-4">
            <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Proyecto Final - Geronimo Dimarco</h5>
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <a href="https://www.instagram.com/tuUsuario" target="_blank" rel="noopener noreferrer" className="text-white me-4">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/tuUsuario" target="_blank" rel="noopener noreferrer" className="text-white me-4">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
            </div>
        </div>
        </footer>
    );
    };

export default Footer;


