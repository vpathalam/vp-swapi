import React from "react";
import RenderMultiple from "../Cell/RenderMultiple";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import propTypes from 'prop-types';


const Species = () => (
  <RenderMultiple
    name="Species"
    curr="https://swapi.co/api/species/"
    renderCard={species => (
      <Card
        border={"warning"}
        style={{ width: "18rem" }}
        key={species.url}
        bg={"dark"}
        text={"black"}
      >
        <Card.Body>
          <Card.Title>{species.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
              {" "}
              Classification: {species.classification}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Designation: {species.designation}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Language: {species.language}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
            <Link to={`info/${species.url.match(/\/api\/(.*)/)[1]}`}>
              {" "}
              Read More{" "}
            </Link>
        </Card.Footer>
      </Card>
    )}
  />
);

export default Species;

Species.propTypes = {
  name: propTypes.string,
  curr: propTypes.string,
};
