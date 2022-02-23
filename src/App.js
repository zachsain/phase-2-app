import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import './App.css';
import Gallery from "./Gallery"
import Add from "./Add"
import Home from "./Home"




function App() {
  return (
    // navbar 
    <div className="app">
      <NavBar />


    </div>
  );
}

export default App;

