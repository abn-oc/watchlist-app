import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar({value,setValue,onsub}) {

    function handlesubmit(e) {
        e.preventDefault()
        onsub()
    }

    return (
        <form className="searchbar" onSubmit={handlesubmit}>
            <input type="text" value={value} onChange={e => {setValue(e.target.value)}}/>
            <button style={{outline: 'none', border: 'none'}} id="searchicon"><IoSearchSharp/></button>
        </form>
    )
}