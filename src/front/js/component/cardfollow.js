import React, { useContext, useState } from "react";
import "../../styles/cardfollow.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cardfollow = () => {
  return (
    <div className="CardsFollow">
      <Card style={{ width: '10rem'}}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
      <Card.Body>
        
        <Button style={{backgroundColor: "burlywood", border: "none"}}>User </Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
      <Card.Body>
        
        <Button  style={{backgroundColor: "burlywood", border: "none"}} >User 2</Button>
      </Card.Body>
    </Card>
    </div>
  );
};
