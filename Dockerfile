# Stage 1: Build the Angular app
FROM node as build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json /app/
COPY package-lock.json /app/

# Install dependencies, including Tailwind CSS, PostCSS, and postcss-cli
RUN npm install

# Copy the rest of the application code
COPY . /app

# Build the app, including Tailwind CSS processing
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine as production-stage

# Copy the built app from the previous stage
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]