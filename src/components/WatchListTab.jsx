import { useEffect, useState } from "react"
import {getWl} from './functions'
import WlCard from "./WlCard"

export default function WatchListTab() {

  const [watchlist, setWatchlist] = useState([])
  
  useEffect(() => {
    let wl = getWl();
    if(wl !== null) {
      setWatchlist(wl)
    }
  }, []);

  function deletefromTWL(movie) {
    setWatchlist(watchlist.filter(i => i.imdbID !== movie.imdbID))
  }

  let wlmarkup = watchlist.map(movie => 
    <WlCard movie={movie} key={movie.imdbID} dtwl={deletefromTWL}/>
  )

    return (
        <div className='main'>

          <div className="showslist">
            {wlmarkup}
          </div>

        </div>
    )
}