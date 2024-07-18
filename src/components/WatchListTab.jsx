import { useState } from "react"
import WlCard from "./WlCard"

export default function WatchListTab() {

  let [movies, setMovies] = useState([])
  //useEffect to get list of watchlist shit
  //map them to movies

    return (
        <div className='main'>

          <div className="showslist">
            <WlCard/>
          </div>

        </div>
    )
}