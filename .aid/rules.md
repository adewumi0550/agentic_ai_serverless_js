# Agentic User Rules

This file allows you to customize how the Agentic AI analyzes and generates code for your project.
Anything you write here will be included in the context for `aid analyze`, `aid gen`, and `aid ask`.

## Examples of Rules:

### 1. Style Guidelines
- "Always use TypeScript instead of JavaScript."
- "Prefer functional components with Hooks for React."
- "Use BEM naming convention for CSS classes."

### 2. Architecture Preferences
- "We use Clean Architecture: Domain, Data, Presentation layers."
- "All API calls must go through the `AuthService` singleton."

### 3. Library Constraints
- "Do not use `moment.js`; use `date-fns` instead."
- "Use `tailwindcss` for all styling; do not write custom CSS files."

### 4. Project Specifics
- "The main entry point is `src/index.ts`."
- "Deployment target is Google Cloud Run."
