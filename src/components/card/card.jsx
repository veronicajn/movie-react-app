import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { IconContext } from "react-icons";
import { navigate } from "hookrouter";

import "./card.scss";

const getUserWatchList = (name) => {
  const users = JSON.parse(localStorage.users);

  let user = users.find((user) => user.name === name);

  if (user) {
    return user.watchList;
  }
};

const saveUserWatchList = (name, watchList) => {
  const users = JSON.parse(localStorage.users);
  let user = users.find((user) => user.name === name);

  user.watchList = watchList;

  // Guardamos en el localStorage el array con la nueva película guardada
  localStorage.users = JSON.stringify(users);
};

const Card = (props) => {
  const addToWatchList = () => {
    // Creamos el objeto película
    let addedFilm = {
      name: props.film.Title,
      year: props.film.Year,
      rating: props.film.Rating,
    };

    let activeUser = sessionStorage.activeUser;

    // Guardamos el array WatchList creada en el LocalStorage en una variables para poder manipularse

    let films = getUserWatchList(activeUser);

    // Insertamos el array la nueva peli

    let arrayFiltrado = films.filter((film) => film.name === addedFilm.name);

    console.log(arrayFiltrado);

    if (arrayFiltrado.length === 0) {
      films.push(addedFilm);
    } else {
      alert("Esta película ya esta añadida");
    }

    saveUserWatchList(activeUser, films);
  };

  const showFilm = () => {
    navigate(`/movies/${props.film.Rank}`);
  };

  return (
    <article className="card">
      <div className="card__portrait">
        <div className="card__ribbon">
          <span className="card__points">{props.film.Rating}/10</span>
        </div>
        <img
          src="https://static.posters.cz/image/750/poster/thor-ragnarok-one-sheet-i50061.jpg"
          alt={props.film.Title}
          className="card__image"
        />
        <button className="button card__button">
          <IconContext.Provider value={{ className: "card__button__icon" }}>
            <GrAdd />
          </IconContext.Provider>
          <span className="card__button__text" onClick={addToWatchList}>
            Watchlist
          </span>
        </button>
      </div>
      <div className="card__info" onClick={showFilm}>
        <h3 className="card__name">
          {props.film.Title} -{" "}
          <span className="card__year">{props.film.Year}</span>
        </h3>
      </div>
    </article>
  );
};

export default Card;
