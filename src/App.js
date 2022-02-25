import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import './App.css';
import Gallery from "./Gallery"
import Add from "./Add"
import Home from "./Home"




function App() {

  const [paintings, setPaintings] = useState([])

  useEffect(() => {
    fetch("http://localhost:3004/paintings")
    .then((r) => r.json())
    .then(paintings => (console.log(paintings), setPaintings(paintings)))
  },[])

 
  function handleSearch(searchValue){

    const filteredPaintings = paintings.filter(paintings => {
     return paintings.painting_title.toLowerCase().includes(searchValue.toLowerCase())
    })
    if (searchValue === ""){
          setPaintings(paintings)
    } else {
            setPaintings(filteredPaintings)
    }
  }  

  function handleAddNewPainting(formData){

   fetch("http://localhost:3004/paintings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then(newItem => console.log(newItem));

      setPaintings([...paintings, formData])
    
  }

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/paintings">
          <Gallery paintings={paintings} onSearch={handleSearch} />
        </Route>
        <Route exact path="/paintings/new">
          <Add handleAddNewPainting={handleAddNewPainting} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>


    </div>
  );
}

export default App;

