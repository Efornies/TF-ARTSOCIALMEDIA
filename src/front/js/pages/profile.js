import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faKiwiBird } from "@fortawesome/free-solid-svg-icons";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="profilecard">
        <img
          src="https://www.pbs.org/wnet/nature/files/2015/11/636x460design_01-610x441.jpg"
          alt="John"
          style={{ width: "100%" }}
        />
        <h1>Elena Fornies</h1>
        <p className="title">CEO &amp; Founder, Example</p>
        <p>Harvard University</p>

        <p>
          <button>Contact</button>
        </p>
      </div>
    </div>
  );
};
