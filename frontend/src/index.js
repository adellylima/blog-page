import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './HomePage/index';
import Header from './Header/index';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
