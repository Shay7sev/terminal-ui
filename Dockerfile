# build first
FROM oven/bun:1 AS runner
WORKDIR /app
ENV NODE_ENV production
COPY ./.next/standalone ./standalone
COPY ./public /app/standalone/public
COPY ./.next/static /app/standalone/.next/static

ENV PORT 3000

ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

CMD ["bun", "run", "./standalone/server.js"]