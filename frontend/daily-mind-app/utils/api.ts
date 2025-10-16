import axios from 'axios';

const isWeb = typeof window !== 'undefined' && !!window.location;
const API_BASE = isWeb && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://127.0.0.1:8000/api'
  : 'http://10.0.2.2:8000/api';

const api = axios.create({ baseURL: API_BASE, timeout: 5000 });
export default api;
