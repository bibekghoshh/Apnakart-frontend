import React from 'react';
import ReactDOM from 'react-dom/client'; //remove client
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
