import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { APIProvider } from './Context/APIContext';
import './Index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APIProvider>
    <App />
    </APIProvider>
  </React.StrictMode>
);

