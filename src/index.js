import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import { SnackbarProvider } from 'notistack';

import App from './app/App';

require('./app/app.scss');

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));

if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
  window.addEventListener('load', () => (navigator.serviceWorker.addEventListener('/service-worker.js')));
}
