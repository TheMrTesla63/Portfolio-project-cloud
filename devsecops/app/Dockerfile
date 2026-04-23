# devsecops/app/Dockerfile

# --- vulnerable version (uncomment to use)
FROM node:14

# --- secure version (uncomment to use)
#FROM node:22-bookworm-slim

WORKDIR /app
COPY . .

# optional: alleen nodig als je dependencies hebt
# RUN npm install --omit=dev

EXPOSE 3000

CMD ["node", "index.js"]