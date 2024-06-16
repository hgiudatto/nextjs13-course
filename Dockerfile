FROM node:18-alpine

WORKDIR /app

COPY package.json ./

run npm install

COPY . .

RUN npm run build

COPY .next ./.next

CMD ["npm", "run", "dev"]
