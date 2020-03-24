import React from 'react';
import ReactDOM from 'react-dom';
import FilmsInfo from './FilmsInfo.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilmsInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});