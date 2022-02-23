import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import './App.css';
import Gallery from "./Gallery"
import Add from "./Add"
import Home from "./Home"




function App() {

  const [paintings, setPaintings] = useState()

  useEffect(() => {
    fetch("http://localhost:3004/paintings")
    .then(r => r.json())
    .then(paintings => (console.log(paintings), setPaintings(paintings)))
  },[])

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/gallery">
          <Gallery paintings={paintings} />
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

