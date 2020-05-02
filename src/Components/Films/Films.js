import React from "react";
import RenderMultiple from "../Cell/RenderMultiple";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Films = () => (
  <RenderMultiple
    name="Films"
    curr="https://swapi.dev/api/films/"
    renderCard={film => (
      <Card
        border={"warning"}
        style={{ width: "18rem" }}
        key={film.url}
        bg={"dark"}
        text={"black"}
      >
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
              {" "}
              Episode ID: {film.episode_id}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              {" "}
              Director: {film.director}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              {" "}
              Release Date: {film.release_date}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
            <Link to={`info/${film.url.match(/\/api\/(.*)/)[1]}`}>
              {" "}
              Read More{" "}
            </Link>
        </Card.Footer>
      </Card>
    )}
  />
);

export default Films;

Films.propTypes = {
  name: propTypes.string,
  curr: propTypes.string,
};
