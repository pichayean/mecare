# base image
FROM --platform=linux/amd64 node:18.4.0 AS appbuild

# Build Stage 1
# This build created a staging docker image
#
# FROM node:18.4.0 AS appbuild
WORKDIR /usr/src/app
COPY package.json ./
# COPY .babelrc ./
RUN npm install
COPY . .
RUN npm run build

# Build Stage 2
# This build takes the production build from staging build
#

# Pull base image
FROM --platform=linux/amd64 ubuntu as deploy
RUN apt-get update && apt-get install nginx -y
COPY --from=appbuild /usr/src/app/dist /var/www/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]