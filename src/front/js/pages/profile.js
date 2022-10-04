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
      <div className="covercard" >
        
        
        <div className="profilecard">
          <img
            src="https://img.icons8.com/ios/452/kiwi-bird.png"
            alt="Kiwi Bird Drawing"
            width={200}
          />
          <h1>Elena Fornies</h1>
          <p className="title">Digital artist </p>
          <p>30 drawings / 20 folowers</p>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
    </div>
  );
};
