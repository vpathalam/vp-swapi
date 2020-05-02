import React, { Component } from "react";
import Loader from "../Utils/Loader";
import "./App.scss";

import getUrl from "../Utils/swapiRequests.js";
import propTypes from "prop-types";
import Header from "../Utils/header_img.png";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import People from "../Components/People";
import Starships from "../Components/Starships";
import Vehicles from "../Components/Vehicles";
import Species from "../Components/Species";
import Films from "../Components/Films";
import Planets from "../Components/Planets";
import Invalid from "../Components/Invalid";

import SpeciesInfo from "../Components/Species/SpeciesInfo.js";
import PlanetsInfo from "../Components/Planets/PlanetsInfo.js";
import StarshipsInfo from "../Components/Starships/StarshipsInfo.js";
import VehiclesInfo from "../Components/Vehicles/VehiclesInfo.js";
import PeopleInfo from "../Components/People/PeopleInfo.js";
import FilmsInfo from "../Components/Films/FilmsInfo.js";
import HomeScreen from "../Components/Cell/HomeScreen.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movie: {}
    };
  }

  componentDidMount() {
    const movieUrl = "https://swapi.dev/api/films/";
    return getUrl(movieUrl)
      .then(data => data.results.sort(() => 0.5 - Math.random()).pop())
      .then(movie => this.setState({ movie }))
      .then(() => this.setState({ isLoading: false }))
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">
          <img src={Header} alt="head" />
        </h1>

        <BrowserRouter>
          <div>
            <nav>
              <Link to="/people">
                <Button className="people" variant="outline-warning" size="lg">
                  PEOPLE
                </Button>
              </Link>
              <Link to="/species">
                <Button className="species" variant="outline-warning" size="lg">
                  SPECIES
                </Button>
              </Link>
              <Link to="/planets">
                <Button className="planets" variant="outline-warning" size="lg">
                  PLANETS
                </Button>
              </Link>
              <Link to="/vehicles">
                <Button
                  className="vehicles"
                  variant="outline-warning"
                  size="lg"
                >
                  VEHICLES
                </Button>
              </Link>
              <Link to="/starships">
                <Button
                  className="starships"
                  variant="outline-warning"
                  size="lg"
                >
                  STARSHIPS
                </Button>
              </Link>
              <Link to="/films">
                <Button className="films" variant="outline-warning" size="lg">
                  FILMS
                </Button>
              </Link>
            </nav>
          </div>
          <div>
            {this.state.isLoading === true ? (
              <Loader />
            ) : (
              <Switch>
                <Route exact path="/" component={HomeScreen} />

                <Route path="/starships" component={Starships} />
                <Route path="/people" component={People} />
                <Route path="/planets" component={Planets} />
                <Route path="/films" component={Films} />
                <Route path="/species" component={Species} />
                <Route path="/vehicles" component={Vehicles} />

                <Route path="/info/people/:id?" component={PeopleInfo} />
                <Route path="/info/planets/:id?" component={PlanetsInfo} />
                <Route path="/info/starships/:id?" component={StarshipsInfo} />
                <Route path="/info/films/:id?" component={FilmsInfo} />
                <Route path="/info/species/:id?" component={SpeciesInfo} />
                <Route path="/info/vehicles/:id?" component={VehiclesInfo} />

                <Route path="*" component={Invalid} />
              </Switch>
            )}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  isLoading: propTypes.bool,
  movie: propTypes.object,
};

export default App;
