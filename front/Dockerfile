FROM node:14-alpine as builder

WORKDIR /usr/src/app

COPY package.json package.json
COPY . .

RUN yarn

RUN yarn build

FROM nginx:1.19-alpine

WORKDIR /usr/share/nginx/html

COPY nginx /etc/nginx/conf.d
COPY --from=builder /usr/src/app/build .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
