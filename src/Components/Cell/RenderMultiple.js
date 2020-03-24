import React, { Component } from "react";
import Loader from "../../Utils/Loader.js";
import CardColumns from "react-bootstrap/CardColumns";
import getUrl from "../../Utils/swapiRequests.js";
import propTypes from "prop-types";

class RenderMultiple extends Component {
  _isMounted = false;

  state = {
    curr: null,
    information: null
  };

reponseHandler = async url => {

  if (url) {
    getUrl(url)
      .then(({ results }) => {
        if(this._isMounted) {
          this.setState({
            information: results
          });
        }
      })
      .catch(err => {
        throw Error("Error occurred!");
      });
  }
  return;
};


  componentDidMount() {
    this._isMounted = true;
    this.reponseHandler(this.props.curr);
  }

  componentDidUpdate() {
    this._isMounted = true;
    this.reponseHandler(this.props.curr);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return this.state.information ? (
      <>
        <h2 style={{ color: "white" }}>{this.props.name}</h2>
        <CardColumns>{this.state.information.map(this.props.renderCard)}</CardColumns>
      </>
    ) : (
      <Loader />
    );
  }
}

export default RenderMultiple;

RenderMultiple.propTypes = {
  curr: propTypes.string,
  information: propTypes.object,
};
