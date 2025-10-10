// client/src/api.ts (Version Complète Corrigée)

import axios from 'axios'
// ⬇️ Import de la fonction de déconnexion et getToken ⬇️
// Assurez-vous que le chemin d'accès à auth.ts est correct par rapport à api.ts
import { getToken, logout } from './utils/auth' 

const api = axios.create({
  baseURL: 'http://localhost:5000',
})

// Intercepteur de Requête (Reste inchangé)
api.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// ⬇️ Intercepteur de Réponse (Ajout de la gestion du 401) ⬇️
api.interceptors.response.use(
  (response) => response, // Succès : on passe la réponse
  async (error) => {
    const originalRequest = error.config;
    
    // Si c'est un 401 (Unauthorized) ET que ce n'est pas une tentative de connexion échouée
    if (error.response && error.response.status === 401 && originalRequest.url !== '/api/login') {
        
      // 1. Nettoyage du token et de l'utilisateur dans le localStorage
      logout(); 
      
      // 2. Redirection vers la page de connexion (root)
      // Cela résout le problème de l'utilisateur "piégé" avec un token invalide.
      window.location.href = '/'; 
      
      // Empêche le composant appelant (ex: HistoriqueGlobal) de gérer l'erreur,
      // car on a déjà géré la déconnexion et la redirection.
      return new Promise(() => {});
    }

    // Pour toutes les autres erreurs (404, 500, etc.), on rejette la promesse pour le `catch` du composant
    return Promise.reject(error);
  }
);

export default api