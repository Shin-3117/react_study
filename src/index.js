import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layouts/Layout';
import { RouterProvider } from 'react-router-dom';
import rootRouter from './router/router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rootRouter}/>
  </React.StrictMode>
);