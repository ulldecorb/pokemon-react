import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './search.css';

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const checkSearchInput = (input) => {
    setSearchInput(input);
    let matches = [];
    if (searchInput.length > 0) {
      matches = pokemonList.filter((p) => {
        const regex = new RegExp(`${input}`, 'gi');
        return p.match(regex);
      }).sort();
    }
    setSuggestions(matches);
  };

  // const handleSuggestionInput = (pokemon) => {
  //   setSearchInput(pokemon);
  //   setSuggestions([]);
  // };

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=898').then((res) => {
      const response = res.data.results.map((p) => p.name);
      setPokemonList(response);
    });
  }, []);

  return (
    <div className="search">
      <div className="search__input-box">
        <input
          type="text"
          onChange={(e) => checkSearchInput(e.target.value)}
          placeholder="Search..."
          className="input-box__input"
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }}
        />
        <div className="input-box__suggestions-box">
          {suggestions.length > 0 && suggestions.map((p) => (
            // <button key={p} type="button" onClick={() => handleSuggestionInput(p)}>{p}</button>
            <Link to={`./${p}`} key={p} className="suggestions-box__suggestions">{p}</Link>
          ))}
        </div>
      </div>
      <Link to={`./${searchInput}`} className="search__link">GO!</Link>
      {/* <button type="button" onClick={checkSearchInput}>X</button> */}
    </div>
  );
}
