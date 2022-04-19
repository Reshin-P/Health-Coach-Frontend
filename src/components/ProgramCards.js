import React from "react";

import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Cards = ({ product }) => {
  return (

    <Card className=" mx-auto border_gradient px-auto my-3  shadow" style={{ minWidth: "50%" , maxWidth:"80%" }}>
       <LinkContainer to={'/viewprograms'}>
        <Card.Img width="100%" height="500" src={product.image} />
     </LinkContainer> 
    <Card.Title className="text-center mt-3 text-danger">{product.programname}</Card.Title>
    </Card >

  );
};

export default Cards;
