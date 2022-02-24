import React, {useState} from 'react';
import PaintingCard from './PaintingCard'

function Add({handleAddNewPainting}){

    const [paintingTitle, setTitle] = useState("")
    const [paintingImage, setImage] = useState("")
    const [paintingCard, setCard] = useState("")
   

    let formData = {
        painting_title : paintingTitle, 
        img_src : paintingImage,
       
    }

    let newCard 
    

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        handleAddNewPainting(formData)
        newCard = <PaintingCard 
                          title={formData.painting_title}
                          image={formData.img_src}/>
        setCard(newCard)
    }

    function handleTitle(event){
        setTitle(event.target.value)
      
    }

    function handleImage(event){
        setImage(event.target.value)
    }

    return (
    <div className="new-painting-form">
      <h2 class={'add-header'}>Add New Painting</h2>
      <form class={'form'} onSubmit={handleSubmit} >
        <input  value={paintingTitle} onChange={handleTitle} type="text" name="name" placeholder="Painting Title" />
        <input  value={paintingImage} onChange={handleImage} type="text" name="image" placeholder="Image URL" />
        <button type="submit">Add Painting</button>
      </form>
      {paintingCard}
     
    </div>
    )
}

export default Add;