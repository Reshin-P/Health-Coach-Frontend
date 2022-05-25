import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://34.226.196.130/api'
});

export default axiosConfig