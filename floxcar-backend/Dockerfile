# floxcar-backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Installer toutes les dépendances (y compris dev pour la compilation)
COPY package*.json ./
RUN npm ci

# Copier tout le code
COPY . .

# Compiler le projet (génère dist/)
RUN npm run build

# Exécuter les migrations PRISMA AU DÉMARRAGE + lancer le serveur
# Render utilise le port 10000 par défaut → écoute sur 0.0.0.0:10000
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/server.js"]