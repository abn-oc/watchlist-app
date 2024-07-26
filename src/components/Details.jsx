import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MoonLoader } from "react-spinners"
import { IoMdTime } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FiAward } from "react-icons/fi";
import DetailsButton from "./DetailsButton"
import DetailsButton2 from "./DetailsButton2"
import {getWl, addtoWl, getCl, addtoCl, delfromWL, delfromCL} from './functions'

export default function Details() {


    const mid = useParams().id
    const encid = encodeURIComponent(mid)
    const url = `https://www.omdbapi.com/?i=${encid}&plot=full&apikey=553957c`

    const [movie, setMovie] = useState({Title: "", Plot: "", Poster: ""})

    const [content, setContent] = useState(<div id="loader"><MoonLoader color="white"/></div>)

    function MovieDetails({movie}) {

      const [inwl, setinwl] = useState(false)
      const [incl, setincl] = useState(false)

      const [watchlist, setWatchlist] = useState([])
      const [completedlist, setCompletedlist] = useState([])

      useEffect(() => {
        let wl = getWl();
        if(wl !== null) {
          setWatchlist(wl)
          setinwl(wl.some(i => i.imdbID == movie.imdbID))
        }
        let cl = getCl();
        if(cl !== null) {
          setCompletedlist(cl)
          setincl(cl.some(i => i.imdbID == movie.imdbID))
        }
      }, [])

      return (
        <>
            <img src={movie.Poster} id="bgimg"/>
            <div className='main'>
            <div className="drow">
            <img src={movie.Poster} alt={movie.Title + "Poster"} id="dposter"/>
              <div className="maininfo">
                <h2 style={{color: 'white'}}>{movie.Title}</h2>
                <p>{movie.Type}</p>
                {movie.Type == "series"? movie.totalSeasons + " seasons": ""}
                <p>{movie.Genre}</p>
                <p>{movie.Released}</p>
                <p>IMDB Rating: {movie.Ratings[0].Value}</p>
                <div className="dbtns">
                <DetailsButton text="Add to Watch List" func={() => {if(inwl){delfromWL(movie);setinwl(false);}else{addtoWl(movie);setinwl(true);}}} disabled={inwl}/>
                <DetailsButton2 text="Add to Completed List" func={() => {if(incl){delfromCL(movie);setincl(false);}else{addtoCl(movie);setincl(true);}}} disabled={incl}/>
                </div>
              </div>
            </div>
    
            <div className="plotbox">
              <h3>Plot Summary: </h3>
              <p>{movie.Plot}</p>
            </div>
    
            <div className="mtadta">
            <IoMdTime size={30}/><span>{movie.Runtime}</span><br />
            <MdLanguage size={30}/><span>{movie.Language}</span><br />
            <FiAward size={30}/><span>{movie.Awards}</span><br />
            </div>
            </div>
          </>
      )
    }

    useEffect(() => {
      (async () => {
        const mov = await (await fetch(url)).json()
        setMovie(mov)
        setContent(<MovieDetails movie={mov} />)
      })()
    }, [])    

    return (
      <>
      {content}
      </>
    )
}