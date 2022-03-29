import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('when App renders', () => {
  test('renders search react link', () => {
    render(<App />);
    const searchElement = screen.getByPlaceholderText(/search/i);
    expect(searchElement).toBeInTheDocument();
  });
});
