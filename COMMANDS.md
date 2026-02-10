# Agentic Deployment Integration CLI - Command Reference

This document provides a comprehensive guide to all available commands in the `aid` CLI tool.

## ⚡️ Core Commands

### `init`
Interactive setup for your environment and deployment.
*   **Usage**: `./aid init`
*   **Actions**:
    1.  Sets up **Gemini API Key**.
    2.  **Auto-detects** your tech stack (Node.js, Docker, Python, etc.).
    3.  Asks for your preferred **Deployment Platform** (AWS, GCP, Vercel, etc.).
    4.  Captures platform-specific keys (e.g., `AWS_ACCESS_KEY_ID`, `VERCEL_TOKEN`) securely into `.env`.
    5.  Generates a custom `DEPLOYMENT_PLAN.md` based on your choices.
*   **When to use**: First time setup or when changing deployment targets.

### `config`
View or modify configuration settings.
*   **Usage**: 
    *   `./aid config` (View all settings)
    *   `./aid config <KEY>` (View specific setting)
    *   `./aid config <KEY> <VALUE>` (Set specific setting)
*   **Examples**:
    *   `./aid config GEMINI_MODEL gemini-1.5-pro` (Switch to a more powerful model)
    *   `./aid config DEBUG true`

### `help`
Displays the quick help menu.
*   **Usage**: `./aid help`

---

## 🧠 Agentic AI Commands

### `ask`
Ask natural language questions about your codebase.
*   **Usage**: `./aid ask "Your question"`
*   **Example**: `./aid ask "Where is the user authentication logic located?"`
*   **Output**: `aid_answer.md`

### `analyse` (or `analyze`)
Performs a full scan of your current directory and generates an architectural report.
*   **Usage**: `./aid analyse`
*   **Output**: `analysis_report.md` (Contains Project Overview, Architecture, Code Quality, Suggestions)

### `review`
Conducts a comprehensive code review focusing on security, performance, and best practices.
*   **Usage**: `./aid review`
*   **Output**: `code_review.md`

### `refactor`
Refactors a specific file based on your instructions.
*   **Usage**: `./aid refactor <file_path> "Instructions"`
*   **Example**: `./aid refactor src/utils.py "Rewrite this function to be more efficient and add comments"`
*   **Output**: `<file_path>.refactored`

### `gen` (or `generate`)
Generates new code snippets or files from a prompt.
*   **Usage**: `./aid gen "Your prompt"`
*   **Example**: `./aid gen "Write a Python script to scrape a website"`
*   **Output**: `generated_code.md`

### `docs`
Auto-generates project documentation.
*   **Usage**: `./aid docs`
*   **Output**: `PROJECT_DOCS.md`

### `report` (or `view`)
Quickly view the last generated analysis report in the terminal.
*   **Usage**: `./aid report`

---

## ☁️ Ops & Serverless Commands

### `start`
Starts your project locally. It attempts to auto-detect the project type.
*   **Usage**: `./aid start`
*   **Logic**:
    *   If `package.json` exists -> `npm start`
    *   If `main.py` exists -> `python3 main.py`

### `deploy`
Deploys your project.
*   **Usage**: `./aid deploy`
*   **Logic**:
    *   Checks for `deploy.sh` and runs it if found.
    *   Checks for `serverless.yml` and runs `sls deploy`.
    *   Checks for `gcloud` and runs `gcloud run deploy`.
