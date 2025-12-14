#!/bin/bash

# Story UI Live Production Start Script
# Runs Storybook in dev mode + MCP server with Storybook proxy

echo "🚀 Starting Story UI Live Environment..."
echo ""

# Configuration
STORYBOOK_PORT=6006
MCP_PORT=${PORT:-4001}

# Memory optimization for Railway containers
# Increase max heap size and enable garbage collection optimization
export NODE_OPTIONS="--max-old-space-size=512 --optimize_for_size --gc_interval=100"
echo "📊 Node memory settings: $NODE_OPTIONS"

# Start Storybook dev server in background
echo "📖 Starting Storybook dev server on internal port ${STORYBOOK_PORT}..."
npm run storybook -- --port "$STORYBOOK_PORT" --host 0.0.0.0 --ci --no-open &
STORYBOOK_PID=$!

# Wait for Storybook to initialize
# Using simple sleep approach (same as React Mantine which works reliably)
# Web Components/Shoelace may need slightly more time than React
echo "⏳ Waiting for Storybook to start..."
sleep 20

# Verify Storybook is running
if ! kill -0 $STORYBOOK_PID 2>/dev/null; then
    echo "❌ Storybook failed to start"
    exit 1
fi

echo "✅ Storybook dev server running on port ${STORYBOOK_PORT}"

# Set environment variables for Storybook proxy
export STORYBOOK_PROXY_PORT=$STORYBOOK_PORT
export STORYBOOK_PROXY_ENABLED=true

# Start MCP server (uses @tpitre/story-ui from node_modules)
echo "🤖 Starting MCP server on port ${MCP_PORT}..."
npx story-ui start --port "$MCP_PORT" &
MCP_PID=$!

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "✅ Story UI Live Environment is running!"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "   📖 Storybook (internal): http://localhost:${STORYBOOK_PORT}"
echo "   🤖 MCP Server (public):  http://localhost:${MCP_PORT}"
echo ""
echo "═══════════════════════════════════════════════════════════"

# Handle shutdown gracefully
cleanup() {
    echo ""
    echo "🛑 Shutting down..."
    kill $STORYBOOK_PID 2>/dev/null
    kill $MCP_PID 2>/dev/null
    exit 0
}

trap cleanup SIGTERM SIGINT

# Wait for either process to exit
wait $STORYBOOK_PID $MCP_PID
