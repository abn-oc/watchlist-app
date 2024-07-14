import SearchBar from './SearchBar'
import MediaCard from './MediaCard'
import { useEffect, useState } from 'react'

export default function SearchTab() {

  let [value,setValue] = useState("")
  let [slist,setSlist] = useState([])
  let [movieslist,setMoviesList] = useState([])
  let controller = new AbortController()
  let signal = controller.signal

  async function search() {
    let url = `http://www.omdbapi.com/?s=${value}&apikey=553957c`
    setValue("")
    setMoviesList(<h1>Searching...</h1>)
    let searchList = (await (await fetch(url)).json()).Search
    if(!searchList) {
      setMoviesList(<h1>No Results Found</h1>)
      console.log("no found")
      return null
    }
    setMoviesList(searchList.map(movie => 
      <MediaCard title={movie.Title} poster={movie.Poster} plot={"Loading..."} />
    ))
    setSlist(searchList.map(a => a.imdbID))
  }
  
  async function listFromIDs(IDs) {

    let i = 0
    let result = []

    for(let x of IDs) {
      let promise = await fetch(`http://www.omdbapi.com/?i=${x}&apikey=553957c`, {signal})
      let json = await promise.json()
      result[i] = json
      i++
    }
    return result
  }

  useEffect(() => {
    (async () => {
      let list = await listFromIDs(slist)
      setMoviesList(list.map(movie => 
        <MediaCard title={movie.Title} poster={movie.Poster} plot={movie.Plot} />
      ))
    })()
    return () => {
      controller.abort()
    }
  }, [slist])

    return (
        <div className='main'>

          <h2>\\Search Tab</h2>

          <SearchBar value={value} setValue={setValue} onsub={search}/>

          <div className='medialist'>
            {movieslist}
          </div>

        </div>
    )
}