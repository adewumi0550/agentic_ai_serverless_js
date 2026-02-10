# Agentic AI Serverless CLI (ais)

A lightweight, zero-dependency Shell CLI for Agentic AI Serverless.
Powered by Google Gemini.

## 🚀 Features

*   **`init` & `config`**: Quick setup and configuration management.
*   **`ask`**: Chat with your codebase context-aware.
*   **`review`**: Comprehensive AI code reviews.
*   **`refactor`**: Intelligent file refactoring.
*   **`docs`**: Auto-generate project documentation.
*   **`deploy`**: customizable deployment.

## 📥 Installation

### 🚀 One-Line Install (Recommended)
Install `ais` globally to your system (`/usr/local/bin`).

```bash
curl -fsSL https://raw.githubusercontent.com/adewumi0550/agentic_ai_serverless_js/main/install.sh | bash
```
*You may be prompted for your password to install to system directories.*

### Manual Install
If you prefer to check the code first:

1.  **Clone**:
    ```bash
    git clone https://github.com/adewumi0550/agentic_ai_serverless_js.git
    cd agentic_ai_serverless_js
    ```

2.  **Install**:
    ```bash
    ./install.sh
    ```

## 🛠 Usage Guide

### 1. Configuration
Setup your environment.
```bash
./ais init
```
View or update settings:
```bash
./ais config
./ais config GEMINI_MODEL gemini-1.5-pro
```

### 2. Agentic Workflows
Leverage AI to accelerate development.

*   **Ask Questions**:
    ```bash
    ./ais ask "How does the auth flow work?"
    ```
*   **Analyze Codebase**:
    ```bash
    ./ais analyse
    ```
*   **Code Review**:
    ```bash
    ./ais review
    ```
*   **Refactor Code**:
    ```bash
    ./ais refactor src/main.js "Convert this to async/await"
    ```
*   **Generate Docs**:
    ```bash
    ./ais docs
    ```

### 3. Ops & Serverless
*   **Local Dev**: `./ais start` (Auto-detects project type)
*   **Deploy**: `./ais deploy` (Runs `deploy.sh` etc.)

---

## 📋 Requirements
*   **Bash** (standard on macOS/Linux).
*   **Curl** (for API requests).
*   **Python 3** (for safe JSON parsing).
