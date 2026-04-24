# ─────────────────────────────────────────────
# Stage 1: Build the React / Vite app
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG GEMINI_API_KEY
ENV GEMINI_API_KEY=$GEMINI_API_KEY

RUN npm run build

# ─────────────────────────────────────────────
# Stage 2: Serve with nginx on port 8080
# ─────────────────────────────────────────────
FROM nginx:alpine

# Remove default nginx config to avoid port conflicts
RUN rm /etc/nginx/conf.d/default.conf

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
