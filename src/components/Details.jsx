import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MoonLoader } from "react-spinners"
import { IoMdTime } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FiAward } from "react-icons/fi";
import DetailsButton from "./DetailsButton"
import DetailsButton2 from "./DetailsButton2"
import {getWl, addtoWl, getCl, addtoCl} from './functions'

export default function Details() {

    const title = useParams().title
    const enctitle = encodeURIComponent(title)
    const url = `http://www.omdbapi.com/?t=${enctitle}&plot=full&apikey=553957c`

    let [movie, setMovie] = useState({Title: "", Plot: "", Poster: ""})

    let [content, setContent] = useState(<div id="loader"><MoonLoader color="white"/></div>)

    function MovieDetails({movie}) {

      let [inwl, setinwl] = useState()
      let [incl, setincl] = useState()

      let [watchlist, setWatchlist] = useState([])
      let [completedlist, setCompletedlist] = useState([])
      useEffect(() => {
        let wl = getWl();
        if(wl !== null) {
          setWatchlist(wl)
          setinwl(watchlist.some(i => i.imdbID == movie.imdbID))
        }

        let cl = getCl();
        if(cl !== null) {
          setCompletedlist(cl)
          setincl(completedlist.some(i => i.imdbID == movie.imdbID))
        }
      }, [watchlist, completedlist])

      
      

      return (
        <>
            <img src={movie.Poster} id="bgimg"/>
            <div className='maind'>
            <div className="row">
            <img src={movie.Poster} alt={movie.Title + "Poster"} />
              <div className="maininfo">
                <h2 style={{color: 'white'}}>{movie.Title}</h2>
                <p>{movie.Type}</p>
                {movie.Type == "series"? movie.totalSeasons + " seasons": ""}
                <p>{movie.Genre}</p>
                <p>{movie.Released}</p>
                <p>IMDB Rating: {movie.Ratings[0].Value}</p>
                <DetailsButton text="Add to Watch List" func={() => addtoWl(movie)} disabled={inwl}/>
                <DetailsButton2 text="Add to Completed List" func={() => addtoCl(movie)} disabled={incl}/>
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
        console.log(mov)
      })()
    }, [])    

    return (
      <>
      {content}
      </>
    )
}