import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <nav>
        <ul>
          <actors to= "/actors" activeClassName="active"> <h1> Actors Page</h1> </actors> 
        </ul>
      </nav>
    </div>
  )
}

export default Actors;
