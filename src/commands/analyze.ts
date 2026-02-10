import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';

dotenv.config();

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

export const analyzeCommand = async () => {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error(chalk.red('❌ GEMINI_API_KEY not found in .env'));
        console.log(chalk.yellow('👉 Run "ais init" to set up your API key.'));
        process.exit(1);
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const spinner = ora('Scanning files...').start();

    try {
        const files = getAllFiles(process.cwd());

        // Filter out undesired files/folders (node_modules, .git, etc.)
        const codeFiles = files.filter(file => {
            return !file.includes('node_modules') &&
                !file.includes('.git') &&
                !file.includes('dist') &&
                !file.includes('.DS_Store') &&
                (file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json') || file.endsWith('.md'));
        });

        if (codeFiles.length === 0) {
            spinner.warn('No code files found to analyze.');
            return;
        }

        spinner.text = `Analyzing ${codeFiles.length} files with Gemini...`;

        let codebaseContent = "";
        for (const file of codeFiles) {
            try {
                const content = fs.readFileSync(file, 'utf-8');
                // Basic check to skip large files to stay within context window limits if needed
                if (content.length < 50000) {
                    codebaseContent += `\n--- FILE: ${path.relative(process.cwd(), file)} ---\n${content}\n`;
                }
            } catch (readError) {
                // simple ignore
            }
        }

        const prompt = `
        You are an expert software engineer. Analyze the following codebase and provide a comprehensive report.
        
        Codebase Context:
        ${codebaseContent}
        
        Report Structure:
        1. **Project Overview**: What does this project do?
        2. **Architecture**: How is it structured?
        3. **Code Quality**: key observations, strengths, and weaknesses.
        4. **Improvement Suggestions**: Actionable advice.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        spinner.succeed('Analysis Complete!');
        console.log(chalk.cyan.bold('\n--- Gemini Analysis Report ---\n'));
        console.log(text);

        const reportPath = path.join(process.cwd(), 'analysis_report.md');
        fs.writeFileSync(reportPath, text);
        console.log(chalk.green(`\n✅ Report saved to ${reportPath}`));

    } catch (error: any) {
        spinner.fail('Analysis Failed');
        console.error(chalk.red('Error:'), error.message);
    }
};
