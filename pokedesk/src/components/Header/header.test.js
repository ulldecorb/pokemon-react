import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

describe('when error component is render', () => {
  test('renders error advise', () => {
    render(<Header />, { wrapper: MemoryRouter });
    const textElement = screen.getByText(/FAVORITES/i);
    expect(textElement).toBeInTheDocument();
  });
});
