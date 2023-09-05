# FROM node:14.17.3-buster as build
FROM node:16.6.1 as build  

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY . .

RUN npm run build
# RUN npm install

# NGINX Web server
FROM node:16.6.1 as prod

COPY --from=build /code/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]