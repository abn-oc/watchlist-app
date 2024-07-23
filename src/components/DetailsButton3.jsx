import { FaStar } from "react-icons/fa";

export default function DetailsButton3({ text , func}) {

    return (
        <>
        <button className="detailsbutton3" onClick={func}>
            <FaStar style={{position: 'relative',top: '0.2vh'}}/>  {text}
        </button>
        </>
    )
}