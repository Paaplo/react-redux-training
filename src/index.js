import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import {STATE_NAME} from './config.js';

const persistedState = localStorage.getItem(STATE_NAME) ? JSON.parse(localStorage.getItem(STATE_NAME)) : {}

const store = configureStore(persistedState);

import App from './App';
import './index.css';

const render = (Component) => {
	ReactDOM.render(
	  <Provider store={store}>
	      <App />
	  </Provider>,
	  document.getElementById('root')
	);
};

render(App);



if (module.hot) {
  module.hot.accept('./App', () => {
    var NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    );
  });
}
