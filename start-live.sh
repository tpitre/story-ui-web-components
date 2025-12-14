#!/bin/bash

# Story UI Live Production Start Script
# Runs Storybook in dev mode + MCP server with Storybook proxy

echo "🚀 Starting Story UI Live Environment..."
echo ""

# Configuration
STORYBOOK_PORT=6006
MCP_PORT=${PORT:-4001}

# Start Storybook dev server in background
echo "📖 Starting Storybook dev server on internal port ${STORYBOOK_PORT}..."
npm run storybook -- --port "$STORYBOOK_PORT" --host 0.0.0.0 --ci --no-open &
STORYBOOK_PID=$!

# Wait for Storybook to initialize with HTTP readiness check
# Web Components/Shoelace requires more startup time due to custom-elements.json parsing
# Increased timeout for Railway's slower infrastructure
echo "⏳ Waiting for Storybook to start (may take up to 90 seconds on Railway)..."

STORYBOOK_READY=false
MAX_WAIT=90
WAIT_COUNT=0

while [ $WAIT_COUNT -lt $MAX_WAIT ]; do
    # Check if process is still alive
    if ! kill -0 $STORYBOOK_PID 2>/dev/null; then
        echo "❌ Storybook process crashed during startup"
        exit 1
    fi

    # Check if Storybook is actually responding to HTTP requests
    # Using wget instead of curl (curl is not installed in the container)
    if wget -q --spider http://localhost:$STORYBOOK_PORT 2>/dev/null; then
        STORYBOOK_READY=true
        break
    fi

    # Progress indicator every 10 seconds
    if [ $((WAIT_COUNT % 10)) -eq 0 ] && [ $WAIT_COUNT -gt 0 ]; then
        echo "   Still waiting... ${WAIT_COUNT}s elapsed"
    fi

    sleep 1
    WAIT_COUNT=$((WAIT_COUNT + 1))
done

if [ "$STORYBOOK_READY" = false ]; then
    echo "❌ Storybook failed to become ready within ${MAX_WAIT} seconds"
    kill $STORYBOOK_PID 2>/dev/null
    exit 1
fi

echo "✅ Storybook dev server running and responding on port ${STORYBOOK_PORT} (took ${WAIT_COUNT}s)"

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
