FROM node:20.10
ENV NODE_ENV production

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /usr/src/app

COPY . .

RUN pnpm install
RUN pnpm install --global @nestjs/cli

RUN pnpm build

EXPOSE 3000
CMD [ "yarn", "start:prod" ]