# floxcar-backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Installer toutes les dépendances (y compris dev pour la compilation)
COPY package*.json ./
RUN npm ci

# Copier tout le code source
COPY . .

# Compiler le projet → génère dist/
RUN npm run build

# Exécuter les migrations, le seed, puis démarrer le serveur
CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && node dist/server.js"]