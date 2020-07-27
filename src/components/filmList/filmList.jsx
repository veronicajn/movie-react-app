import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GrSearch } from "react-icons/gr";

import "./filmList.scss";

import Card from "../card/card";

const FilmList = (props) => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  let filteredFilms = [];

  for (let film of props.films) {
    // Filtrado tiene que comprobar si el texto insertado es PARTE de una peli
    // Si search está vacio no hacer ningún filtrado
    if (film.Title.toLowerCase().includes(search.toLowerCase())) {
      filteredFilms.push(film);
    }
  }

  let arrayOfFilms = filteredFilms.map((film) => (
    <Card film={film} key={film.Title} />
  ));

  return (
    <main className="main">
      <section className="search">
        <input
          onChange={searchHandler}
          className="input search__input"
          type="text"
          placeholder="Search"
        />
        <IconContext.Provider value={{ className: "search__icon" }}>
          <GrSearch />
        </IconContext.Provider>
      </section>
      <section className="list">{arrayOfFilms}</section>
    </main>
  );
};

export default FilmList;
