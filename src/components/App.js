import React, { Fragment } from 'react';
import { Consumer } from '../Provider';

const App = () => (
  <Consumer>
    {({ name, toggleLastName }) => (
      <Fragment>
        <h1>{name}</h1>
        <button onClick={toggleLastName}>
          { name === 'Lucas' ? 'Show Last Name' : 'Hide Last Name' }
        </button>
      </Fragment>
    )}
  </Consumer>
);

export default App;
