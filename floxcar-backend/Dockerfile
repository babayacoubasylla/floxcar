# floxcar-backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# 🔥 Compile le TypeScript → crée dist/
RUN npm run build

# Exécute migrations + seed + démarre le serveur
CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && node dist/server.js"]