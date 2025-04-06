import { render as inkRender } from 'ink-testing-library';
import React from 'react';

/**
 * Enhanced render function for Ink components
 * Provides additional utilities beyond standard ink-testing-library
 */
export function render(component: React.ReactElement) {
  const renderResult = inkRender(component);

  return {
    ...renderResult,
    // Add any custom helper methods here
    findTextContent: (text: string): boolean => {
      const frame = renderResult.lastFrame();
      return frame?.includes(text) || false;
    }
  };
}
