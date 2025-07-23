import { render, screen } from '@testing-library/react';
import App from '../App';
import { test, expect } from 'vitest';

test('renders Imagify heading', () => {
  render(<App />);
  expect(screen.getByText(/Imagify/i)).toBeInTheDocument();
});
