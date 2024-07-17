import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MoonLoader } from "react-spinners"
import { IoMdTime } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FiAward } from "react-icons/fi";

export default function Details() {

    const title = useParams().title
    const enctitle = encodeURIComponent(title)
    const url = `http://www.omdbapi.com/?t=${enctitle}&plot=full&apikey=553957c`

    let [movie, setMovie] = useState({Title: "", Plot: "", Poster: ""})

    let [content, setContent] = useState(<div id="loader"><MoonLoader color="white"/></div>)


    useEffect(() => {
      (async () => {
        const mov = await (await fetch(url)).json()
        setMovie(mov)
        setContent(<MovieDetails movie={mov}/>)
        console.log(mov)
      })()
    }, [title])    

    return (
      <>
      {content}
      </>
    )
}

function MovieDetails({movie}) {
  return (
    <>
        <img src={movie.Poster} id="bgimg"/>
        <div className='maind'>
        <div className="row">
        <img src={movie.Poster} alt={movie.Title + "Poster"} />
          <div className="maininfo">
            <h2 style={{color: 'white'}}>{movie.Title}</h2>
            <p>{movie.Type}</p>
            <p>{movie.Genre}</p>
            <p>{movie.Released}</p>
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