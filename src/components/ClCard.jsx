import DetailsButton3 from './DetailsButton3'
import DetailsButton2 from './DetailsButton2'
import DetailsButton4 from './DetailsButton4';
import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md";
import { delfromCL } from './functions';
import { getRev } from './functions';
import { useEffect, useState } from 'react';
import { modalOpen } from "./functions";

export default function ClCard({ movie, dtcl, sm }) {
    const [rtext, setRtext] = useState("Review");
    useEffect(() => {
        let rating = getRev(movie)
        if(rating !== null && rating !== "") {
            setRtext(`${rating}/10`)
        }
        else {
            setRtext("Review")
        }
    })

    return (
        <div className="wlcard">
            <img src={movie.Poster} alt={movie.Title + " Poster"} id='wlposter'/>
            <div className="wlinfo">
                <Link to={`details/${movie.Title}`}><h4>{movie.Title}</h4></Link>
                <p>{movie.Plot}</p>
                <div className='wlbtns'>
                <div className='wlbtn'><DetailsButton3 text={rtext} func={() => {modalOpen();sm(movie)}}/></div>
                <Link className='wlbtn' to={`details/${movie.Title}`}><DetailsButton4/></Link>
                <button id='delbtn'><MdDelete size={41} onClick={() => {dtcl(movie);delfromCL(movie)}}/></button>
                </div>
            </div>
        </div>
    )
}