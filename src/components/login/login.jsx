import React, { useState } from "react";
import { A, navigate } from "hookrouter";

import "./login.scss";

const Login = (props) => {
  const [user, setUser] = useState();
  const [pwd, setPwd] = useState();

  const onUserChange = (event) => {
    setUser(event.target.value);
  };

  const onPwdChange = (event) => {
    setPwd(event.target.value);
  };

  const onLogin = (event) => {
    let users = JSON.parse(localStorage.users);

    let validUser = users.filter((u) => u.name === user && u.pwd === pwd);

    if (validUser.length >= 1) {
      props.setUser(user);
      navigate("/");

      sessionStorage.activeUser = user;
    } else {
      alert("El usuario o la contraseña son erroneos");
    }
  };

  return (
    <main className="login__container">
      <form className="login__form">
        <label className="login__label" htmlFor="login__name">
          Name
        </label>
        <input
          className="login__input"
          type="text"
          id="login__name"
          placeholder="Insert your name"
          onChange={onUserChange}
        />
        <label className="login__label" htmlFor="login__pwd">
          Password
        </label>
        <input
          className="login__input"
          type="password"
          id="login__pwd"
          placeholder="Insert your password"
          onChange={onPwdChange}
        />
        <button className="login__button button" onClick={onLogin}>
          Login
        </button>
      </form>
      <p className="login__bottom">
        No tienes cuenta?{" "}
        <A className="login__bottom__link" href="/register">
          Registrate
        </A>
      </p>
    </main>
  );
};

export default Login;
