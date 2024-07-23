import { IoIosClose } from "react-icons/io";
import DetailsButton2 from "./DetailsButton2";
import DetailsButton3 from "./DetailsButton3";
import { modalClose } from "./functions";
import { useEffect, useState } from "react";
import { setRev } from "./functions";

export default function RatingModal({ movie, sm }) {
    const [value, setValue] = useState("")
    const [errormsg, setErrormsg] = useState("")

    useEffect(() => {
        setErrormsg("")
        setValue("")
        document.getElementById("ri").focus()
    }, [movie])

    let title = "";
    if(movie !== null) title = movie.Title

    return (
        <div id="ratingmodal">
            <div className="rmbar"><span>Rating</span><IoIosClose id="rmclose" onClick={() => {modalClose();sm(null)}}/></div>
            <p>Enter a Rating for {title}</p>
            <p style={{color: 'red', fontSize: '0.9rem'}}>{errormsg}</p>
            <div className="rminput"><input type="number" min={0} max={10} value={value} onChange={e => setValue(e.target.value)} onKeyDown={e => {if(e.key == "Enter") {if(value >= 0 && value <= 10) {modalClose();setRev(movie, value);sm(null)}else{setErrormsg("enter rating between 0 and 10");setValue("")}}}} id="ri"/> <span> / 10</span></div>
            <div>
            <div className="rmbtns" style={{marginBottom: '6%'}}>
            <div className="rmbtn"><DetailsButton2 text="Close" func={() => {modalClose();sm(null);setValue("")}}/></div>
            <div className="rmbtn"><DetailsButton3 text="Done" func={() => {if(value >= 0 && value <= 10) {modalClose();setRev(movie, value);sm(null)}else{setErrormsg("enter rating between 0 and 10");setValue("")}}}/></div>
            </div>
            </div>
        </div>
    )
} 