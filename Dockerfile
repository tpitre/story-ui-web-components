# Story UI - Web Components Storybook Deployment
# Runs Storybook in DEV MODE with MCP server for dynamic story generation

FROM node:20-slim

WORKDIR /app

# Install git (required for some npm packages)
RUN apt-get update && apt-get install -y \
    git \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Copy package.json only (not package-lock.json to avoid platform-specific rollup issues)
COPY package.json ./

# Install dependencies fresh (npm creates appropriate lock for Linux platform)
RUN npm install

# Copy source
COPY . .

# Make start script executable
RUN chmod +x ./start-live.sh

# Expose port (Railway sets PORT)
EXPOSE ${PORT:-4001}

# Health check - verify MCP server is responding
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:${PORT:-4001}/story-ui/providers || exit 1

# Start both Storybook and MCP server
CMD ["./start-live.sh"]
