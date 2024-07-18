import { useEffect, useState } from "react"
import {getWl} from './functions'
import WlCard from "./WlCard"

export default function WatchListTab() {

  let [watchlist, setWatchlist] = useState([])

  useEffect(() => {
    let wl = getWl();
    if(wl !== null) {
      setWatchlist(wl)
      console.log(wl)
    }
  }, []);


  let wlmarkup = watchlist.map(movie => 
    <WlCard movie={movie}/>
  )

    return (
        <div className='main'>

          <div className="showslist">
            {wlmarkup}
          </div>

        </div>
    )
}