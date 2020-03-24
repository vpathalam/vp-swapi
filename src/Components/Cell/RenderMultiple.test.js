import React from 'react';
import ReactDOM from 'react-dom';
import RenderMultiple from './RenderMultiple.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RenderMultiple />, div);
  ReactDOM.unmountComponentAtNode(div);
});