# Usa la imagen oficial de Node.js como base
FROM node:18.16.0 AS build

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias
RUN npm install

# Ejecuta el comando postcss
RUN npx postcss src/styles.css -o src/styles.css

# Construye la aplicación
CMD ["npm", "start"]