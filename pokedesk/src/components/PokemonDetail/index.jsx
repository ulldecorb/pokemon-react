import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PokemonDetail() {
  const { id } = useParams();
  const [url, setUrl] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState([]);
  if (!url) { setUrl([`https://pokeapi.co/api/v2/pokemon/${id}`]); }

  axios.get(url).then((res) => {
    setPokemonDetail(res.data);
  });

  return (
    <div>
      PokemonDetail id =
      {' '}
      {id}
      <br />
      {pokemonDetail.name}
      {pokemonDetail.id}
      {/* <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} /> */}

    </div>
  );
}
