# 🤖 Agentic Deployment Integration (aid)

> **Deploy Smarter, Not Harder.**  
> A lightweight, AI-powered CLI that turns your codebase into a deployment-ready artifact using Google Gemini.

`aid` is a **Zero-Dependency** Shell script (Bash + Curl + Python3) that works on macOS, Linux, and Windows (WSL/Git Bash). It bridges the gap between your code and the cloud by acting as an intelligent DevOps engineer.

---

## 🚀 Features

### Core
*   **`init`**: Safe setup. Configures API keys and secures your workspace (adds `.env`, `node_modules` to `.gitignore` automatically).
*   **`config`**: View or update your local/global configuration.
*   **`version`**: Show current version.
*   **`update`**: Self-update to the latest version features.
*   **`history`**: View a log of your AI interactions.
*   **`clean`**: Instantly clear your terminal screen for a fresh start.
*   **`help`**: Show the command list.

### Agentic AI
*   **`ask "question"`**: Chat with your codebase. Ask about architecture, bugs, or logic.
*   **`analyse`**: Generates a deep-dive **Agentic Report** (`AGENTIC_REPORT.md`) covering stack analysis, security audit, and scalability.
*   **`review`**: Performs a comprehensive code review focusing on security and performance.
*   **`refactor file.js "instruction"`**: AI-driven code refactoring for specific files.
*   **`gen "instruction"`**: Generate production-ready code snippets from scratch.
*   **`docs`**: Auto-generate comprehensive project documentation (`PROJECT_DOCS.md`).
*   **`report`**: View the last generated analysis report.

### Serverless & Ops
*   **`start`**: Auto-detects your project type (Node, Python, Go, etc.) and starts the local server.
*   **`deploy`**: The star of the show.
    *   **Auto-Detects** your project type.
    *   **Generates** a tailored `DEPLOYMENT_PLAN.md` (Dockerfiles, yaml configs, commands).
    *   **Executes** deployment scripts for AWS, GCP, Vercel, Render, and more.
*   **`push`**: Smart Git Push.
    *   **Auto-Stages** changes (respecting `.gitignore`).
    *   **Generates** Semantic Commit Messages (Conventional Commits) based on your diff.
    *   **Pushes** to remote with a single confirmation.

---

## 📥 Installation

Run this one-line command to install `aid` to your system/bin:

```bash
curl -fsSL https://raw.githubusercontent.com/adewumi0550/agentic_ai_serverless_js/main/install.sh | bash
```

**Requirements:**
*   **Bash** (Standard on macOS/Linux/WSL)
*   **Curl**
*   **Python 3** (For safe JSON parsing)
*   **Git**

---

## ⚡ Usage Guide

### 1. Setup
Initialize the tool in your project root.
```bash
aid init
```
*   **Global Config**: Saves key to `~/.aid/config` (Recommended for devs).
*   **Local Config**: Saves key to `.aid/config` (for project-specific overrides).

### 2. Daily Workflow
Instead of `git add . && git commit -m "update" && git push`, just run:
```bash
aid push
```
*It will analyze your changes, write a professional commit message, and push for you.*

### 3. Understanding Your Code
Need to explain a complex file to a junior dev?
```bash
aid ask "Explain the authentication flow in auth_service.go"
```

### 4. Deployment
Ready to go to production?
```bash
aid deploy
```
1.  Selects your platform (AWS, GCP, Vercel, etc.).
2.  **Generates**: `DEPLOYMENT_PLAN.md` with step-by-step instructions and IaC code.
3.  **Executes**: Runs the deployment commands for you.

---

## 🛡️ Security

*   **No Data Retention**: Your code is sent to Gemini for analysis but is stateless.
*   **Local Execution**: Everything runs on your machine.
*   **Smart Ignorance**: `aid` automatically adds `.env`, `.aid/`, and `node_modules` to `.gitignore` to prevent accidental leaks.

---

## 📜 License

MIT License. Open Source and Free to use.
