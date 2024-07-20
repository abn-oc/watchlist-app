import DetailsButton3 from './DetailsButton3'
import DetailsButton2 from './DetailsButton2'
import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md";
import { delfromCL } from './functions';
import { getRev } from './functions';
import { useEffect, useState } from 'react';
import { modalOpen } from "./functions";

export default function ClCard({ movie, dtcl, sm }) {

    let [rtext, setRtext] = useState("Review");
    useEffect(() => {
        let rating = getRev(movie)
        if(rating !== null) {
            setRtext(`${rating}/10`)
        }
    }, [])

    return (
        <div className="wlcard">
            <div className='imgcont'><img src={movie.Poster} alt={movie.Title + " Poster"} /></div>
            <div className="info">
                <h4>{movie.Title}</h4>
                <p>{movie.Plot}</p>
                <div className='btns'>
                <div className='btncont'><DetailsButton3 text={rtext} func={() => {modalOpen();sm(movie)}}/></div>
                <Link to={`details/${movie.Title}`}><div className='btncont'><DetailsButton2 text="Go to Page"/></div></Link>
                <button className='deletebutton'><MdDelete size={41} onClick={() => {dtcl(movie);delfromCL(movie)}}/></button>
                </div>
            </div>
        </div>
    )
}