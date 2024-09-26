FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm install

CMD ["node","index.js"]