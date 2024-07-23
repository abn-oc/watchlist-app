import { useEffect, useState } from "react"
import {getCl, modalClose} from './functions'
import ClCard from "./ClCard"
import RatingModal from "./RatingModal"

export default function CompletedListTab() {

  const [completedlist, setCompletedlist] = useState([])
  const [currmovie, setCurrMovie] = useState(null)
  function sm(movie) {
    setCurrMovie(movie)
  }

  useEffect(() => {
    let cl = getCl();
    if(cl !== null) {
      setCompletedlist(cl)
    }
  }, []);

  function deletefromTCL(movie) {
    setCompletedlist(completedlist.filter(i => i.imdbID !== movie.imdbID))
  }

  let clmarkup = completedlist.map(movie => 
    <ClCard movie={movie} key={movie.imdbID} dtcl={deletefromTCL} sm={sm}/>
  )

    return (
        <div className='main'>
          <div id="blur" onClick={() => {modalClose();setCurrMovie(null)}}></div>
          <div className="showslist">
            {clmarkup}
          </div>
          <RatingModal movie={currmovie} sm={setCurrMovie}/>
        </div>
    )
}