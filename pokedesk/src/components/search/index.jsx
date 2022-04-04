import React, { useEffect, useState, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './search.css';

export default function Search() {
  const inputRef = useRef(null);

  const [searchInput, setSearchInput] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=898').then((res) => {
      const response = res.data.results.map((p) => p.name);
      setPokemonList(response);
    });
  }, []);

  const checkSearchInput = (input) => {
    setSearchInput(input);
    let matches = [];
    if (input.length > 0) {
      matches = pokemonList.filter((p) => {
        const regex = new RegExp(`${input}`, 'gi');
        return p.match(regex);
      }).sort();
    }
    setSuggestions(matches);
  };

  return (
    <div className="search">
      <div className="search__input-box">
        <input
          ref={inputRef}
          type="text"
          onChange={(e) => checkSearchInput(e.target.value)}
          placeholder="Search..."
          className="input-box__input"
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
              inputRef.current.value = null;
            }, 100);
          }}
        />
        {suggestions.length > 0 && (
          <div className="input-box__suggestions-box">
            {suggestions.map((p) => (
              <Link
                to={`./pokemons/${p}`}
                key={p}
                className="suggestions-box__suggestions"
              >
                {p}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Link to={`./pokemons/${searchInput}`} className="search__link">GO!</Link>
    </div>
  );
}
