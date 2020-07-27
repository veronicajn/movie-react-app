import React from "react";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons";

import "./cardWatchList.scss";

const CardWatchList = (props) => {
  return (
    <article className="card">
      <div className="card__portrait">
        <div className="card__ribbon">
          <span className="card__points">{props.film.rating}/10</span>
        </div>
        <div
          className="card__delete"
          onClick={() => props.deleteFilm(props.film)}
        >
          <IconContext.Provider value={{ className: "card__delete__icon" }}>
            <GrClose />
          </IconContext.Provider>
        </div>
        <img
          src="https://static.posters.cz/image/750/poster/thor-ragnarok-one-sheet-i50061.jpg"
          alt={props.film.name}
          className="card__image"
        />
      </div>
      <div className="card__info">
        <h3 className="card__name">{props.film.name}</h3>
      </div>
    </article>
  );
};

export default CardWatchList;
