FROM node:17-alpine as ReactJS

WORKDIR /app

COPY . .

COPY package*.json /app

RUN npm install

RUN npm run build

CMD ["npm", "start"]
