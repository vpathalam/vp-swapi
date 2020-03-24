import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

const Invalid = () => (
  <Jumbotron>
    <Card>
      <Card.Title as="h2" style={{ color: "red" }}>
        ERROR 404: This Page Was Not Found. Please Try Again.
      </Card.Title>
    </Card>
  </Jumbotron>
);

export default Invalid;
