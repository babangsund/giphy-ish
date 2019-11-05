import React from 'react';
import { render } from 'react-dom';

// project
import App from './App';
import Providers from './providers/Providers';
import * as serviceWorker from './serviceWorker';

const root: HTMLElement | null = document.getElementById('root');
const element = (
  <Providers>
    <App />
  </Providers>
);

if (root) {
  render(element, root);
}

serviceWorker.register();
