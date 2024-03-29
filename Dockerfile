FROM node:20.11.1

RUN mkdir -p /home/app
RUN chown node /home/app

WORKDIR /home/app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .

EXPOSE 5000 9876

CMD ["npm", "start"]