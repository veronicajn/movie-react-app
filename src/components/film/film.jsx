import React from "react";

import "./film.scss";

const Film = (props) => {
  return (
    <section className="film">
      <div className="film__portrait">
        <img
          src="https://static.posters.cz/image/750/poster/thor-ragnarok-one-sheet-i50061.jpg"
          className="card__image"
          alt=""
        />
      </div>
      <div className="film__info">
        <p clasName="film__title">{props.film.Title}</p>
      </div>
    </section>
  );
};

export default Film;
