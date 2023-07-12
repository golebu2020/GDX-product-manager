FROM node:14.17.3-buster as build
# FROM node:14-alpine as build

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY . .

RUN npm run build

# NGINX Web server
FROM nginx:1.12-alpine as prod

COPY --from=build /code/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]