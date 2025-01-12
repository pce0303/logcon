FROM node:18.19 AS builder
ENV NODE_ENV production

RUN apk add --no-cache tzdata && \
    echo 'Etc/UTC' > /etc/timezone

ENV PNPM_HOME /pnpm
ENV PATH $PNPM_HOME:$PATH

# pnpm 설치
RUN apk add --no-cache libc6-compat
RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm

RUN corepack enable

WORKDIR /usr/src/app

COPY . .

RUN pnpm install

RUN pnpm install --global @nestjs/cli

RUN pnpm build

EXPOSE 3000
CMD [ "yarn", "start:prod" ]