import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import { BrowserRouter , Routes,Route} from 'react-router-dom';
import Myloginpage from './modules/auth/Myloginpage';
import Myerrorpage from './modules/shares/Myerrorpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Mymainpage from './modules/dashboard/Mymainpage';
import Mycontactus from './modules/dashboard/Mycontactus';
import Myconditionpage from './modules/dashboard/Myconditionpage';
import Myparent from './modules/dashboard/propselement/Myparent';
import Myaxiospage from './modules/dashboard/Myaxiospage';
import Mydetailspage from './modules/dashboard/Mydetailspage';
import Mygraphpage from './modules/dashboard/Mygraphpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
  <Routes>
    <Route path='' element={<Myloginpage/>}/>
    <Route path='registor' element={<Myregistorpage/>}/>
    <Route path='dashboard' element={<Mylandingpage/>}>
          <Route path='' element={<Mymainpage/>}/>
          <Route path='contactus' element={<Mycontactus/>}/>
          <Route path='crender' element={<Myconditionpage/>}/>
          <Route path='props' element={<Myparent/>}/>
          <Route path='myaxios' element={<Myaxiospage/>}/>
          <Route path='myaxios/view/:id' element={<Mydetailspage/>}/>
          <Route path='mygrap' element={<Mygraphpage/>}/>
          <Route path='*' element={<Myerrorpage/>}/>
          
    </Route>
    <Route path='*' element={<Myerrorpage/>}/>
  </Routes>
</BrowserRouter>


  </React.StrictMode>
);
