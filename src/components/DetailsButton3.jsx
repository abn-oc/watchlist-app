export default function DetailsButton3({ text , func}) {
    
    return (
        <button className="detailsbutton3" onClick={func}>
            {text}
        </button>
    )
}