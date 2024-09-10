import React, { useState } from 'react';
import './Header.css';
import Logo from './Logo';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-container">
                    <Logo /> {/* Supondo que Logo é um componente React */}
                </div>
                <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} aria-label="Open menu" onClick={toggleMenu}>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                </button>
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
