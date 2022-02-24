import React from 'react';

function Home (){
return(
    <div>
        <h2 class={"home-page"} id={"bob-ross-header"}> Bob Ross Painting Gallery </h2>
        <img class={"home-page"} id={"bob-ross-photo"}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdxP3T_00dG22PS3WjSsPILbzVnmtTkqf4vD_qa2ctmX43Kw95Vz9XTfTzQY3uha93G8&usqp=CAU" alt="Bob Ross Photo"></img>
        <p class={"home-page"} id={"bob-ross-bio"}> Robert Norman Ross was an American painter, art instructor, and television host. He was the creator and host of The Joy of Painting, an instructional television program that aired from 1983 to 1994 on PBS in the United States, CBC in Canada, and similar channels in Latin America, Europe and elsewhere.</p>
    </div>
)

}

export default Home;