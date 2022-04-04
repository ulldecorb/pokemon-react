import React from 'react';
// import { render } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import List from './index';

describe('when List renders', () => {
  test('main element renders', () => {
    const { container } = render(<List
      pokemon={[]}
      favoritesList={[]}
      setFavoritesList={jest.fn()}
    />);
    expect(container.childElementCount).toEqual(1);
  });
  test('pokemon renders', async () => {
    render(<List
      pokemon={[{ name: 'first pokemon', url: 'https://pokeapi.co/api/v2/pokemon/1/' }, { name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/' }]}
      favoritesList={[]}
      setFavoritesList={jest.fn()}
    />, { wrapper: MemoryRouter });
    const listBox = screen.getByTestId('listBox');
    expect(listBox.childElementCount).toEqual(2);
  });
});
