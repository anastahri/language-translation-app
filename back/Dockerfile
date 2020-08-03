FROM node:14-alpine as builder

WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

FROM node:14-alpine
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules node_modules
COPY . .

RUN chown -R node:node .

USER node

CMD ["yarn", "run", "start"]
