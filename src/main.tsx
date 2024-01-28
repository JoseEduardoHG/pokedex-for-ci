import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './Layout';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <BrowserRouter>
    <React.StrictMode>
      <Layout>
        <App />
      </Layout>
    </React.StrictMode>
  </BrowserRouter>,
);
