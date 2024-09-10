import axios from 'axios';

// Configura a base URL
const baseURL = 'https://api.coingecko.com/api/v3/';

const axiosInstance = axios.create({
    baseURL: baseURL
});

export const CoinList = async (currency) => {
    try {
        const response = await axiosInstance.get('coins/markets', {
            params: {
                vs_currency: currency,
                order: 'market_cap_desc',
                per_page: 100,
                page: 1,
                sparkline: false
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar lista de moedas:", error);
        throw error;
    }
};

export const SingleCoin = async (id) => {
    try {
        const response = await axiosInstance.get(`coins/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar dados da moeda com id ${id}:`, error);
        throw error;
    }
};

export const HistoricalChart = async (id, days = 365, currency) => {
    try {
        const response = await axiosInstance.get(`coins/${id}/market_chart`, {
            params: {
                vs_currency: currency,
                days: days
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar gráfico histórico da moeda com id ${id}:`, error);
        throw error;
    }
};

export const TrendingCoins = async (currency) => {
    try {
        const response = await axiosInstance.get('coins/markets', {
            params: {
                vs_currency: currency,
                order: 'percent_change_24h',
                per_page: 10,
                page: 1,
                sparkline: false
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar moedas em alta:", error);
        throw error;
    }
};
