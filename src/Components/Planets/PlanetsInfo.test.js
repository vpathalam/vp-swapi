import React from 'react';
import ReactDOM from 'react-dom';
import PlanetsInfo from './PlanetsInfo.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlanetsInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});