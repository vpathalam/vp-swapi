import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import getUrl from "../../Utils/swapiRequests.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Cell from "../Cell";
import propTypes from 'prop-types';

class PeopleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      url: `https://swapi.dev/api/people/${props.match.params.id}/`,
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
                Height: {this.state.information.height}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Mass: {this.state.information.mass}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Hair Color: {this.state.information.hair_color}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Eye Color: {this.state.information.eye_color}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Skin Color: {this.state.information.skin_color}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Birth Year: {this.state.information.birth_year}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Gender: {this.state.information.gender}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Homeworld:{" "}
                {this.state.information.homeworld != null && (
                  <Cell url={this.state.information.homeworld} />
                )}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Species:{" "}
                {this.state.information.species != null &&
                  this.state.information.species.map((el, i) => (
                    <Cell url={el} key={i} />
                  ))}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Vehicles:{" "}
                {this.state.information.vehicles != null &&
                  this.state.information.vehicles.map((el, i) => (
                    <Cell url={el} key={i} />
                  ))}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Starships:{" "}
                {this.state.information.starships != null &&
                  this.state.information.starships.map((el, i) => (
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
            <Link to="/people">
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

export default PeopleInfo;

PeopleInfo.propTypes = {
  information: propTypes.object,
  id: propTypes.string,
  url: propTypes.string
};
