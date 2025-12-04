import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders N4ML amateur radio app', () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to N4ML/i);
  expect(heading).toBeInTheDocument();
});
