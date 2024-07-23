import { LuPopcorn } from "react-icons/lu";

export default function DetailsButton({ text, func, disabled }) {

    let cn = "detailsbutton"

    if(disabled) {
        cn = "detailsbutton disabled"
        text = "In Watch list"
    }

    return (
        <button className={cn} onClick={func}>
            {text}  <LuPopcorn style={{position: 'relative',top: '0.3vh'}}/>
        </button>
    )
}