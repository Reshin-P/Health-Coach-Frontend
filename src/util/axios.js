import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://34.226.196.130/api'
    // baseURL: 'http://localhost:5000/api'

});

export default axiosConfig