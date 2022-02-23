import React, {useState} from 'react';
import Search from "./Search"
import PaintingCard from "./PaintingCard"

function Gallery({paintings, onSearch}){

    // const [paintingsCopy, setCopiedPaintings] = useState(paintings)

    

    console.log(paintings)

    let displayPainting = paintings.map(painting => {
        return <PaintingCard 
                 key={painting.id}   
                 title={painting.painting_title}
                 image={painting.img_src}
                 id={painting.id}
        />    })

    return(
        
        <div>Gallery
            <Search onSearch={onSearch} />
            {displayPainting}
        </div>
    )
}

export default Gallery