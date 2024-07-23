import { IoIosClose } from "react-icons/io";
import DetailsButton2 from "./DetailsButton2";
import DetailsButton3 from "./DetailsButton3";
import { modalClose } from "./functions";
import { useEffect, useState } from "react";
import { setRev } from "./functions";

export default function RatingModal({ movie, sm }) {
    const [value, setValue] = useState("")

    useEffect(() => {
        setValue("")
    }, [movie])

    let title = "";
    if(movie !== null) title = movie.Title

    return (
        <div id="ratingmodal">
            <div className="rmbar"><span>Rating</span><IoIosClose id="rmclose" onClick={() => {modalClose();sm(null)}}/></div>
            <p>Enter a Rating for {title}</p>
            <div className="rminput"><input type="number" min={0} max={10} value={value} onChange={e => setValue(e.target.value)}/> <span> / 10</span></div>
            <div>
            <div className="rmbtns" style={{marginBottom: '6%'}}>
            <div className="rmbtn"><DetailsButton2 text="Close" func={() => {modalClose();sm(null)}}/></div>
            <div className="rmbtn"><DetailsButton3 text="Done" func={() => {modalClose();setRev(movie, value);sm(null)}}/></div>
            </div>
            </div>
        </div>
    )
} 