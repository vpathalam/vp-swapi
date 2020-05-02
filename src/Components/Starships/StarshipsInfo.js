import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import getUrl from "../../Utils/swapiRequests.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Cell from "../Cell";
import propTypes from 'prop-types';


class StarshipsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      url: `https://swapi.dev/api/starships/${props.match.params.id}/`,
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
                  Model: {this.state.information.model}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Manufacturer: {this.state.information.manufacturer}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Hyperdrive Rating: {this.state.information.hyperdrive_rating}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Cost in Credits: {this.state.information.cost_in_credits}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Length: {this.state.information.length}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Max Atmosphere Speed: {this.state.information.max_atmosphering_speed}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Crew: {this.state.information.crew}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Passengers: {this.state.information.passengers}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Cargo Capacity: {this.state.information.cargo_capacity}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Consumables: {this.state.information.consumables}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  MGLT: {this.state.information.MGLT}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Starship Class: {this.state.information.starship_class}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Pilots: {this.state.information.pilots != null &&
                      this.state.information.pilots.map((el, i) => (
                        <Cell url={el} key={i} />
                      ))}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Films: {this.state.information.films != null &&
                      this.state.information.films.map((el, i) => (
                        <Cell url={el} key={i} />
                      ))}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer className="text-muted">
            <Link to="/starships">
              <Button
                className="back"
                variant="outline-warning"
                size="lg">
                BACK TO CATEGORY
              </Button>
            </Link> {'            '}
            <Link to="/">
              <Button
                className="home"
                variant="outline-warning"
                size="lg">
                HOME
              </Button>
            </Link>
            </Card.Footer>
          </Card>
        </Jumbotron>
    );
  }
}

export default StarshipsInfo;

StarshipsInfo.propTypes = {
  information: propTypes.object,
  id: propTypes.string,
  url: propTypes.string
};
