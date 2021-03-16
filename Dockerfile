FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN sed -i "s/mongodb:\/\/localhost/mongodb:\/\/mongo/g" bookshops/mongoose.service.js

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "start"]
