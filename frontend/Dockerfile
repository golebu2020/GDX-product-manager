# Use an official Node.js runtime as the base image for the build stage
FROM node:14 as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your application's source code to the container
COPY . .

# Build the React application
RUN npm run build

# Production stage
FROM nginx:alpine as production-stage

# Copy the built React app from the build-stage to the nginx directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 for the NGINX server
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
