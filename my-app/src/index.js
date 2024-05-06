// create-react-app my-app  
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Outlet,Link} from "react-router-dom";

//files
import Use from "./use.js";

import Hook from './hook.js';

import Test  from "./test.js";

//redux 
import {Provider} from "react-redux";

import store  from './store.js';


function LayOut(){

  return(
    <>
    <h1>i am layout</h1>
<ul>
  <li>
<Link to="/use">Use</Link>

  </li>
  <li>
  <Link to="/hook">Hook</Link>
  </li>
  <li>
<Link to="/test">Test</Link>

  </li>
  
<Outlet/>
</ul>
    </>
  )
}


function Home(){
  return(

    <>
<center>
</center>
    

<BrowserRouter>
<Routes>

  <Route path="/" element={<LayOut/>}/>

  <Route path="/use" element={<Use/>}/>
  
<Route path="/hook" element={<Hook/>}/>

<Route path="/test" element={<Test/>}/>

</Routes>

</BrowserRouter>


    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Home/>
  </Provider>
);