// eslint-disable-next-line import/no-unassigned-import
import '@testing-library/jest-dom';
import {vi} from 'vitest';

// Mock chalk to ensure consistent output in tests
vi.mock('chalk', async () => {
	const actual = await vi.importActual('chalk');
	return {
		...actual,
		// Override specific chalk functions to return the plain text for tests
		green: (text: string) => text,
		red: (text: string) => text,
		yellow: (text: string) => text,
		blue: (text: string) => text,
		// Add other chalk functions as needed
	};
});
