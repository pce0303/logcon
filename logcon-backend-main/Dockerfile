FROM node:18.19-alpine AS builder
ENV NODE_ENV production

RUN apk add --no-cache tzdata && \
    echo 'Etc/UTC' > /etc/timezone

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn global add @nestjs/cli

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start:prod" ]