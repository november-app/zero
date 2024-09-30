FROM node:22-alpine
RUN apk add --no-cache libc6-compat

WORKDIR /home/node/app

COPY pnpm-lock.yaml ./
RUN corepack enable pnpm && corepack install -g pnpm@latest-9

RUN pnpm fetch

COPY . .
RUN pnpm install --offline

RUN pnpm prisma generate
RUN pnpm build

ENV NODE_ENV production

EXPOSE 3000
ENV PORT 3000
ENV AUTH_URL http://localhost
ENV DATABASE_URL "postgresql://postgres:catsrule@novodata:5432/novo?schema=public"

CMD ["node", ".next/standalone/server.js"]
