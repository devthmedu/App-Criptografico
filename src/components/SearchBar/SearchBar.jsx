import { Search, X } from 'lucide-react';
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ setSearch }) {
    const [query, setQuery] = useState('');

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
        setSearch(e.target.value);
    };

    const handleClear = () => {
        setQuery('');
        setSearch('');
    };

    const handleSearch = () => {
        setSearch(query);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                placeholder="Pesquisar..."
                onChange={handleSearchChange}
            />
            <button className="search-button" onClick={handleSearch}>
                <Search size={20} />
            </button>
            {query && (
                <button className="clear-button" onClick={handleClear}>
                    <X size={20} />
                </button>
            )}
        </div>
    );
}

export default SearchBar;
