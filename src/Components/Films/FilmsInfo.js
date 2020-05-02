import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import getUrl from "../../Utils/swapiRequests.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Cell from "../Cell";
import propTypes from "prop-types";

class FilmsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      url: `https://swapi.dev/api/films/${props.match.params.id}/`,
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
            <Card.Title>{this.state.information.title}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item variant="dark">
                {" "}
                Episode ID: {this.state.information.episode_id}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Opening Crawl: {this.state.information.opening_crawl}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Director: {this.state.information.director}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Producer: {this.state.information.producer}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Release Date: {this.state.information.release_date}
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
                Planets:{" "}
                {this.state.information.planets != null &&
                  this.state.information.planets.map((el, i) => (
                    <Cell url={el} key={i} />
                  ))}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Characters:{" "}
                {this.state.information.characters != null &&
                  this.state.information.characters.map((el, i) => (
                    <Cell url={el} key={i} />
                  ))}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Link to="/films">
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

export default FilmsInfo;

FilmsInfo.propTypes = {
  information: propTypes.object,
  id: propTypes.string,
  url: propTypes.string
};
