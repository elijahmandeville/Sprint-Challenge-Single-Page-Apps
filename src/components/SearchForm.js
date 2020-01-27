import React, { useState } from "react";


export default function SearchForm(props) {
  const [ name, setName ] = useState("");
  const [ array, setArray ] = useState([]);

  const onSubmitHandler = (e) => {
      e.preventDefault();
      e.persist();
      setName(e.target.name.value);
      // console.log(props);
      setArray(props.dataProp.filter(item => item.name.includes(name)));
  }
  

  return (
    <section className="search-form">
      <form onSubmit={onSubmitHandler}>
        <input name="name" value={name} onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }} />
        <button type="submit">
          Search
        </button>
      </form>
    </section>
  );
  }
