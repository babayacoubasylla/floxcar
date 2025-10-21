# floxcar-backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# 🔥 Démarrer le serveur SANS seed
CMD ["node", "dist/server.js"]