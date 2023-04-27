import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
     <NavLink exact to="/home" activeClassName="active">Home</NavLink> 
    <NavLink exact to="/movie" activeClassName="active">Movies</NavLink>
    <NavLink exact to="/actors" activeClassName='active'>Actors</NavLink>
    <NavLink exact to="/directors" activeClassName='active'>Directors</NavLink>
</div>
);
}

export default NavBar;
