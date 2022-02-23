import React, {useState} from 'react';

function Add({handleAddNewPainting}){

    const [paintingTitle, setTitle] = useState("")
    const [paintingImage, setImage] = useState("")
   

    let formData = {
        painting_title : paintingTitle, 
        img_src : paintingImage,
       
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        handleAddNewPainting(formData)
    }

    function handleTitle(event){
        setTitle(event.target.value)
      
    }

    function handleImage(event){
        setImage(event.target.value)
    }

    return (
    <div className="new-painting-form">
      <h2>New Painting </h2>
      <form onSubmit={handleSubmit} >
        <input  value={paintingTitle} onChange={handleTitle} type="text" name="name" placeholder="Painting Title" />
        <input  value={paintingImage} onChange={handleImage} type="text" name="image" placeholder="Image URL" />
        <button type="submit">Add Painting</button>
      </form>
    </div>
    )
}

export default Add;