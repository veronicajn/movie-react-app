import React from "react";
import { GrUser } from "react-icons/gr";
import { IconContext } from "react-icons";

import "./profile.scss";

const Profile = (props) => {
  return (
    <section className="profile">
      <div className="profile__image">
        <IconContext.Provider value={{ className: "profile__icon" }}>
          <GrUser />
        </IconContext.Provider>
      </div>
      <div className="profile__info">
        <p className="profile__name">{props.user}</p>
      </div>
    </section>
  );
};

export default Profile;
