import React from "react"

function Search({onSearch}){


    function handleChange(event){
        console.log(event.target.value)
        onSearch(event.target.value)
    } 
       
       

    return (
        <div className={"searchbar"}>
            <label htmlFor="search">Search Paintings:</label>
            <input
            type="text"
            id="search"
            placeholder="Type a name to search..."
            onChange={handleChange}
            />
         </div>
    )
}

export default Search