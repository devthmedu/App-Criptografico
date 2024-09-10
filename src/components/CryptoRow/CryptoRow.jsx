import PropTypes from 'prop-types';
import React from 'react';
import './CryptoRow.css';

function CryptoRow({ data }) {
    if (!data) {
        return (
            <tr>
                <td colSpan="7" className="no-data">Dados não disponíveis</td>
            </tr>
        );
    }

    const { market_cap_rank, name, symbol, market_cap, current_price, circulating_supply, total_volume, price_change_percentage_24h, image } = data;

    const formatValue = (value) => {
        if (value === undefined || value === null) return 'N/A';
        return value.toLocaleString();
    };

    // URL da imagem da moeda fornecida pela API
    const imageUrl = image; // URL da imagem diretamente da API

    // Determina a cor com base na variação de preço
    const priceChangeColor = price_change_percentage_24h < 0 ? '#e74c3c' : '#2ecc71';

    return (
        <tr>
            <td>{market_cap_rank}</td>
            <td>
                <div className="crypto-name">
                    <img src={imageUrl} alt={name} className="crypto-image" />
                    {name}
                </div>
            </td>
            <td>{symbol.toUpperCase()}</td>
            <td>{formatValue(market_cap)}</td>
            <td style={{ color: priceChangeColor }}>
                ${formatValue(current_price)}
            </td>
            <td>{formatValue(circulating_supply)}</td>
            <td>{formatValue(total_volume)}</td>
        </tr>
    );
}

CryptoRow.propTypes = {
    data: PropTypes.shape({
        market_cap_rank: PropTypes.number,
        name: PropTypes.string,
        symbol: PropTypes.string,
        market_cap: PropTypes.number,
        current_price: PropTypes.number,
        circulating_supply: PropTypes.number,
        total_volume: PropTypes.number,
        price_change_percentage_24h: PropTypes.number,
        image: PropTypes.string,
    }).isRequired,
};

export default CryptoRow;
