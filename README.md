# Agentic Deployment Integration CLI (aid)

A lightweight, zero-dependency Shell CLI for Agentic Deployment Integration.
Powered by Google Gemini.

## 🚀 Features

*   **`init` & `config`**: Quick setup and configuration management.
*   **`ask`**: Chat with your codebase context-aware.
*   **`review`**: Comprehensive AI code reviews.
*   **`refactor`**: Intelligent file refactoring.
*   **`docs`**: Auto-generate project documentation.
*   **`deploy`**: customizable deployment.

## 📥 Installation

### 🚀 Quick Install

Run the following command in your terminal:
```bash
curl -fsSL https://raw.githubusercontent.com/adewumi0550/agentic_ai_serverless_js/main/install.sh | bash
```

### 🌍 Platform Specifics

**macOS / Linux**:
*   The script installs `aid` to `/usr/local/bin` so you can run it from anywhere.
*   You may be prompted for your password (`sudo`) to allow this write access.

**Windows**:
*   We strongly recommend using **WSL (Windows Subsystem for Linux)** or **Git Bash**.
*   Standard Command Prompt (cmd.exe) and PowerShell are **not supported** directly as this is a Bash script.

> Once installed, you can simply run `aid init` from any directory to get started!

## 🛠 Usage Guide

### 1. Configuration
Setup your environment.
```bash
./aid init
```
View or update settings:
```bash
./aid config
./aid config GEMINI_MODEL gemini-1.5-pro
```

### 2. Agentic Workflows
Leverage AI to accelerate development.

*   **Ask Questions**:
    ```bash
    ./aid ask "How does the auth flow work?"
    ```
*   **Analyze Codebase**:
    ```bash
    ./aid analyse
    ```
*   **Code Review**:
    ```bash
    ./aid review
    ```
*   **Refactor Code**:
    ```bash
    ./aid refactor src/main.js "Convert this to async/await"
    ```
*   **Generate Docs**:
    ```bash
    ./aid docs
    ```

### 3. Ops & Serverless
*   **Local Dev**: `./aid start` (Auto-detects project type)
*   **Deploy**: `./aid deploy` (Runs `deploy.sh` etc.)

---

## 📋 Requirements
*   **Bash** (standard on macOS/Linux).
*   **Curl** (for API requests).
*   **Python 3** (for safe JSON parsing).
