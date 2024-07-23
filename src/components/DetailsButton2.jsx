import { MdDone } from "react-icons/md";

export default function DetailsButton2({ text , func, disabled}) {

    let cn = "detailsbutton2"

    if(disabled) {
        cn = "detailsbutton2 disabled"
        text = "In Completed list"
    }

    let ico = <MdDone style={{position: 'relative',top: '0.3vh'}}/>
    if(text == "Go to Page") ico = ""

    return (
        <button className={cn} onClick={func}>
            {ico}  {text}
        </button>
    )
}