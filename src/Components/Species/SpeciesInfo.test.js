import React from 'react';
import ReactDOM from 'react-dom';
import SpeciesInfo from './SpeciesInfo.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SpeciesInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});