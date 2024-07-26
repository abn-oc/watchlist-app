import SearchBar from './SearchBar'
import MediaCard from './MediaCard'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MoonLoader } from "react-spinners"

export default function SearchTab() {

  const [value,setValue] = useState("")
  const [movieslist,setMoviesList] = useState([])
  const navigate = useNavigate()

  const searched = useParams()

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
      let url = `https://www.omdbapi.com/?s=${searched.value}&apikey=553957c`
      setMoviesList(<div id="sloader"><MoonLoader color="white"/></div>)
      let searchList = (await (await fetch(url)).json()).Search
      if(!searchList) {
          setMoviesList(<h1>No Results Found</h1>)
          return null
        }
        setMoviesList(searchList.map(movie => 
          <Link className="result" key={movie.imdbID} to={`details/${movie.imdbID}`}><MediaCard movie={movie} /></Link>
        ))
    })()
  }, [searched])

    return (
        <div className='main'>

          <SearchBar value={value} setValue={setValue} onsub={search}/>

          <div className='medialist'>
            {movieslist}
          </div>

        </div>
    )
}