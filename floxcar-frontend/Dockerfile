# floxcar-frontend/Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app

# Installe TOUTES les dépendances (y compris devDependencies)
COPY package*.json ./
RUN npm ci  # ← Supprimez "--only=production"

COPY . .
RUN npm run build  # ← Cela exécutera "tsc && vite build"

# Production : Nginx léger
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]