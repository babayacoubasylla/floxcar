// floxcar-frontend/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Active le remplacement de l'hôte pour accéder depuis le réseau local
    host: true,
    // Port du serveur de développement Vite
    port: 5173,
    // Configuration du proxy pour les appels API
    proxy: {
      // Toutes les requêtes commençant par '/api' seront redirigées vers le serveur cible
      '/api': {
        // Remplacez par l'URL de votre serveur backend
        // Assurez-vous que le backend tourne sur le port 5000
        target: 'http://localhost:5000', // <- Vérifiez que c'est bien le port de votre backend
        // Changez l'origine de l'hôte pour qu'elle corresponde à celle du serveur cible
        changeOrigin: true,
        // Active le logging pour le proxy (utile pour le débogage)
        // secure: false, // Mettez à true en production si vous utilisez HTTPS
      },
    },
  },
  // Ajoutez d'autres configurations si nécessaire (build, preview, etc.)
});
