import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from './index';

describe('when pagination render', () => {
  test('next button is render', () => {
    render(<Pagination goToNextPage="url direction" />);
    const button = screen.getByText(/next/i);
    expect(button).toBeInTheDocument();
  });
  test('previous button is render', () => {
    render(<Pagination goToPreviousPage="url direction" />);
    const button = screen.getByText(/Previous/i);
    expect(button).toBeInTheDocument();
  });
  test('next button is not render', () => {
    const { container } = render(<Pagination goToNextPage={null} goToPreviousPage="previous url" />);
    expect(container.childElementCount).toEqual(1);
  });
  test('previous button is not render', () => {
    const { container } = render(<Pagination goToPreviousPage={null} goToNextPage="next url" />);
    expect(container.childElementCount).toEqual(1);
  });
  test('handle next pagination', () => {
    const mockProp = jest.fn();
    render(<Pagination goToNextPage={mockProp} />);
    const button = screen.getByText(/next/i);
    fireEvent.click(button);
    expect(mockProp).toHaveBeenCalledTimes(1);
  });
  test('handle previous pagination', () => {
    const mockProp = jest.fn();
    render(<Pagination goToPreviousPage={mockProp} />);
    const button = screen.getByText(/previous/i);
    fireEvent.click(button);
    expect(mockProp).toHaveBeenCalledTimes(1);
  });
});
