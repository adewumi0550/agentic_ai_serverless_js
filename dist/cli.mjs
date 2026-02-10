#!/usr/bin/env node

// src/cli.ts
import { Command } from "commander";
import chalk from "chalk";
var program = new Command();
program.name("agentic-sdk").description("Agentic AI Serverless SDK CLI").version("0.1.0");
program.command("hello").description("Greets the user").action(() => {
  console.log(chalk.green("Hello from Agentic AI SDK!"));
  console.log(chalk.blue(`Running on ${process.platform}`));
});
program.parse(process.argv);
