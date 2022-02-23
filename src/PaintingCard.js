import React from "react"

function PaintingCard({title, id, image}){

    const [liked, setLiked] = useState(false)

    return (
        <li className="card">
          <img src={image} alt={title} />
          <h4>{title}</h4>
          {liked ? (
            <button onClick={() => setLiked(!liked)} className="emoji-button favorite active">★</button>
          ) : (
            <button onClick={() => setLiked(!liked)} className="emoji-button favorite" >☆</button>
          )}
        </li>
      );
}




