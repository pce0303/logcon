FROM node:18.19
RUN corepack enable

WORKDIR /usr/src/app
COPY . .
RUN pnpm install
RUN pnpm run build
CMD [ "npm", "start" ]