import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faKiwiBird } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [infoError, setInfoError] = useState(false);
  const [infoError2, setInfoError2] = useState(false);
  const { store, actions } = useContext(Context);

  const login = () => {
    actions.loginUser(user);
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  };

  return (
    <div className="parent h-100">
      <div className="back "> </div>
      <div className="art">
        <div className="welcomebox">
          <div className="titulohome">
            <FontAwesomeIcon icon={faKiwiBird} size="6x" inverse pull="left" />
          </div>
          <div className="Auth-form-container mt-0">
            <div className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value.trim() }),
                        setInfoError2(false);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value.trim() }),
                        setInfoError2(false);
                    }}
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button
                    type="submit"
                    style={{ backgroundColor: "burlywood" }}
                    onClick={() => {
                      login();
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        e.stopPropagation();
                        actions.loginUser(user);
                      }
                    }}
                  >
                    Login
                  </button>
                  {infoError2 == true ? (
                    <div className="error-register">
                      <i className="icon-error2 fas fa-exclamation-circle"></i>
                      <p>Wrong email or password.</p>
                    </div>
                  ) : (
                    <div className="before-register"></div>
                  )}
                </div>
                <p className="forgot-password text-right mt-2">
                  New artist?{" "}
                  <Link
                    to="/register"
                    style={{ color: "burlywood", fontSize: "medium" }}
                  >
                    {" "}
                    Register now!{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
