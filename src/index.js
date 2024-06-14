import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc, { About1 } from './Myabout';
import Contactjs from './Contactjs';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Mybootstrap from './Mybootstrap';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

 <Abc></Abc>
 <About1></About1>
 <Contactjs></Contactjs>
 <Mybootstrap></Mybootstrap>

  </React.StrictMode>
);
