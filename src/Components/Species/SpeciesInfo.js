import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import getUrl from "../../Utils/swapiRequests.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Cell from "../Cell";
import propTypes from 'prop-types';


class SpeciesInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      url: `https://swapi.dev/api/species/${props.match.params.id}/`,
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
                Classification: {this.state.information.classification}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Designation: {this.state.information.designation}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Average Height: {this.state.information.average_height}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Skin Colors: {this.state.information.skin_colors}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Hair Colors: {this.state.information.hair_colors}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Eye Colors: {this.state.information.eye_colors}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Average Lifespan: {this.state.information.average_lifespan}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Homeworld:{" "}
                {this.state.information.homeworld != null && (
                    <Cell url={this.state.information.homeworld} />
                  )}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Language: {this.state.information.language}
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
            <Link to="/species">
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

export default SpeciesInfo;

SpeciesInfo.propTypes = {
  information: propTypes.object,
  id: propTypes.string,
  url: propTypes.string
};
