import SearchBar from './SearchBar'
import MediaCard from './MediaCard'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function SearchTab() {

  let [value,setValue] = useState("")
  let [movieslist,setMoviesList] = useState([])
  const navigate = useNavigate()

  const searched = useParams()
  console.log(searched)

  function search() {
    navigate(`/search/${value}`)
  }
   
  useEffect(() => {
    (async () => {
      setValue("")
      if(searched.value == null || searched.value == "") {
        setMoviesList("")
        return;
      }
      let url = `http://www.omdbapi.com/?s=${searched.value}&apikey=553957c`
      setMoviesList(<h1>Searching...</h1>)
      let searchList = (await (await fetch(url)).json()).Search
      if(!searchList) {
          setMoviesList(<h1>No Results Found</h1>)
          return null
        }
        setMoviesList(searchList.map(movie => 
          <Link className="result" key={movie.imdbID} to={`details/${movie.Title}`}><MediaCard movie={movie} /></Link>
        ))
    })()
  }, [searched])

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