import React, { useEffect, useState } from 'react';
import './App.css';
import CryptoRow from './components/CryptoRow/CryptoRow';
import Loading from './components/Loading/Loading';
import SearchBar from './components/SearchBar/SearchBar';
import Homepage from './pages/Homepage';
import { CoinList } from './serv/apiFunctions';

const App = () => {
    const [search, setSearch] = useState('');
    const [crypto, setCrypto] = useState([]);
    const [loading, setLoading] = useState(true);
    const currency = 'usd';

    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const data = await CoinList(currency);
                setCrypto(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCryptoData();
    }, [currency]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="App">
            <Homepage /> 
            <main className="main-content">
                <h1>Todas as Criptomoedas</h1>
                <SearchBar setSearch={setSearch} />
                <table className="crypto-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Nome</th>
                            <th>Símbolo</th>
                            <th>Market Cap</th>
                            <th>Preço</th>
                            <th>Oferta Disponível</th>
                            <th>Volume (24hrs)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {crypto
                            .filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
                            .map((coin) => (
                                <CryptoRow key={coin.id} data={coin} />
                            ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default App;
