import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faKiwiBird } from "@fortawesome/free-solid-svg-icons";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [infoError, setInfoError] = useState(false);
  const [infoError2, setInfoError2] = useState(false);

  //REGISTER

  const sendUserInfo = async () => {
    if (
      onlyLettersAndNumbers(user.username) &&
      user.username != "" &&
      emailIsValid(user.email) &&
      emailInput(user.email) &&
      user.email != "" &&
      user.password != ""
    ) {
      const response = await fetch(store.url + "api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (data.created) {
        initialState(); //state = ""
      } else {
        alert("error");
      }
    } else {
      messageError();
    }
  };

  //INPUT FUNCTIONS

  const onlyLettersAndNumbers = (element) => {
    return /^[A-Ñ-Za-ñ-z0-9]*$/.test(element);
  };

  const emailInput = (element) => {
    return /^[A-Ñ-Za-ñ-z0-9@.]*$/.test(element);
  };

  const emailIsValid = (email) => {
    //validates that the input is an email address
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const messageError = () => {
    setInfoError(true);
  };

  const messageError2 = () => {
    setInfoError2(true);
  };

  const initialState = () => {
    //set states to ""
    user.username = "";
    user.email = "";
    user.password = "";
    user.firstname = "";
    user.lastname = "";
  };

  return (
    <div className="parent h-100">
      <div className="back "> </div>
      <div className="art">
        <div className="welcomeboxregister">
          <div className="tituloregister">
            <FontAwesomeIcon icon={faKiwiBird} size="6x" inverse pull="left" />
          </div>
          <div className="Auth-form-container mt-0">
            <div className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign up to Kiwi</h3>
                <div className="form-group mt-0">
                  <label>Name</label>
                  <input
                    type="name"
                    className="form-control mt-1"
                    placeholder="Full name"
                    style={
                      user.username == "" ||
                      !onlyLettersAndNumbers(user.username)
                        ? {}
                        : null
                    }
                    onChange={(e) =>
                      setUser(
                        {
                          ...user,
                          username: e.target.value.trim(),
                        },
                        setInfoError(false)
                      )
                    }
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    style={
                      user.email == "" ||
                      !emailIsValid(user.email) ||
                      !emailInput(user.email)
                        ? {}
                        : null
                    }
                    onChange={(e) =>
                      setUser(
                        { ...user, email: e.target.value.trim() },
                        setInfoError(false)
                      )
                    }
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Create a password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    style={
                      user.password == ""
                        ? {
                            borderStyle: "solid",
                            borderWidth: "3px",
                            borderColor: "#DB2C2C",
                          }
                        : null
                    }
                    onChange={(e) =>
                      setUser(
                        { ...user, password: e.target.value.trim() },
                        setInfoError(false)
                      )
                    }
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button
                    type="submit"
                    style={{ backgroundColor: "burlywood" }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        e.stopPropagation();
                        sendUserInfo();
                      }
                    }}
                    onClick={() => {
                      sendUserInfo();
                    }}
                  >
                    Create Account
                  </button>
                  {infoError == true ? (
                    <div className="error-register">
                      <i className="icon-error2 fas fa-exclamation-circle"></i>
                      <p>Please write the fields correctly.</p>
                    </div>
                  ) : (
                    <div className="before-register"></div>
                  )}
                </div>
                <p className="forgot-password text-right mt-3">
                  <input type="checkbox" /> I Agree to Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
