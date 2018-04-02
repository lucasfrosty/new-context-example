import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './Provider';
import App from './components/App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector('#root')
);
