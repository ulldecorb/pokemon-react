import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <Search />
      <Link to="./pokemons/favorites" className="header__favorites-link">FAVORITES</Link>
    </header>
  );
}
