import React, { useState, useEffect } from 'react';
import DetailsButton from './DetailsButton'
import DetailsButton2 from './DetailsButton2'
import { Link } from "react-router-dom"
import { addtoCl, getCl, delfromWL } from './functions'
import { MdDelete } from "react-icons/md";

export default function WlCard({ movie, dtwl }) {

    let [incl, setincl] = useState()

    useEffect(() => {
      let cl = getCl();
      if(cl !== null) {
        setincl(cl.some(i => i.imdbID == movie.imdbID))
      }
    }, [])

    return (
        <div className="wlcard">
            <img src={movie.Poster} alt={movie.Title + " Poster"} />
            <div className="info">
                <h4>{movie.Title}</h4>
                <p>{movie.Plot}</p>
                <div className='btns'>
                <div className='btncont'><DetailsButton2 text="Add to Completed List" func={() => {addtoCl(movie);setincl(true)}} disabled={incl}/></div>
                <Link to={`details/${movie.Title}`} ><div className='btncont'><DetailsButton2 text="Go to Page"/></div></Link>
                <button className='deletebutton'><MdDelete size={41} onClick={() => {dtwl(movie);delfromWL(movie)}}/></button>
                </div>
            </div>
        </div>
    )
}