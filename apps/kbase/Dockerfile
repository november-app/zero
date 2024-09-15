FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . /app
WORKDIR /app

ENV NODE_ENV production

FROM base AS builder
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/nginx/nginx.conf /etc/nginx
COPY --from=builder /app/build /usr/share/nginx/html/docs

EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]
