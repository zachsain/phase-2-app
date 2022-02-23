import React, {useState} from 'react';

function Add(){

    const [paintingTitle, setTitle] = useState()
    const [paint]

    function handleSubmit(event){
        event.preventDefault()
        console.log(event)
    }

    return (
    <div className="new-painting-form">
      <h2>New Painting </h2>
      <form onClick={handleSubmit} >
        <input  value={""}type="text" name="name" placeholder="Painting Title" />
        <input  value={""}type="text" name="image" placeholder="Image URL" />
        <button type="submit">Add Painting</button>
      </form>
    </div>
    )
}

export default Add;