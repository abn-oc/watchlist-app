export default function DetailsButton2({ text , func, disabled}) {

    let cn = "detailsbutton2"
    let fn = func

    if(disabled) {
        cn = "detailsbutton2 disabled"
        fn = () => {}
        text = "In Completed list"
    }

    return (
        <button className={cn} onClick={fn}>
            {text}
        </button>
    )
}