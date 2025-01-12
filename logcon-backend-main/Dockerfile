FROM node:18.19-alpine AS builder
ENV NODE_ENV production

RUN apk add --no-cache tzdata && \
    echo 'Etc/UTC' > /etc/timezone

WORKDIR /usr/src/app

COPY . .

RUN pnpm install

RUN pnpm install --global @nestjs/cli

RUN pnpm build

EXPOSE 3000
CMD [ "yarn", "start:prod" ]