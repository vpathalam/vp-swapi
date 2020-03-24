import React, { Component } from "react";
import getUrl from "../../Utils/swapiRequests.js";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import propTypes from "prop-types";

class Cell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: props.url,
      information: {}
    };
  }

  componentDidMount() {
    getUrl(this.state.url).then(response => {
      this.setState({ information: response });
    });
  }

  render() {
    return (
      <Button variant="dark">
        {this.state.information.title
          ? this.state.information.title
          : this.state.information.name}{" "}
        <Badge variant="light">
          <Link to={`/info/${this.state.url.match(/\/api\/(.*)/)[1]}`}>
            GO TO LINK{" "}
          </Link>{" "}
        </Badge>
      </Button>
    );
  }
}

export default Cell;

Cell.propTypes = {
  url: propTypes.string,
  information: propTypes.object,
};
