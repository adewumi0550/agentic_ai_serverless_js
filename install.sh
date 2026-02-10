#!/bin/bash

# Agentic AI Serverless SDK Installer

set -e

echo "🚀 Installing Agentic AI Serverless SDK..."

# Check requirements
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed. Please install Node.js v18+."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm is required but not installed."
    exit 1
fi

echo "📦 Installing dependencies..."
# Use a custom cache in /tmp to avoid permission issues if running as non-root or in restricted envs
npm install --no-audit --no-fund --loglevel=error

echo "🔨 Building project..."
npm run build

echo "🔗 Linking CLI command..."
if [ -w "$(npm config get prefix)" ]; then
  npm link
else
  echo "⚠️  Need sudo access to link global command."
  sudo npm link
fi

echo ""
echo "✅ Installation complete!"
echo "Try running:"
echo "  ais --help"
echo "  ais init"
