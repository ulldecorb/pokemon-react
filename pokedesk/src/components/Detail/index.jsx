import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
// import Error from '../Error';
import Loading from '../Loading';
import './detail.css';

export default function Detail() {
  const { param } = useParams();
  const [url, setUrl] = useState();
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [types, setTypes] = useState('');
  const [id, setId] = useState('');
  const [firstImage, setFirstImage] = useState('');
  const [secondImage, setSecondImage] = useState('');
  const [loading, setLoading] = useState(true);
  if (!url) { setUrl(`https://pokeapi.co/api/v2/pokemon/${param}/`); }

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(url, {
      cancelToken: new axios.CancelToken((c) => { cancel = c; })
    }).then((res) => {
      setLoading(false);
      setName(res.data.name);
      setId(res.data.id);
      setHeight(res.data.height);
      setWeight(res.data.weight);
      setTypes(res.data.types.map((arr) => arr.type.name).join(' '));
      setFirstImage(res.data.sprites.other['official-artwork'].front_default);
      setSecondImage(res.data.sprites.front_default);
    });

    return () => cancel();
  }, [url]);

  const handlePreviousPokemon = () => {
    setUrl(`https://pokeapi.co/api/v2/pokemon/${id - 1}/`);
  };

  const handleNextPokemon = () => {
    setUrl(`https://pokeapi.co/api/v2/pokemon/${id + 1}/`);
  };

  if (loading) return <Loading />;

  return (
    <div className="detail">
      {' '}
      <h2 className="detail__name">{name}</h2>
      <figure className="detail__image-box">
        <img
          src={firstImage || secondImage}
          alt={name}
          className="detail__image"
        />
      </figure>
      <article className="detail__info">
        <div className="info__box">
          <p className="info__name">
            id:
            {' '}
            {id}
          </p>
          <p className="info__name">
            height:
            {' '}
            {height}
          </p>
        </div>
        <div className="info__box">
          <p className="info__name">
            types:
            {' '}
            {types}
          </p>
          <p className="info__name">
            weight:
            {' '}
            {weight}
          </p>
        </div>
      </article>
      <Link
        to="../"
        className="detail__back-link"
      >
        Back
      </Link>
      <Link
        to={`../pokemons/${id - 1}/`}
        className="detail__previous-nav-link"
        onClick={handlePreviousPokemon}
      >
        Previous
      </Link>
      <Link
        to={`../pokemons/${id + 1}/`}
        className="detail__next-nav-link"
        onClick={handleNextPokemon}
      >
        Next
      </Link>
    </div>
  );
}
