import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MoonLoader } from "react-spinners"

export default function Details() {

    const title = useParams().title
    const enctitle = encodeURIComponent(title)
    const url = `http://www.omdbapi.com/?t=${enctitle}&plot=full&apikey=553957c`

    let [movie, setMovie] = useState({Title: "Loading...", Plot: "Loading..."})


    useEffect(() => {
      (async () => {
        const mov = await (await fetch(url)).json()
        setMovie(mov)
        console.log(mov)
      })()
    }, [title])    

    return (
      <>
        <img src={movie.Poster} id="bgimg"/>
        <div className='maind'>
        <div className="row">
        <img src={movie.Poster} alt={movie.Title + "Poster"} />
          <div className="maininfo">
            <h2>{movie.Title}</h2>
            <p>{movie.Genre}</p>
            <p>{movie.Released}</p>
          </div>
        </div>

        <div className="plotbox">
          <h3>Plot Summary: </h3>
          <p>{movie.Plot}</p>
        </div>

        </div>
      </>
    )
}


{/* <MoonLoader color="white" id="loader"/>  */}