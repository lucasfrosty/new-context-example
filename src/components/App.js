import React from 'react';
import { Consumer } from '../Provider';

const App = () => (
  <Consumer>
    {(value) => (
      <h1>{value.name}</h1>
    )}
  </Consumer>
);

export default App;
