import { useEffect, useState } from "react"
import {getCl} from './functions'
import ClCard from "./ClCard"

export default function CompletedListTab() {

  let [completedlist, setCompletedlist] = useState([])

  useEffect(() => {
    let cl = getCl();
    if(cl !== null) {
      setCompletedlist(cl)
      console.log(cl)
    }
  }, []);


  let clmarkup = completedlist.map(movie => 
    <ClCard movie={movie}/>
  )

    return (
        <div className='main'>

          <div className="showslist">
            {clmarkup}
          </div>

        </div>
    )
}