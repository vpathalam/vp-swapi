import React from "react";
import RenderMultiple from "../Cell/RenderMultiple";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const Vehicles = () => (
  <RenderMultiple
    name="Vehicles"
    curr="https://swapi.co/api/vehicles/"
    renderCard={vehicle => (
      <Card
        border={"warning"}
        style={{ width: "18rem" }}
        key={vehicle.url}
        bg={"dark"}
        text={"black"}
      >
        <Card.Body>
          <Card.Title>{vehicle.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
              {" "}
              Model: {vehicle.model}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              {" "}
              Manufacturer: {vehicle.manufacturer}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              {" "}
              Cost in Credits: {vehicle.cost_in_credits}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
            <Link to={`info/${vehicle.url.match(/\/api\/(.*)/)[1]}`}>
              {" "}
              Read More{" "}
            </Link>
        </Card.Footer>
      </Card>
    )}
  />
);

export default Vehicles;

Vehicles.propTypes = {
  name: propTypes.string,
  curr: propTypes.string,
};
