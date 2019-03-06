FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

EXPOSE 80

CMD ["node", "dist/main.js"]