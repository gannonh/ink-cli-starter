# Ink CLI Starter

Basic starter project for Ink CLI apps with unit and e2e testing frameworks (good setup for test driven development).

## Install

```bash
npm install --global my-cli
```

## CLI

```
$ my-cli --help

  Usage
    $ my-cli

  Options
    --name  Your name

  Examples
    $ my-cli --name=Jane
    Hello, Jane
```

## Development

### Commands

```bash
# Build
npm run build

# Development with watch mode
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Lint code
npm run lint

# Format code
npm run format
```

### Code Style & Conventions

- **Language:** TypeScript
- **Module System:** ESM (`"type": "module"` in `package.json`). Use `.js` extension in imports for compiled TS files.
- **Formatting:** Prettier (`@vdemedes/prettier-config`). Run `npx prettier --write .` before commits.
- **Linting:** XO (`xo-react` preset). See `package.json` for specific rules and ignores.
- **Typing:** Use TypeScript types. Base config: `@sindresorhus/tsconfig`.
- **Framework:** Ink (React for CLIs).
- **Testing:** Vitest with happy-dom environment. Unit tests in `__tests__` folders adjacent to implementation files. E2E tests in `test/e2e/`. Test config and setup files in `test/`.
- **Folder Structure:** Source code in `source/`. Unit tests in `__tests__` folders adjacent to the code being tested. Test config in `test/`. E2E tests in `test/e2e/`. Compiled output in `dist/`. Ignore `orig-source/**` for linting, testing, and formatting.
- **Git:** Use Conventional Commits. Add `.DS_Store` and `orig-source/` to `.gitignore`.
- **Dependencies:** Manage via `npm`. Use `chalk` v5 (ESM-only).

## Continuous Integration

This project uses GitHub Actions for continuous integration. The workflow runs automatically on push to the `main` branch and on pull requests.

### CI Workflow

The CI pipeline:

- Runs on Ubuntu with Node.js versions 16.x, 18.x, and 20.x
- Installs dependencies
- Runs linting checks
- Builds the project
- Runs all tests (unit and E2E)
- Uploads coverage reports to Codecov (for Node.js 20.x only)

You can view the workflow configuration in `.github/workflows/ci.yml`.

## Testing

This project uses Vitest for unit and E2E testing, enabling a smooth TDD workflow.

### Directory Structure

- `source/__tests__/`: Unit tests for components, placed adjacent to the source code
- `test/setup/`: Test configuration and setup files
- `test/e2e/`: End-to-end tests for the CLI application

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run only E2E tests
npm run test:e2e
```

### Test Types

#### Unit Tests

Unit tests are placed in `__tests__` directories adjacent to the code being tested. These tests focus on individual components and functions.

Example:

```tsx
import React from 'react';
import {describe, it, expect} from 'vitest';
import {render} from 'ink-testing-library';
import App from '../app.js';

describe('App component', () => {
	it('greets unknown user', () => {
		const {lastFrame} = render(<App name={undefined} />);
		expect(lastFrame()).toContain('Hello, Stranger');
	});
});
```

#### E2E Tests

E2E tests in the `test/e2e/` directory test the CLI as a whole, validating that commands work as expected from a user's perspective.

Example:

```ts
describe('CLI E2E tests', () => {
	it('greets user with a name when provided', async () => {
		const {stdout} = await execPromise(`node ${cliPath} --name=Jane`);
		expect(stdout).toContain('Hello, Jane');
	});
});
```

### Helpers and Utilities

Custom test utilities are available in `test/setup/utils.ts`.
