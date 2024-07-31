import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';  // Ensure the path to store is correct
import App from './App';

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the app within the Redux Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
