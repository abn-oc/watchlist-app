import React, { useState, useEffect } from 'react';
import DetailsButton from './DetailsButton'
import DetailsButton2 from './DetailsButton2'
import { Link } from "react-router-dom"
import { addtoCl, getCl } from './functions'
import { MdDelete } from "react-icons/md";

export default function WlCard({ movie }) {

    let [incl, setincl] = useState()
    let [completedlist, setCompletedlist] = useState([])
    useEffect(() => {
      let cl = getCl();
      if(cl !== null) {
        setCompletedlist(cl)
        setincl(completedlist.some(i => i.imdbID == movie.imdbID))
      }
    }, [completedlist])

    return (
        <div className="wlcard">
            <img src={movie.Poster} alt={movie.Title + " Poster"} />
            <div className="info">
                <h4>{movie.Title}</h4>
                <p>{movie.Plot}</p>
                <div className='btns'>
                <div className='btncont'><DetailsButton2 text="Add to Completed List" func={() => addtoCl(movie)} disabled={incl}/></div>
                <Link to={`details/${movie.Title}`} ><div className='btncont'><DetailsButton2 text="Go to Page"/></div></Link>
                <button className='deletebutton'><MdDelete size={41} /></button>
                </div>
            </div>
        </div>
    )
}