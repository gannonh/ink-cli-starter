import React from 'react';
import {describe, it, expect} from 'vitest';
import {render} from 'ink-testing-library';
import App from '../app.js';

describe('App component', () => {
	it('greets unknown user', () => {
		const {lastFrame} = render(<App name={undefined} />);
		expect(lastFrame()).toContain('Hello, Stranger');
	});

	it('greets user with a name', () => {
		const {lastFrame} = render(<App name="Jane" />);
		expect(lastFrame()).toContain('Hello, Jane');
	});
});
