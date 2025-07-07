# Etapa 1: Build del proyecto
FROM node:18-alpine AS builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar dependencias y proyecto
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Etapa 2: Servir app con NGINX
FROM nginx:alpine

# ⚠️ Aquí se copia tu nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos de Angular compilados
COPY --from=builder /app/dist/sre-frontend /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
