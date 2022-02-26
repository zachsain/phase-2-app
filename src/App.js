import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import './App.css';
import Gallery from "./Gallery"
import Add from "./Add"
import Home from "./Home"




function App() {

  const [paintings, setPaintings] = useState([])
  const [paintingsCopy, setCopy] = useState([])

  useEffect(() => {
    fetch("http://localhost:3004/paintings")
    .then((r) => r.json())
    .then(paintings => (setCopy(paintings), setPaintings(paintings)))
  },[])

 
  function handleSearch(searchValue){

    const filteredPaintings = paintings.filter(painting => {
     return painting.painting_title.toLowerCase().includes(searchValue.toLowerCase())
    })
    if (searchValue === ""){
          setPaintings(paintingsCopy)
          console.log("copy", paintingsCopy)
    } else {

            setPaintings(filteredPaintings)
            console.log("filtered", filteredPaintings)                  
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

