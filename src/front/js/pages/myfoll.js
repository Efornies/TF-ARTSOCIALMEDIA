import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import HoverImage from "react-hover-image";
import background from "../../img/background_image.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Cardfollow} from "../component/cardfollow";
import { useNavigate } from "react-router-dom";

export const Myfoll = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    {
       navigate("/");
     }
   };
 

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
            <p>3 drawings / 20 followers</p>

            <button type="button" onClick={handleShow}>
              Edit
            </button>
            <button style= {{backgroundColor: "white", color: "black"}} type="button" onClick={() => {
                      logout();
                    }} >
              Logout
            </button>
            <Modal className="modalprofile" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="textarea" placeholder="Name" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Wall Image</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  style={{ backgroundColor: "burlywood", border: "none" }}
                  className="button"
                  onClick={handleClose}
                >
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

      {/*MY FOLL ACTIVE*/}
      <Row
        style={{ paddingLeft: "2%", paddingTop: "20px", paddingRight: "2%" }}
      >
        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-link "
                href="../component/myart"
                style={{ color: "burlywood" }}
              >
                My Art
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/myfavs"
                class="nav-link "
                style={{ color: "burlywood" }}
                href="#"
              >
                My Favs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/myfoll" href="#">
                My Kiwis
              </Link>
            </li>
          </ul>
        </div>
      </Row>
      <Cardfollow/>
    </div>
  );
};
