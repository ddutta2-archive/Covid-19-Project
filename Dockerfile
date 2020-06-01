FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
EXPOSE 80/tcp 
COPY . .
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/covid19Project /usr/share/nginx/html
