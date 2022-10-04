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
    <Container >
      <Row>
        <Col xs={2}>
          <div className="profilecard">
            <img
              src="https://img.icons8.com/ios/452/kiwi-bird.png"
              alt="Kiwi Bird Drawing"
              width="100%"
            />
            <h1>Elena Fornies</h1>
            <p className="title">Digital artist </p>
            <p>30 drawings / 20 folowers</p>
            <p>
              <button>Contact</button>
            </p>
          </div>
        </Col>

        <Col xs={10}>
          <div className="covercard">
            <img src={background} width="100%" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
