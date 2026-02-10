# Agentic AI Serverless SDK (ais)

A cross-platform CLI tool for Agentic AI Serverless, designed to work on macOS, Linux, and Windows.

## 🚀 Quick Start

### Prerequisites
- **Git** installed on your machine.
- **Node.js** (v18+) is required for Source and Shell Wrapper methods.
- **No dependencies** required for the Standalone Binary method.

---

## 📥 Installation Methods

Choose the method that works best for you.

### Option 1: Standalone Binary (Recommended for non-Node users)
Run the tool without installing Node.js.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/adewumi0550/agentic_ai_serverless_js.git
    cd agentic_ai_serverless_js
    ```

2.  **Generate the binaries** (requires running this once on a machine with Node.js, or downloading pre-built binaries):
    ```bash
    npm install
    npm run compile
    ```

3.  **Run the binary**:
    *   **macOS**: `./binaries/ais-macos`
    *   **Linux**: `./binaries/ais-linux`
    *   **Windows**: `.\binaries\ais-win.exe`

---

### Option 2: Shell Wrapper (Easy Setup)
Run the tool using the helper script in the root directory.

1.  **Clone and Enter Directory**:
    ```bash
    git clone https://github.com/adewumi0550/agentic_ai_serverless_js.git
    cd agentic_ai_serverless_js
    ```

2.  **Make Executable & Run**:
    ```bash
    chmod +x ais
    ./ais --help
    ```
    *Note: The script will automatically install dependencies and build the project for you.*

---

### Option 3: Global Installation (for Developers)
Install `ais` as a global system command.

1.  **Run the Installer (Mac/Linux)**:
    ```bash
    chmod +x install.sh
    ./install.sh
    ```

2.  **Manual Install**:
    ```bash
    npm install
    npm run build
    sudo npm link
    ```

---

## 🛠 Usage

Once installed (or using `./ais` / `./binaries/ais-macos`), use the following commands:

### 1. Initialize
Set up your environment and Gemini API Key.
```bash
ais init
```
This saves your API key to a `.env` file in the current directory.

### 2. Analyze Codebase
Run the AI agent to scan and analyze your code.
```bash
ais analyse
```
*   Scans files in the current folder.
*   Sends code context to Gemini AI.
*   Generates an `analysis_report.md` with architecture and quality insights.

### 3. Start Agent
Start the file processing agent (placeholder for future logic).
```bash
ais start
```

### 4. Help
View all commands and options.
```bash
ais --help
```

---

## 🔧 Troubleshooting

*   **Permission Errors (`EPERM`)**: If `npm install` fails, try using the Shell Wrapper (`./ais`) or run `sudo npm install`.
*   **Command Not Found**: Ensure you have run `npm link` or are using the `./ais` script.
*   **API Key Error**: Run `ais init` to ensure your `.env` file is set up correctly.
