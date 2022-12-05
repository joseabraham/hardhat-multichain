# FROM node:16-buster-slim
FROM node:16.8.0-alpine

WORKDIR /usr/src/app
#COPY package.json yarn.lock ./

COPY package.json ./

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

RUN yarn install
EXPOSE 8545

ARG POLYGON_URL
ARG FANTOM_URL
ARG AVAX_URL

ENV POLYGON_URL=$POLYGON_URL
ENV FANTOM_URL=$FANTOM_URL
ENV AVAX_URL=$AVAX_URL

CMD ["yarn", "run-hardhat"]