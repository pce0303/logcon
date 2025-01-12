FROM node:20.10
ENV NODE_ENV production

RUN corepack enable

WORKDIR /usr/src/app

COPY . .

RUN pnpm install

RUN pnpm build

EXPOSE 3000
CMD [ "yarn", "start:prod" ]