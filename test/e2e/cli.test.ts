import {exec} from 'node:child_process';
import path from 'node:path';
import {promisify} from 'node:util';
import {fileURLToPath} from 'node:url';
import {describe, it, expect, beforeAll} from 'vitest';

const execPromise = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cliPath = path.resolve(__dirname, '../../dist/cli.js');

describe('CLI E2E tests', () => {
	beforeAll(async () => {
		// Ensure CLI is built before running tests
		await execPromise('npm run build');
		// Make CLI executable
		await execPromise(`chmod +x ${cliPath}`);
	});

	it('displays help information', async () => {
		const {stdout} = await execPromise(`node ${cliPath} --help`);
		expect(stdout).toContain('Usage');
		expect(stdout).toContain('Options');
	});

	it('greets unknown user when no name is provided', async () => {
		const {stdout} = await execPromise(`node ${cliPath}`);
		expect(stdout).toContain('Hello, Stranger');
	});

	it('greets user with a name when provided', async () => {
		const {stdout} = await execPromise(`node ${cliPath} --name=Jane`);
		expect(stdout).toContain('Hello, Jane');
	});
});
