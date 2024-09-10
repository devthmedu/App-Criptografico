import React from 'react';
import Header from './Header';
import Banner from '../components/Carousal/Banner';
import './Homepage.css'; // Adicione estilos para a Homepage se necessário

function Homepage() {
    return (
        <div className="homepage">
            <Header /> 
            <main className="homepage-content">
                <Banner /> 
            </main>
        </div>
    );
}

export default Homepage;
