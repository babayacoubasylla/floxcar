// floxcar-frontend/src/api.ts
import axios from 'axios';
import { getToken, logout } from './utils/auth';

// ✅ Utilise /api → Nginx redirige vers le backend
const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      originalRequest.url !== '/auth/login'
    ) {
      const currentToken = getToken();
      if (currentToken) logout();
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }
      return Promise.reject(new Error('Unauthorized'));
    }
    return Promise.reject(error);
  }
);

export default api;