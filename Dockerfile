# ─────────────────────────────────────────────
# Stage 1: Build the React / Vite app
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (layer-cached unless package.json changes)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .

# GEMINI_API_KEY is baked in at build time via Vite's define.
# Pass it as a build-arg:  docker build --build-arg GEMINI_API_KEY=xxx
ARG GEMINI_API_KEY
ENV GEMINI_API_KEY=$GEMINI_API_KEY

RUN npm run build

# ─────────────────────────────────────────────
# Stage 2: Serve with nginx on port 8080
# (Cloud Run requires port 8080 by default)
# ─────────────────────────────────────────────
FROM nginx:alpine

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (handles React Router + port 8080)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
