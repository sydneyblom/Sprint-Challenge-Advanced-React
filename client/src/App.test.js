import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';


test('renders without crashing', () => {
  render(<App />);
});


test('Page header', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/card-header/i);
});