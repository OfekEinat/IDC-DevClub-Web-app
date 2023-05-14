import React from "react";

export default function MovieComp({title ,year ,imdbID ,type ,poster}) {
    return (
        <div>
        <img src={poster} alt=''/> 
        <p>
            title:{title}
            year: {year}
            type: {type}
            imdbID: {imdbID}
        </p>    
        </div>
    );
  }