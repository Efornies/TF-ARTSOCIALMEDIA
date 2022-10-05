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
import { myart } from "../component/myart";
import { myfavs } from "../component/myfavs";
import { myfollowers } from "../component/myfollowers";




export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="containerprofile">
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

      {/*MY ART TIENE QUE SALIR AUTOMÁTICO */}
      <Row
        style={{ paddingLeft: "2%", paddingTop: "20px", paddingRight: "2%" }}
      >
        
      </Row>
    </div>
  );
};
