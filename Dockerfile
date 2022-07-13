FROM node:12.16.1-alpine AS installer
COPY package.json ./
RUN npm i tyarn -g
RUN tyarn

FROM node:12.16.1-alpine AS builder
COPY --from=installer /node_modules ./node_modules
COPY . .
RUN npm run build

FROM  vixlet/nginx:alpine
COPY --from=builder /dist /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80