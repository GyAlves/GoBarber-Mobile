import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:192.168.0.12:3333',
});

export default api;
