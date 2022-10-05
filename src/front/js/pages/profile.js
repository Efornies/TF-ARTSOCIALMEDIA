import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faKiwiBird } from "@fortawesome/free-solid-svg-icons";
import background from "../../img/background_image.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  return (
    <div ClassName="containerprofile">
      <Row style={{ width: "100%", paddingLeft: "2%", paddingTop: "10px" }}>
        <Col xs={2}>
          <div className="profilecard">
            <img
              src="https://img.icons8.com/ios/452/kiwi-bird.png"
              alt="Kiwi Bird Drawing"
              width="60%"
            />
            <h1>New</h1>
            <p className="titleprofile">Digital artist </p>
            <p>30 drawings / 20 folowers</p>
            <p>
              <button>Edit</button>
            </p>
          </div>
        </Col>

        <Col xs={10}>
          <div className="covercard">
            <img src={background} width="100%" />
          </div>
        </Col>
      </Row>

      <Row style={{ width: "100%", paddingLeft: "2%", paddingTop: "10px" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </Row>
    </div>
  );
};
