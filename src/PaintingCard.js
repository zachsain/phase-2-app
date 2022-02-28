import React, {useState} from "react"

function PaintingCard({title, id, image}){

    const [liked, setLiked] = useState(false)

    return (
        <div className={'container'}>
        <ul className="card">
          <h4 class={"title"}>{title}</h4>
          <img width={'450'} height={"300"} className="cardImage" src={image} alt={title} />

          {liked ? (
            <button onClick={() => setLiked(!liked)} className="emoji-button favorite active">Favorite ★</button>
          ) : (
            <button onClick={() => setLiked(!liked)} className="emoji-button favorite" >Favorite ☆</button>
          )}
        </ul>
        </div>
      );
}



export default PaintingCard