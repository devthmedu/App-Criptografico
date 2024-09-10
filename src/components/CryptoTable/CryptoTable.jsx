import { SortAscending, SortDescending } from 'lucide-react';
import React, { useState } from 'react';
import CryptoRow from '../CryptoRow/CryptoRow';
import './CryptoTable.css';

const CryptoTable = ({ crypto, search }) => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortKey, setSortKey] = useState('rank');

    // Função para classificar os dados
    const sortData = (key) => {
        const sortedData = [...crypto].sort((a, b) => {
            if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
        return sortedData;
    };

    // Manipulador de ordenação
    const handleSort = (key) => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        setSortKey(key);
    };

    // Filtrar e ordenar dados
    const filteredCrypto = sortData(sortKey)
        .filter((val) => val.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="crypto-table-container">
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('market_cap_rank')}>
                            Rank {sortKey === 'market_cap_rank' && (sortOrder === 'asc' ? <SortAscending /> : <SortDescending />)}
                        </th>
                        <th onClick={() => handleSort('name')}>
                            Nome {sortKey === 'name' && (sortOrder === 'asc' ? <SortAscending /> : <SortDescending />)}
                        </th>
                        <th onClick={() => handleSort('symbol')}>
                            Símbolo {sortKey === 'symbol' && (sortOrder === 'asc' ? <SortAscending /> : <SortDescending />)}
                        </th>
                        <th onClick={() => handleSort('market_cap')}>
                            Valor de Mercado {sortKey === 'market_cap' && (sortOrder === 'asc' ? <SortAscending /> : <SortDescending />)}
                        </th>
                        <th onClick={() => handleSort('current_price')}>
                            Preço {sortKey === 'current_price' && (sortOrder === 'asc' ? <SortAscending /> : <SortDescending />)}
                        </th>
                        <th onClick={() => handleSort('circulating_supply')}>
                            Suprimento Disponível {sortKey === 'circulating_supply' && (sortOrder === 'asc' ? <SortAscending /> : <SortDescending />)}
                        </th>
                        <th onClick={() => handleSort('total_volume')}>
                            Volume (24hrs) {sortKey === 'total_volume' && (sortOrder === 'asc' ? <SortAscending /> : <SortDescending />)}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCrypto.map((val) => (
                        <CryptoRow key={val.id} data={val} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;
