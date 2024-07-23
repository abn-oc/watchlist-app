import React, { useState, useEffect } from 'react';
import DetailsButton from './DetailsButton'
import DetailsButton2 from './DetailsButton2'
import { Link, Navigate } from "react-router-dom"
import { addtoCl, getCl, delfromWL } from './functions'
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
            <img src={movie.Poster} alt={movie.Title + " Poster"} id='wlposter' />
            <div className="wlinfo">
                <h4>{movie.Title}</h4>
                <p>{movie.Plot}</p>
                <div className='wlbtns'>
                <div className='wlbtn'><DetailsButton text="Add to Completed List" func={() => {addtoCl(movie);setincl(true)}} disabled={incl}/></div>
                <Link className='wlbtn' to={`details/${movie.Title}`} ><DetailsButton2 text="Go to Page"/></Link>
                <button id='delbtn'><MdDelete size={41} onClick={() => {dtwl(movie);delfromWL(movie)}}/></button>
                </div>
            </div>
        </div>
    )
}