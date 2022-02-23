import React from "react"

function Search(){
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Paintings:</label>
            <input
            type="text"
            id="search"
            placeholder="Type a name to search..."
            // onChange={handleChange}
            />
         </div>
    )
}

export default Search