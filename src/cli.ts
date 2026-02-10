#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

import { analyzeCommand } from './commands/analyze.js';

const program = new Command();

program
    .name('ais')
    .description('Agentic AI Serverless CLI')
    .version('0.1.0');

program
    .command('init')
    .description('Initialize the agentic process by setting up the environment')
    .action(async () => {
        const answers = await inquirer.prompt([
            {
                type: 'password',
                name: 'apiKey',
                message: 'Enter your Gemini API Key:',
                mask: '*'
            }
        ]);

        const envPath = path.join(process.cwd(), '.env');
        try {
            fs.writeFileSync(envPath, `GEMINI_API_KEY=${answers.apiKey}\n`);
            console.log(chalk.green('✅ Configuration saved to .env'));
        } catch (error) {
            console.error(chalk.red('❌ Failed to save configuration:'), error);
        }
    });

program
    .command('start')
    .description('Start the agentic process to read and process files')
    .action(() => {
        console.log(chalk.blue('🚀 Starting Agentic AI process...'));
        console.log(chalk.yellow('ℹ️  Reading files in current directory...'));
        const files = fs.readdirSync(process.cwd());
        console.log(chalk.gray(`Found ${files.length} files.`));
    });

program
    .command('analyse')
    .alias('analyze')
    .description('Analyze the current directory using Gemini AI')
    .action(async () => {
        await analyzeCommand();
    });

program.parse(process.argv);
