import React from "react";

import "./logo.scss";

const Logo = () => {
  return (
    <a href="/" className="logo header__logo">
      <span className="logo__title">reactfilms</span>
      <span className="logo__subtitle">because netflix sucks.</span>
    </a>
  );
};

export default Logo;
