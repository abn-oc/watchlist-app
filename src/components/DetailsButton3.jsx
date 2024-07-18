import { useState } from "react";

export default function DetailsButton3({ text , func}) {
    
    let [act, setAct] = useState(false)

    let cn;
    if(act) {
        console.log("opening")
        cn = "detailsbutton3 act"
        setTimeout(() => {document.addEventListener('click',openrev)}, 300);
    }
    else {
        cn = "detailsbutton3"
    }

    function openrev(e) {
        if(e.target.className !== "review") {
            console.log("closing")
            setAct(false)
            document.removeEventListener('click',openrev)
        }
    }

    return (
        <button className={cn} onClick={() => {setAct(true);func()}}>
            {text}
        </button>
    )
}