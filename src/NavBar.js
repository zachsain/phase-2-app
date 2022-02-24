import React from 'react'; 
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  function NavBar() {
    return (
      <div class={'navBar'}>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/gallery"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/add"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Add
        </NavLink>
      </div>
    );
  }
  
  export default NavBar