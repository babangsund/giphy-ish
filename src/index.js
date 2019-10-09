// @flow
import React from 'react';
import { render } from 'react-dom';

// project
import App from './App';
import * as serviceWorker from './serviceWorker';

const root: ?HTMLElement = document.getElementById('root');
const element = <App />;

if (root) {
  render(element, root);
}

serviceWorker.register();
