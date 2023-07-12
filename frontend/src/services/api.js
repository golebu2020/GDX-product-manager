// src/services/api.js

import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get('https://127.0.0.1:8000/api/store/product');
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const postData = async (data) => {

    try {
        const response = await axios.post('https://127.0.0.1:8000/api/store/product',data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};