# devsecops/app/Dockerfile

# vulnerable version (un)comment to enable/disable
# FROM node:16

# latest version (un)comment to enable/disable
FROM node:18

WORKDIR /app
COPY . .
RUN npm install

CMD ["node", "index.js"]