# Agentic AI Serverless SDK (ais)

A cross-platform CLI tool for Agentic AI Serverless, supporting macOS, Linux, and Windows.

## Installation

### macOS / Linux

1.  Clone the repository:
    ```bash
    git clone https://github.com/adewumi0550/agentic_ai_serverless_js.git
    cd agentic_ai_serverless_js
    ```

2.  Run the installer script:
    ```bash
    chmod +x install.sh
    ./install.sh
    ```
    *Note: You may be prompted for your password to link the command globally.*

3.  Alternatively, install manually:
    ```bash
    npm install
    npm run build
    sudo npm link
    ```

### Windows

1.  Clone the repository.
2.  Open PowerShell as Administrator.
3.  Run:
    ```powershell
    npm install
    npm run build
    npm link
    ```

### Option 2: Use the Shell Wrapper (No Global Install)
You can run the CLI directly without installing it globally using the `ais` script in the root directory.

1.  Make the script executable:
    ```bash
    chmod +x ais
    ```

2.  Run commands:
    ```bash
    ./ais init
    ./ais start
    ./ais analyse
    ```

### Option 3: System Program (Standalone Binary)
You can generate a standalone executable that works on any PC without installing Node.js or dependencies.

1.  **Generate Binaries**:
    ```bash
    npm run compile
    ```
    This will create 3 executables in the `binaries/` folder:
    *   `ais-macos`
    *   `ais-linux`
    *   `ais-win.exe`

2.  **Run directly**:
    ```bash
    ./binaries/ais-macos init
    ```

## usage

### 1. Initialize
Set up your environment and API keys.
```bash
ais init
# OR
./ais init
```
This will prompt you for your Gemini API Key and save it to `.env`.

### 2. Start Agent process
Run the agentic process to analyze files in the current directory.
```bash
ais start
```

### 3. Help
View all available commands.
```bash
ais --help
```

## updates
- Pull latest changes: `git pull origin main`
- Re-run `npm run build`
