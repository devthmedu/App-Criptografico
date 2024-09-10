import React from 'react';
import loadingImage from '../../assets/loading.svg'; // Atualize o caminho para a sua imagem
import './Loading.css'; // Certifique-se de criar este arquivo CSS

function Loading() {
    return (
        <div className="loading-container">
            <img src={loadingImage} alt="Loading" className="loading-image" />
            <p className="loading-text">Carregando...</p>
        </div>
    );
}

export default Loading;
