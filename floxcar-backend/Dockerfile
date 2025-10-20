# floxcar-backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# 🔥 LIGNE CRITIQUE MANQUANTE :
RUN npm run build

CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && node dist/server.js"]