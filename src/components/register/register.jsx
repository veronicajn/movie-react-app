import React, { useState } from "react";
import { A } from "hookrouter";

import "./register.scss";

const Register = (props) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [errors, setErrors] = useState([]);

  // Obtenemos el nombre del usuario insertado en el formulario
  const onUserChange = (event) => {
    setUser(event.target.value);
  };

  // Obtenemos el email del usuario insertado en el formulario
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Obtenemos la contraseña del usuario insertado en el formulario
  const onPwdChange = (event) => {
    setPwd(event.target.value);
  };

  // Obtenemos la confirmación de la contraseña del usuario insertado en el formulario
  const onConfirmPwd = (event) => {
    setConfirmPwd(event.target.value);
  };

  const onSubmit = () => {
    // Creamos un array vacio donde se mostrarán los posibles errores del formulario
    const errorList = [];

    // Si el campo pwd no es igual al campo repeatPwd añadimos el error al array
    if (pwd !== confirmPwd) {
      errorList.push("Las contraseñas no son iguales");
    }

    if (pwd === "" && confirmPwd === "") {
      errorList.push("Las contraseña es obligatoria");
    }

    // Si el campo email no incluye el '@' añadimos el error al array
    if (!email.includes("@")) {
      errorList.push("El email no tiene un formato válido");
    }

    setErrors(errorList);

    // Si no existen errores en el formulario creamos un objeto USUARIO con sus datos
    if (errorList.length === 0) {
      let newUser = {
        name: user,
        email: email,
        pwd: pwd,
        watchList: [],
      };

      // Si no existe el array de usuarios en el LOCALSTORAGE la creamos
      if (localStorage.users === undefined) {
        // Inicializamos el array vacio
        localStorage.users = JSON.stringify([]);
      }

      // Obtenemos el array de usuarios del localStorage que hemos creado en el paso anterior
      let users = JSON.parse(localStorage.users);

      // Añadimos el usuario quehemos registrado en el formulario dentro del array de usuarios
      users.push(newUser);

      // Guardamos la nueva array de users con el nuevo usuario en su interior en localStorage
      localStorage.users = JSON.stringify(users);
    }
  };

  // Recorremos la variable de estado ERROR que contiene el array de errores, y por cada error crear un LI con el error en su interior
  let errorsItem = errors.map((error) => (
    <li className="error__item">{error}</li>
  ));

  return (
    <main className="register__container">
      <form className="register__form">
        <label className="register__label" htmlFor="username">
          Username
        </label>
        <input
          className="register__input"
          type="text"
          id="username"
          placeholder="Insert your username"
          onChange={onUserChange}
        />
        <label className="register__label" htmlFor="email">
          Email
        </label>
        <input
          className="register__input"
          type="text"
          id="email"
          placeholder="Insert your email"
          onChange={onEmailChange}
        />
        <label className="register__label" htmlFor="password">
          Password
        </label>
        <input
          className="register__input"
          type="password"
          id="password"
          placeholder="Insert your password"
          onChange={onPwdChange}
        />
        <label className="register__label" htmlFor="repeatPassword">
          Repeat Password
        </label>
        <input
          className="register__input"
          type="password"
          id="repeatPassword"
          placeholder="Insert your password again"
          onChange={onConfirmPwd}
        />
        <button className="register__button button" onClick={onSubmit}>
          Register
        </button>
      </form>
      <div className="register__error-list">{errorsItem}</div>
      <div className="register__bottom">
        {" "}
        Have you got account?{" "}
        <A className="register__bottom__link" href="/login">
          Login
        </A>
      </div>
    </main>
  );
};

export default Register;
