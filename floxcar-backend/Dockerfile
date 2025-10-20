# floxcar-backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Installer TOUTES les dépendances
COPY package*.json ./
RUN npm ci

# Copier le code
COPY . .

# 🔥 Compiler le TypeScript → crée dist/
RUN npm run build

# Exécuter migrations + seed + démarrer
CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && node dist/server.js"]