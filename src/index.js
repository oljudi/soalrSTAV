import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider  } from "react-router-dom";

import './index.css';
import { Layout } from './Layout';
import { About } from './components/About';
import { Galery } from './components/Galery'
import { Quotation } from './components/Quotation';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Layout>
        <Galery />
    </Layout>,
  },
  {
    path: "/about",
    element: 
    <Layout>
      <About />
    </Layout>,
  },
  {
    path: "/quotation",
    element: 
    <Layout>
      <Quotation />
    </Layout>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
