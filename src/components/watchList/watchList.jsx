import React from "react";
import CardWatchList from "../cardWatchList/cardWatchList";

import "./watchList.scss";

const WatchList = () => {
  let activeUser = sessionStorage.activeUser;

  let usersList = JSON.parse(localStorage.users);

  console.log(usersList);

  let watchListFilms = [];

  for (let user of usersList) {
    if (user.name === activeUser) {
      for (let film of user.watchList) {
        watchListFilms.push(film);
      }
    }
  }

  const deleteToWatchList = (filmToDelete) => {
    // Guardamos el array WatchList creada en el LocalStorage en una variables para poder manipularse
    let arrayFilms = watchListFilms;

    // Creamos una variable que guardará el array ya filtrado
    let filteredFilms = arrayFilms.filter(
      (film) => film.name !== filmToDelete.name
    );

    // Guardamos en localStorage el nuevo array sin la película que hemos eliminado

    //localStorage.watchList = JSON.stringify(filteredFilms);

    // Hacemos que el componente se repinte mostrando las peliculas que se mantienen en el localStorage
  };

  // let watchListFilms = films.map(film => <CardWatchList film={film} deleteFilm={deleteToWatchList} />

  let watchListCard = watchListFilms.map((film) => (
    <CardWatchList film={film} deleteFilm={deleteToWatchList} />
  ));

  return (
    <main className="main">
      <h1 className="title">WatchList</h1>
      <section className="list">
        {/*    {watchListFilms} */}
        {watchListCard}
      </section>
    </main>
  );
};

export default WatchList;
