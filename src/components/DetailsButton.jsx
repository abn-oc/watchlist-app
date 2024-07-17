export default function DetailsButton({text, func}) {



    return (
        <button className="detailsbutton" onClick={func}>
            {text}
        </button>
    )
}