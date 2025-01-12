FROM node:20.10
ENV PNPM_HOME /pnpm
ENV PATH $PNPM_HOME:$PATH
RUN corepack enable

WORKDIR /usr/src/app
COPY . .
RUN pnpm install
RUN pnpm run build
CMD [ "npm", "start" ]