import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { TrendingCoins } from '../../serv/api'; // Verifique se o caminho está correto
import './Carrossel.css';

// Função para formatar números com vírgulas
export const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const Carousal = ({ currency = 'usd', symbol = '$' }) => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const data = await TrendingCoins(currency);
                setTrending(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchTrendingCoins();
    }, [currency]);


    const items = trending.map((coin) => {
        const profit = coin.price_change_percentage_24h >= 0;

        return (
            <div key={coin.id} className="carousal-item">
                <img
                    src={coin?.image}
                    alt={coin.name}
                    className="carousal-image"
                />
                <div className="carousal-info">
                    <div className="carousal-symbol">
                        {coin.symbol.toUpperCase()}
                        <span
                            style={{ color: profit ? 'rgb(14,203,129)' : 'red', fontWeight: 500 }}
                        >
                            {profit && "+"} {coin.price_change_percentage_24h?.toFixed(2)}%
                        </span>
                    </div>
                    <div className="carousal-price">
                        {symbol} {numberWithCommas(coin.current_price.toFixed(2))}
                    </div>
                </div>
            </div>
        );
    });

    const responsive = {
        0: { items: 2 },
        512: { items: 4 },
    };

    return (
        <div className="carousal-container">
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={items}
            />
        </div>
    );
};

export default Carousal;
