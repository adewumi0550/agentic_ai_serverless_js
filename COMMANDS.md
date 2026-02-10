# Agentic AI Serverless CLI - Command Reference

This document provides a comprehensive guide to all available commands in the `ais` CLI tool.

## ⚡️ Core Commands

### `init`
Interactive setup for your environment and deployment.
*   **Usage**: `./ais init`
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
    *   `./ais config` (View all settings)
    *   `./ais config <KEY>` (View specific setting)
    *   `./ais config <KEY> <VALUE>` (Set specific setting)
*   **Examples**:
    *   `./ais config GEMINI_MODEL gemini-1.5-pro` (Switch to a more powerful model)
    *   `./ais config DEBUG true`

### `help`
Displays the quick help menu.
*   **Usage**: `./ais help`

---

## 🧠 Agentic AI Commands

### `ask`
Ask natural language questions about your codebase.
*   **Usage**: `./ais ask "Your question"`
*   **Example**: `./ais ask "Where is the user authentication logic located?"`
*   **Output**: `ais_answer.md`

### `analyse` (or `analyze`)
Performs a full scan of your current directory and generates an architectural report.
*   **Usage**: `./ais analyse`
*   **Output**: `analysis_report.md` (Contains Project Overview, Architecture, Code Quality, Suggestions)

### `review`
Conducts a comprehensive code review focusing on security, performance, and best practices.
*   **Usage**: `./ais review`
*   **Output**: `code_review.md`

### `refactor`
Refactors a specific file based on your instructions.
*   **Usage**: `./ais refactor <file_path> "Instructions"`
*   **Example**: `./ais refactor src/utils.py "Rewrite this function to be more efficient and add comments"`
*   **Output**: `<file_path>.refactored`

### `gen` (or `generate`)
Generates new code snippets or files from a prompt.
*   **Usage**: `./ais gen "Your prompt"`
*   **Example**: `./ais gen "Write a Python script to scrape a website"`
*   **Output**: `generated_code.md`

### `docs`
Auto-generates project documentation.
*   **Usage**: `./ais docs`
*   **Output**: `PROJECT_DOCS.md`

### `report` (or `view`)
Quickly view the last generated analysis report in the terminal.
*   **Usage**: `./ais report`

---

## ☁️ Ops & Serverless Commands

### `start`
Starts your project locally. It attempts to auto-detect the project type.
*   **Usage**: `./ais start`
*   **Logic**:
    *   If `package.json` exists -> `npm start`
    *   If `main.py` exists -> `python3 main.py`

### `deploy`
Deploys your project.
*   **Usage**: `./ais deploy`
*   **Logic**:
    *   Checks for `deploy.sh` and runs it if found.
    *   Checks for `serverless.yml` and runs `sls deploy`.
    *   Checks for `gcloud` and runs `gcloud run deploy`.
