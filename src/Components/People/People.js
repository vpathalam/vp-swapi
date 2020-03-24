import React from 'react';
import RenderMultiple from '../Cell/RenderMultiple';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const People = () => (
  <RenderMultiple
    name="People"
    curr="https://swapi.co/api/people/"
    renderCard={person => (
      <Card border={"warning"} style={{ width: '18rem' }} key={person.url} bg={'dark'} text={'black'}>
        <Card.Body>
          <Card.Title>{person.name}</Card.Title>
          <ListGroup variant="flush">
              <ListGroup.Item variant="dark"> Height: {person.height}</ListGroup.Item>
              <ListGroup.Item variant="dark"> Mass: {person.mass}</ListGroup.Item>
              <ListGroup.Item variant="dark"> Gender: {person.gender}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
            <Link to={`info/${person.url.match(/\/api\/(.*)/)[1]}`}> Read More </Link>
        </Card.Footer>
      </Card>
    )}
  />
);

export default People;

People.propTypes = {
  name: propTypes.string,
  curr: propTypes.string,
};
