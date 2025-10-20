# floxcar-backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Installer TOUTES les dépendances (nécessaire pour la compilation)
COPY package*.json ./
RUN npm ci

# Copier le code source
COPY . .

# Compiler le projet → génère dist/ + Prisma Client dans node_modules
RUN npm run build

# Optionnel : alléger l'image en supprimant les devDependencies
RUN npm prune --production

EXPOSE 5000

CMD ["node", "dist/server.js"]