import axios from 'axios';


const baseURL = import.meta.env.VITE_COIN_GECKO_BASE_URL;
const apiKey = import.meta.env.VITE_COIN_GECKO_API_KEY;

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': `Bearer ${apiKey}`,
    }
});

export const fetchCoinList = async (currency) => {
    try {
        const response = await axiosInstance.get(`coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};


