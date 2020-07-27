import React from "react";

import "./button.scss";

const Button = (props) => {
  return <button className="button header__button">{props.name}</button>;
};

export default Button;
