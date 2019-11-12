FROM node:12-alpine

VOLUME /app
WORKDIR /app

CMD yarn run dev
