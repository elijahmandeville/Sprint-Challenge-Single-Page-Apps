import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ chars, setChars ] = useState([]);
  const [ data, setData ] = useState({});

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      setChars(res.data.results);
      setData(res.data);
      // console.log(res.data);
    })
    .catch(err => console.log('error: ', err));
  }, []);

  return (
    <section className="character-list">
      <h1>Character List</h1>
      <SearchForm dataProp={chars} setCharacters={setChars} />
      <br />
      {chars.map((e, i) => {
        return <CharacterCard key={i} character={e} />
      })}
    </section>
  );
}
