#!/bin/bash

# Agentic Deployment Integration Installer
# Installs 'aid' to /usr/local/bin

set -e

INSTALL_DIR="/usr/local/bin"
BIN_NAME="aid"
REPO_URL="https://raw.githubusercontent.com/adewumi0550/agentic_ai_serverless_js/main/aid"

echo "🚀 Installing Agentic Deployment Integration CLI..."

# Check for sudo/root
if [ "$EUID" -ne 0 ]; then
    SUDO="sudo"
    echo "ℹ️  Using sudo to install to $INSTALL_DIR..."
else
    SUDO=""
fi

# Download or Copy
if [ -f "./aid" ]; then
    echo "📂 Installing from local source..."
    $SUDO cp ./aid "$INSTALL_DIR/$BIN_NAME"
else
    echo "⬇️  Downloading from GitHub..."
    $SUDO curl -fsSL "$REPO_URL" -o "$INSTALL_DIR/$BIN_NAME"
fi

# Make executable
$SUDO chmod +x "$INSTALL_DIR/$BIN_NAME"

echo ""
echo "✅ Successfully installed 'aid' to $INSTALL_DIR/$BIN_NAME"
echo ""
echo "Usage:"
echo "  aid init      # Setup your API Key"
echo "  aid help      # Show commands"
echo ""
echo "🌟 You can now run 'aid' from any directory!"
