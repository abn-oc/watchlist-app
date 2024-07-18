import DetailsButton3 from './DetailsButton3'
import DetailsButton2 from './DetailsButton2'
import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md";

export default function ClCard({ movie }) {

    //now make functions for deleting from cl or wl that take a movie as an arguement and delete
    //it from the list, make those functions in functions file
    //make that function work on clicking on the dustbin
    //add dustbin in WLCard

    return (
        <div className="wlcard">
            <img src={movie.Poster} alt={movie.Title + " Poster"} />
            <div className="info">
                <h4>{movie.Title}</h4>
                <p>{movie.Plot}</p>
                <div className='btns'>
                <div className='btncont'><DetailsButton3 text="Review"/></div>
                <Link to={`details/${movie.Title}`}><div className='btncont'><DetailsButton2 text="Go to Page"/></div></Link>
                <button className='deletebutton'><MdDelete size={41} /></button>
                </div>
            </div>
        </div>
    )
}