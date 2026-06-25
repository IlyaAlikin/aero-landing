# syntax=docker/dockerfile:1

# ---- build stage: generate the static site ----
FROM node:20-alpine AS build
WORKDIR /app

# install deps against the lockfile first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci

# copy the rest of the source and produce the static output (.output/public)
COPY . .
RUN npm run generate

# ---- runtime stage: serve the static files with nginx ----
FROM nginx:1.27-alpine AS runtime

# our server config (gzip, caching, SPA fallback, security headers)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# the prerendered static site
COPY --from=build /app/.output/public /usr/share/nginx/html

EXPOSE 80

# container is "unhealthy" (and gets restarted by orchestration) if nginx stops serving
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
