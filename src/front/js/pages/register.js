import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";

export const Register = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="parent h-100">
      <div className="back "> </div>
      <div className="art">
        <div className="welcomebox">
          <div className="loginform">
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign up tu Artcop</h3>
                  <div className="form-group mt-3">
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
                      Submit
                    </button>
                  </div>
                  <p className="forgot-password text-right mt-2">
                    Agree <a href="#">copyright issues</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
