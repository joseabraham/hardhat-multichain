FROM node:16-buster-slim

WORKDIR /usr/src/app
COPY package.json yarn.lock ./

RUN yarn install
EXPOSE 8545

ARG POLYGON_URL
ARG FANTOM_URL

ENV POLYGON_URL=$POLYGON_URL
ENV FANTOM_URL=$FANTOM_URL

CMD ["yarn", "run-hardhat"]