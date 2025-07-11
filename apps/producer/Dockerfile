# Start from official Bun image
FROM oven/bun:1

# Set working directory
WORKDIR /app

# Copy only backend app and shared packages
COPY apps/producer ./apps/producer
COPY packages ./packages
COPY turbo.json .
COPY bun.lock .
COPY package.json .

# Change directory into backend app
WORKDIR /app/apps/producer

# Install dependencies (Bun resolves monorepo deps)
RUN bun install

# Expose backend port (change if needed)
EXPOSE 3000

# Start the Bun backend
CMD ["bun", "run", "index.ts"]
