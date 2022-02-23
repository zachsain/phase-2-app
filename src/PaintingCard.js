import React, {useState} from "react"

function PaintingCard({title, id, image}){

    const [liked, setLiked] = useState(false)

    return (
        <ul className="card">
          <h4>{title}</h4>
          <img src={image} alt={title} />
          {liked ? (
            <button onClick={() => setLiked(!liked)} className="emoji-button favorite active">★</button>
          ) : (
            <button onClick={() => setLiked(!liked)} className="emoji-button favorite" >☆</button>
          )}
        </ul>
      );
}



export default PaintingCard