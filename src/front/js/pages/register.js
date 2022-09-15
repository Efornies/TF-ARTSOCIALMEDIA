import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faKiwiBird } from "@fortawesome/free-solid-svg-icons";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const element = <FontAwesomeIcon icon={faCoffee} />;

  return (
    <div className="parent h-100">
      <div className="back "> </div>
      <div className="art">
        <div className="welcomeboxregister">
          <div className="titulo">
            <FontAwesomeIcon icon={faKiwiBird} size="6x" inverse pull="left" />
          </div>
          <div className="Auth-form-container">
            <form className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign up tu Artcop</h3>
                <div className="form-group mt-0">
                  <label>Name</label>
                  <input
                    type="name"
                    className="form-control mt-1"
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Create a password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Create Account
                  </button>
                </div>
                <p className="forgot-password text-right mt-3">
                  <input type="checkbox" /> I Agree to Privacy Policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
