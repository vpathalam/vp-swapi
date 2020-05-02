import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import getUrl from "../../Utils/swapiRequests.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Cell from "../Cell";
import propTypes from 'prop-types';


class PlanetsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      url: `https://swapi.dev/api/planets/${props.match.params.id}/`,
      information: {}
    };
  }

  componentDidMount() {
    return getUrl(this.state.url).then(response => {
      this.setState({ information: response });
    });
  }

  render() {
    return (
      <Jumbotron>
        <Card border={"warning"} bg={"dark"} text={"black"}>
          <Card.Body>
            <Card.Title>{this.state.information.name}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item variant="dark">
                {" "}
                Climate: {this.state.information.climate}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Terrain: {this.state.information.terrain}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Rotation Period: {this.state.information.rotation_period}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Orbital Period: {this.state.information.orbital_period}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Diameter: {this.state.information.diameter}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Gravity: {this.state.information.gravity}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Surface Water: {this.state.information.surface_water}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Population: {this.state.information.population}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Residents:{" "}
                {this.state.information.residents != null &&
                  this.state.information.residents.map((el, i) => (
                    <Cell url={el} key={i} />
                  ))}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Films:{" "}
                {this.state.information.films != null &&
                  this.state.information.films.map((el, i) => (
                    <Cell url={el} key={i} />
                  ))}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Link to="/planets">
              <Button className="back" variant="outline-warning" size="lg">
              BACK TO CATEGORY
              </Button>
            </Link>{" "}
            {"            "}
            <Link to="/">
              <Button className="home" variant="outline-warning" size="lg">
                HOME
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Jumbotron>
    );
  }
}

export default PlanetsInfo;

PlanetsInfo.propTypes = {
  information: propTypes.object,
  id: propTypes.string,
  url: propTypes.string
};
