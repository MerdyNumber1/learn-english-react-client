FROM nginx:latest

COPY ./build /var/www
COPY /containers/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

ENTRYPOINT ["nginx","-g", "daemon off;"]
