import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from 'react-bootstrap/Carousel';
import background from "../../img/background_image.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { myart } from "../component/myart";
import { myfavs } from "../component/myfavs";
import { myfollowers } from "../component/myfollowers";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

            <button type="button" onClick={handleShow}>
              Edit
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Looking for another look?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
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
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="../component/myart">
              My Art
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link" style={{ color: "burlywood" }} href="#">
              My Favs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "burlywood" }} href="#">
              My Kiwis
            </a>
          </li>
        </ul>
      </Row>
      <Carousel className="ArtPerfil">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://prod-upp-image-read.ft.com/e9a0d7ee-a1be-11e8-85da-eeb7a9ce36e4"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Another World</h3>
          <p>Digital art using PS </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ab723877268563.5c829061bd6ea.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/9b/a5/a2/9ba5a220b73eb7cf1eabcbedf3101fe9.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};
