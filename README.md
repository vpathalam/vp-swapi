DOCUMENTATION:

This application was created by Vikram Pathalam using swapi.co to represent information from the Star Wars Universe.

Technologies: React.js (Create-React-App), Axios, Bootstrap, HTML, CSS, Javascript, Docker

Information about:
  React.js: https://reactjs.org/docs/create-a-new-react-app.html , https://www.mindinventory.com/blog/what-makes-developers-choose-react-over-angular/
  Axios: https://www.sitepoint.com/axios-beginner-guide/ , https://blog.logrocket.com/axios-or-fetch-api/
  Bootstrap: https://react-bootstrap.github.io/getting-started/introduction
  HTML/CSS: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started
  Javascript: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
  Docker: https://docs.docker.com/

    Folder File Structure:
    
    src : contains src files for the application
  
    App : contains App.js main file and related scss + crash test

    Components : contains App.js React components, which are Cell, Films, Invalid, People, Planets, Species, Starships, Vehicles
  
    Cell: contains view related items, including HomeScreen, Cell (links to other items from within a Card), RenderMultiple (renders multiple cards within each category) + crash test
  
    Films: contains Film category information. Films.js (renders initial cards within category), FilmsInfo.js (renders nested card information from selection) + crash test
  
    Invalid: contains an invalid page
  
    People: contains People category information. People.js (renders initial cards within category), PeopleInfo.js (renders nested card information from selection) + crash test
  
    Planets: contains Planets category information. Planets.js (renders initial cards within category), PlanetsInfo.js (renders nested card information from selection) + crash test
  
    Species: contains Species category information. Species.js (renders initial cards within category), SpeciesInfo.js (renders nested card information from selection) + crash test

    Starships: contains Starships category information. Starships.js (renders initial cards within category), StarshipsInfo.js (renders nested card information from selection) + crash test

    Vehicles: contains Species category information. Vehicles.js (renders initial cards within category), VehiclesInfo.js (renders nested card information from selection) + crash test

    Utils: contains supplementary files such as Background, Header, Axios request, and Loader files

To build with docker:

    docker build -t react-webapp .
    docker images
    docker run -p 8000:80 react-webapp

Please refer to swapi.co documentation for further information about the retrieved data: https://swapi.co/documentation
This can be started using npm start (npm install -> npm start)
Enjoy!
