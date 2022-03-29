import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
import Error from './index';

describe('when error component is render', () => {
  test('renders error advise', () => {
    render(<Error />, { wrapper: MemoryRouter });
    const textElement = screen.getByText(/404/i);
    expect(textElement).toBeInTheDocument();
  });
});
