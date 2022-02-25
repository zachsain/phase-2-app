import React, {useState} from 'react';
import Search from "./Search"
import PaintingCard from "./PaintingCard"

function Gallery({paintings, onSearch}){

    // const [paintingsCopy, setCopiedPaintings] = useState(paintings)

    

    console.log("Gallery:", paintings)

    let displayPainting = paintings.map(painting => {

        return <PaintingCard 
                 key={painting.id}   
                 title={painting.painting_title}
                 image={painting.img_src}
                 id={painting.id}
        />    })

    return(
        
        <div>
            <h2 class={'gallery-header'}>Gallery</h2>
            <Search onSearch={onSearch} />
            <ul class={"cards"}>
            {displayPainting}
            </ul>      
        </div>
    )
}

export default Gallery