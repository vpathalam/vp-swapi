import React from 'react';
import RenderMultiple from '../Cell/RenderMultiple';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';


const Starships = () => (
  <RenderMultiple
    name="Starships"
    curr="https://swapi.co/api/starships/"
    renderCard={starship => (
      <Card border={"warning"} style={{ width: '18rem' }} key={starship.url} bg={'dark'} text={'black'}>
        <Card.Body>
          <Card.Title>{starship.name}</Card.Title>
          <ListGroup variant="flush">
              <ListGroup.Item variant="dark"> Model: {starship.model}</ListGroup.Item>
              <ListGroup.Item variant="dark">Manufacturer: {starship.manufacturer}</ListGroup.Item>
              <ListGroup.Item variant="dark">Hyperdrive Rating: {starship.hyperdrive_rating}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
            <Link to={`info/${starship.url.match(/\/api\/(.*)/)[1]}`}> Read More </Link>
        </Card.Footer>
      </Card>
    )}
  />
);

export default Starships;

Starships.propTypes = {
  name: propTypes.string,
  curr: propTypes.string,
};
