import React from "react";
import './App.css';
 import { Navbar } from "./components/Navbar";
 import {Routes,Route} from "react-router-dom";
 import { Home } from "./components/Home";
 
 
 import { Register } from "./components/Register";
 import { Login } from "./components/Login";
 import { Products } from "./components/Products";
//  import { about } from "./components/about";

function App() {
  return (
   
    <div classNmae = "App">
    <Navbar />
    <Routes>
      <Route path="/"/>
      <Route path = "/Home" element = {<Home/>} />
      <Route path = "/Register" element = {<Register/>} />
      <Route path = "/Login" element = {<Login/>} />
       <Route path = "/Products" element = {<Products/>} />
       {/* <Route path = "/about" element = {< about />} /> */}


    </Routes>
    
    </div>
  );
}

export default App;
