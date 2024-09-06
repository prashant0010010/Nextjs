FROM node:21.7-slim AS builder
WORKDIR /app
COPY . .
RUN npm install -g npm@10.4.0
RUN npm install -f
RUN npm install sharp -f
RUN npm run build
EXPOSE 9086
CMD ["npm", "start", "--", "--port", "9086"]
