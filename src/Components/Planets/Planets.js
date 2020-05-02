import React from 'react';
import RenderMultiple from '../Cell/RenderMultiple';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Planets = () => (
  <RenderMultiple
    name="Planets"
    curr="https://swapi.dev/api/planets/"
    renderCard={planet => (
      <Card border={"warning"} style={{ width: '18rem' }} key={planet.url} bg={'dark'} text={'black'}>
        <Card.Body>
          <Card.Title>{planet.name}</Card.Title>
          <ListGroup variant="flush">
              <ListGroup.Item variant="dark"> Climate: {planet.climate}</ListGroup.Item>
              <ListGroup.Item variant="dark"> Terrain: {planet.terrain}</ListGroup.Item>
              <ListGroup.Item variant="dark"> Population: {planet.population}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
            <Link to={`info/${planet.url.match(/\/api\/(.*)/)[1]}`}> Read More </Link>
        </Card.Footer>
      </Card>
    )}
  />
);

export default Planets;

Planets.propTypes = {
  name: propTypes.string,
  curr: propTypes.string,
};
