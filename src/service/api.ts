import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:192168012',
});

export default api;
