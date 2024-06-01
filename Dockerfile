# FROM node:21.7.3-alpine3.20 AS build_base
# RUN mkdir -p /usr/src/nuxt-app
# WORKDIR /usr/src/nuxt-app
# RUN apk update && apk upgrade
# COPY . /usr/src/nuxt-app/
# RUN npm install -g pnpm
# RUN pnpm install
# RUN pnpm run build

# FROM node:21.7.3-alpine3.20 AS prod
# RUN addgroup -S app && adduser -S app -G app
# USER app
# COPY --chown=app:app --from=build_base /usr/src/nuxt-app/.output /app
# WORKDIR /app

# EXPOSE 3000
# CMD [ "node", "server/index.mjs" ]

FROM node:21.7.3-alpine3.20 AS build_base
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
RUN apk update && apk upgrade
COPY package.json pnpm-lock.yaml* wait-for-it.sh ./
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
RUN npx prisma generate

FROM node:21.7.3-alpine3.20 AS prod
RUN addgroup -S app && adduser -S app -G app
USER app
COPY --chown=app:app --from=build_base /usr/src/nuxt-app/.output /app
COPY --chown=app:app prisma /app/prisma

# Esperar que o servidor MySQL esteja pronto antes de executar o comando Prisma
CMD ["sh", "-c", "wait-for-it.sh mysql:3306 -- npx prisma db push && npx prisma migrate deploy && node server/index.mjs"]


