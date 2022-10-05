import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faKiwiBird } from "@fortawesome/free-solid-svg-icons";


export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="parent h-100">
      <div className="back "> </div>
      <div className="art">
        <div className="welcomebox">
        <div className="titulohome">
            <FontAwesomeIcon icon={faKiwiBird} size="6x" inverse pull="left" />
          </div>
            <div className="Auth-form-container mt-0">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In</h3>
                  <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  <p className="forgot-password text-right mt-2">
                    New artist? <Link to="/register"> Register now! </Link>
                  </p>
                </div>
              </form>
            </div>
          
        </div>
      </div>
    </div>
  );
};
