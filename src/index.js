import React from 'react';
import ReactDOM from 'react-dom/client';
import './criptos.css';
import App from './App';
import { data_bank } from './redux/data_store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={data_bank}>
    <App />
  </Provider>
);




