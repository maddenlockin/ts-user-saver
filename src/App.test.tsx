import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('label renders to page on load', async () => {
  render(<App />);
  const inputLabel = await screen.findByText('Github Username');
  expect(inputLabel).toBeInTheDocument();
});
