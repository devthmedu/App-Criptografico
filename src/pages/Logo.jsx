import React from 'react';
import logo from '../../public/favicon.svg';


function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
        </div>
    );
}

export default Logo;
