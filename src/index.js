import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Layout from './components/layout/Layout';
import store from './context/store';
import ScrollToTop from './components/layout/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <ScrollToTop />
          <App />
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
