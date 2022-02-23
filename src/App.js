import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import './App.css';
import Gallery from "./Gallery"
import Add from "./Add"
import Home from "./Home"




function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>


    </div>
  );
}

export default App;

