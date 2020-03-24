import React from 'react';
import ReactDOM from 'react-dom';
import VehiclesInfo from './VehiclesInfo.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VehiclesInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});