FROM node:18.19
ENV PNPM_HOME /pnpm
ENV PATH $PNPM_HOME:$PATH

# pnpm 설치
RUN apk add --no-cache libc6-compat
RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm

RUN corepack enable

WORKDIR /usr/src/app
COPY . .
RUN pnpm install
RUN pnpm run build
CMD [ "npm", "start" ]