import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('when App renders', () => {
  test('renders loading', () => {
    render(<App />);
    const searchElement = screen.getByText(/loading.../i);
    expect(searchElement).toBeInTheDocument();
  });
  test('renders loading', () => {
    render(<App />);
    const attribute = screen.getByTitle('path');
    expect(attribute).toBeInTheDocument();
  });
});
