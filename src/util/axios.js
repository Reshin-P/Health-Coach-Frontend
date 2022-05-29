import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://urbanclassic.online/api'
});

export default axiosConfig