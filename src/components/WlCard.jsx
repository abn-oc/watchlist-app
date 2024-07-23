import React, { useState, useEffect } from 'react';
import DetailsButton from './DetailsButton'
import DetailsButton2 from './DetailsButton2'
import DetailsButton4 from './DetailsButton4';
import { Link, Navigate } from "react-router-dom"
import { addtoCl, getCl, delfromWL, delfromCL } from './functions'
import { MdDelete } from "react-icons/md";

export default function WlCard({ movie, dtwl }) {

    const [incl, setincl] = useState()

    useEffect(() => {
      let cl = getCl();
      if(cl !== null) {
        setincl(cl.some(i => i.imdbID == movie.imdbID))
      }
    }, [])

    return (
        <div className="wlcard">
            <img src={movie.Poster} alt={movie.Title + " Poster"} id='wlposter'/>
            <div className="wlinfo">
                <Link to={`details/${movie.Title}`}><h4>{movie.Title}</h4></Link>
                <p>{movie.Plot}</p>
                <div className='wlbtns'>
                <div className='wlbtn'><DetailsButton2 text="Add to Completed List" func={() => {if(incl){delfromCL(movie);setincl(false)}else{addtoCl(movie);setincl(true)}}} disabled={incl}/></div>
                <Link className='wlbtn' to={`details/${movie.Title}`} ><DetailsButton4/></Link>
                <button id='delbtn'><MdDelete size={41} onClick={() => {dtwl(movie);delfromWL(movie)}}/></button>
                </div>
            </div>
        </div>
    )
}