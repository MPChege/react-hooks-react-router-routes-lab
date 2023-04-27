import React from "react";
import { movies } from "../data";

function Movies() {
  return(
    <div>
      <nav>
        <ul>
          <movies to= "/movies" activeClassName="movies"> <h1> Movies Page</h1> </movies> 
        </ul>
      </nav>
    </div>
  );
}

export default Movies;
