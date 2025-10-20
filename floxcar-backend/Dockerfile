# floxcar-backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# 1. Installer les dépendances COMPLÈTES (y compris devDependencies)
COPY package*.json ./
RUN npm ci

# 2. Copier tout le code
COPY . .

# 3. Compiler le projet (génère dist/)
RUN npm run build

# 4. (Optionnel) Supprimer les dépendances de dev pour alléger l'image
RUN npm prune --production

EXPOSE 5000

CMD ["node", "dist/server.js"]