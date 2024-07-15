import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Details() {

    const title = useParams().title
    console.log(title)
    const enctitle = encodeURIComponent(title)
    const url = `http://www.omdbapi.com/?t=${enctitle}&apikey=553957c`

    let [tempcontent, setT] = useState("\\Details Page for loading...")

    let [movie, setMovie] = useState(null)

    useEffect(() => {
      (async () => {
        const mov = await (await fetch(url)).json()
        setMovie(mov)
        console.log(mov)
        setT(`\\Details Page for ${mov.Title}`) 
      })()
    }, [url])    

    return (
        <div className='main'>

          <div className="pagename">
            <h2>{tempcontent}</h2>
          </div>

        </div>
    )
}