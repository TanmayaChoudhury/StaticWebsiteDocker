FROM node:18-alpine AS installer
WORKDIR /myapp
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest AS deployer
COPY --from=installer /myapp/public /usr/share/nginx/html
EXPOSE 80
