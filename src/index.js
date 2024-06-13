import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc, { About1 } from './Myabout';
import Contactjs from './Contactjs';
import "./style.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

 <Abc></Abc>
 <About1></About1>
 <Contactjs></Contactjs>

  </React.StrictMode>
);
