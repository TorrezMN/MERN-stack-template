
# Stage 1: Build the application
FROM node:16-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

# Stage 2: Create the production image
FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["node", "main.js"]
