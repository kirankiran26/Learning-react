import React from "react";
import {data} from "./data";
import './PropsAndCOmp.css'
function PropsAndCOmp() {
    return (
      <div className="main">
       
          <div className="card">
            
            {
                data.map((movie,index)=>(
                    // The proces of assigning the individual obj val to var is called object destructring like let movname=movie.title 
                    <Movie key={index} imgOfMovie={movie.imgurl} titleOfMovie={movie.title}/>
                    
                ))
                
            }
           
        </div>
        
      </div>
    )
}
const Movie=({imgOfMovie,titleOfMovie})=> {
    return(
        
      <div className="lolo">
          <div className="moviecard">
            
            <img src={imgOfMovie} alt="Movie img " />
            <h3>{titleOfMovie}</h3>
        </div>
      </div>
    )
}
export default PropsAndCOmp;