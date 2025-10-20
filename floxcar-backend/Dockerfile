# floxcar-backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# Exécute les migrations + le seed AU DÉMARRAGE, puis lance le serveur
CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && node dist/server.js"]