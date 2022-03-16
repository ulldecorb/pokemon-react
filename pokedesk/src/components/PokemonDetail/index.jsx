import React from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonDetail() {
  const { id } = useParams();
  return (
    <div>
      PokemonDetail id =
      {' '}
      {id}
    </div>
  );
}
