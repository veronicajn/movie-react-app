import React, { useState, useEffect } from "react";
import { useRoutes, A } from "hookrouter";

import Logo from "./components/logo/logo";
import Button from "./components/button/button";
import FilmList from "./components/filmList/filmList";
import Login from "./components/login/login";
import Register from "./components/register/register";
import WatchList from "./components/watchList/watchList";
import Profile from "./components/profile/profile";
import Film from "./components/film/film";

import "./App.scss";

function App(props) {
  const [user, setUser] = useState(sessionStorage.activeUser);

  const [films, setFilms] = useState([]);

  useEffect(() => {
    let apiUrl =
      "https://raw.githubusercontent.com/d-antesque/resources/master/films.json";

    fetch(apiUrl).then((response) => {
      response.json().then((data) => {
        setFilms(data);
      });
    });
  }, []);

  const routes = {
    "/": () => <FilmList films={films} />,
    "/login": () => <Login setUser={setUser} />,
    "/register": () => <Register />,
    "/watchlist": () => <WatchList />,
    "/movies/:id": ({ id }) => {
      let film = films.find((film) => film.Rank === id);
      return <Film film={film} />;
    },
  };

  const match = useRoutes(routes);

  return (
    <div className="app">
      <aside className="aside">
        <header className="header">
          <A href="/">
            <Logo />
          </A>
        </header>
        <nav className="nav">
          {user && (
            <ul className="nav__list">
              <li className="nav__item">
                <A className="nav__link" href="/">
                  Home
                </A>
              </li>
              <li className="nav__item">
                <A className="nav__link" href="/watchlist">
                  My Watchlist
                </A>
              </li>
            </ul>
          )}
        </nav>
        <footer>
          {user && <Profile user={user} />}

          {!user && (
            <A href="/login">
              <Button name="Login" />
            </A>
          )}
        </footer>
      </aside>
      {match}
    </div>
  );
}

export default App;
