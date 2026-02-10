#!/bin/bash

# Agentic AI Serverless Installer
# Installs 'ais' to /usr/local/bin

set -e

INSTALL_DIR="/usr/local/bin"
BIN_NAME="ais"
REPO_URL="https://raw.githubusercontent.com/adewumi0550/agentic_ai_serverless_js/main/ais"

echo "🚀 Installing Agentic AI Serverless CLI..."

# Check for sudo/root
if [ "$EUID" -ne 0 ]; then
    SUDO="sudo"
    echo "ℹ️  Using sudo to install to $INSTALL_DIR..."
else
    SUDO=""
fi

# Download or Copy
if [ -f "./ais" ]; then
    echo "📂 Installing from local source..."
    $SUDO cp ./ais "$INSTALL_DIR/$BIN_NAME"
else
    echo "⬇️  Downloading from GitHub..."
    $SUDO curl -fsSL "$REPO_URL" -o "$INSTALL_DIR/$BIN_NAME"
fi

# Make executable
$SUDO chmod +x "$INSTALL_DIR/$BIN_NAME"

echo ""
echo "✅ Successfully installed 'ais' to $INSTALL_DIR/$BIN_NAME"
echo ""
echo "Usage:"
echo "  ais init      # Setup your API Key"
echo "  ais help      # Show commands"
echo ""
echo "🌟 You can now run 'ais' from any directory!"
