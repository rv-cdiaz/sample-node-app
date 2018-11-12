FROM node:8

WORKDIR /opt/app

COPY . .

RUN npm install --production && \
    useradd -r app

USER app

CMD ["node", "index.js"]