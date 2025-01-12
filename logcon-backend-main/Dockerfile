FROM node:20.10
ENV NODE_ENV production

RUN apk add --no-cache tzdata && \
    echo 'Etc/UTC' > /etc/timezone

RUN corepack enable

WORKDIR /usr/src/app

COPY . .

RUN pnpm install

RUN pnpm install --global @nestjs/cli

RUN pnpm build

EXPOSE 3000
CMD [ "yarn", "start:prod" ]