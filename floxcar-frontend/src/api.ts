// client/src/api.ts
import axios from 'axios';
import { getToken } from './utils/auth';

// ✅ Toujours utiliser /api → le proxy (dev) ou Nginx (prod) s'occupe du reste
const api = axios.create({
  baseURL: '/api',
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
      if (currentToken) {
        // Utilisez une fonction logout qui nettoie localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }
      return Promise.reject(new Error('Unauthorized'));
    }
    return Promise.reject(error);
  }
);

export default api;