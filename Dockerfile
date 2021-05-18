# Building using node
FROM node:12.20.1 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
COPY . ./
EXPOSE 3000
RUN npm start
