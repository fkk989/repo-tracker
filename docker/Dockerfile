FROM node

WORKDIR /home/repo-tracker

COPY package.json package.json
RUN npm install
COPY . .
RUN npm run db:generate

CMD [ "npm","run","dev" ]