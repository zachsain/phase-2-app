import React from 'react';
import Search from "./Search"
import PaintingCard from "./PaintingCard"

function Gallery({paintings, onSearch}){

    console.log(paintings)

    const displayPainting = paintings.map(painting => {
        return <PaintingCard 
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