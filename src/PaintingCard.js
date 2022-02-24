import React, {useState} from "react"

function PaintingCard({title, id, image}){

    const [liked, setLiked] = useState(false)

    return (
        <div class={'container'}>
        <ul className="card">
          <h4 class={"title"}>{title}</h4>
          <img className="cardImage" src={image} alt={title} />
          {liked ? (
            <button onClick={() => setLiked(!liked)} className="emoji-button favorite active">★</button>
          ) : (
            <button onClick={() => setLiked(!liked)} className="emoji-button favorite" >☆</button>
          )}
        </ul>
        </div>
      );
}



export default PaintingCard