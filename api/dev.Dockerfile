FROM node:11-alpine

VOLUME /app
WORKDIR /app

CMD yarn run dev
