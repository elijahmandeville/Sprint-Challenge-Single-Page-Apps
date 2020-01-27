import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";


export default function SearchForm() {
  const [ name, setName ] = useState("");
  const [ searchedName, setSearchedName ] = useState("");
  let history = useHistory();

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/?${name}=rick&status=alive`)
    .then()
    .catch(err => console.log('error: ', err))
  }, [name])

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
    
  // }

  return (
    <section className="search-form">
      <form onSubmit={(e) => {
        e.preventDefault();
        setName(e.target.value);
        // console.log(name)
      }}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit" disabled={!name}>
          Search
        </button>
      </form>
    </section>
  );
  }
