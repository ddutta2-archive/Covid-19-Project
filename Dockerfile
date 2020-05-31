FROM nginx:alpine
LABEL author="Debojyoti Dutta"
COPY ./dist/covid19Project  /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]