import React from 'react';

function Add(){
    return (
    <div className="new-painting-form">
      <h2>New Painting </h2>
      <form >
        <input  value={"" }type="text" name="name" placeholder="Painting name" />
        <input  value={"" }type="text" name="image" placeholder="Image URL" />
        <button type="submit">Add Painting</button>
      </form>
    </div>
    )
}

export default Add;