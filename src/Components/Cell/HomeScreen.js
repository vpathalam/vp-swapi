import React from "react";
import IntroSequence from "react-star-wars-crawl";
import "react-star-wars-crawl/lib/index.css";

const Home = () => (
  <>
    <IntroSequence
      title={"Welcome to the Star Wars Information Application"}
      text={
        "To begin, select an option on the sidebar to learn more information about different categories: People, Species," +
        " Planets, Vehicles, Starships, and Films in the Star Wars universe. All information is retrieved from the Star Wars API swapi.co. Please " +
        "refer to the README for more information about technologies and usage. Enjoy!"
      }
    />
  </>
);

export default Home;
