# Story UI - Web Components Storybook Deployment
# Runs Storybook in DEV MODE with MCP server for dynamic story generation
# Build timestamp: 2025-12-14T06:35:00Z (force rebuild)

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

# NOTE: Railway provides its own healthcheck via railway.json (healthcheckPath)
# Removed Docker HEALTHCHECK to avoid conflict - two healthcheck systems can
# cause instability when Docker marks container unhealthy but Railway doesn't know

# Start both Storybook and MCP server
CMD ["./start-live.sh"]
