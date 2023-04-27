import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <nav>
        <ul>
          <directors to= "/directors" activeClassName="directors"> <h1> Directors Page</h1> </directors> 
        </ul>
      </nav>
    </div>
  );
}

export default Directors;
