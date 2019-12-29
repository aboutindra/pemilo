FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./Backend/

COPY . .

EXPOSE 8080

CMD node /Backend/index.js
