# Agentic AI Serverless CLI (ais)

A lightweight, zero-dependency Shell CLI for Agentic AI Serverless.
Powered by Google Gemini.

## 🚀 Features

*   **`init`**: Securely setup your Gemini API Key.
*   **`analyse`**: Scan your codebase and get an AI-powered architecture & quality report.
*   **`generate`**: Generate code snippets or files using natural language prompts.
*   **`report`**: View your latest analysis report.
*   **`deploy`**: Deploy your project (customizable).

## 📥 Installation

No installation required! Just clone and run.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/adewumi0550/agentic_ai_serverless_js.git
    cd agentic_ai_serverless_js
    ```

2.  **Make Executable**:
    ```bash
    chmod +x ais
    ```

3.  **Run**:
    ```bash
    ./ais help
    ```

---

## 🛠 Usage Guide

### 1. Setup
First, link your Gemini API Key.
```bash
./ais init
```
*This prompts for your key and saves it to `.env` (which is git-ignored).*

### 2. Analyze Code
Understand your project structure and quality.
```bash
./ais analyse
```
*   Scans files in the current folder.
*   Generates `analysis_report.md`.
*   Displays insights directly in the terminal.

### 3. Generate Code
Need a new feature or script? Just ask.
```bash
./ais generate "Create a Python script to scrape a website"
```
*   Saves the output to `generated_code.md`.

### 4. View Report
Read the last analysis without re-running the AI.
```bash
./ais report
```

### 5. Deploy
Run your deployment script.
```bash
./ais deploy
```
*   Currently looks for `deploy.sh`. You can customize this in the `ais` script.

---

## 📋 Requirements
*   **Bash** (standard on macOS/Linux).
*   **Curl** (for API requests).
*   **Python 3** (for safe JSON parsing).
