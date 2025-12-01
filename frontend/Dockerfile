# Build del frontend
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Servidor Nginx configurado para Cloud Run
FROM nginx:stable-alpine

# Copiar archivo de config personalizado
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar el build de React
COPY --from=build /app/build /usr/share/nginx/html

# Cloud Run usará este puerto
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
