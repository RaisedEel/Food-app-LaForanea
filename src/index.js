import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import Layout from './components/layout/Layout';
import store from './context/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>
);
