import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from "./nav/Navbar"
import Fotter from "./Footer/Fotter"


ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <App />
    <Fotter/>
  </React.StrictMode>,
  document.getElementById('root')
);


