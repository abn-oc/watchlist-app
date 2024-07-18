export default function DetailsButton2({ text , func, disabled}) {

    let cn = "detailsbutton"
    let fn = func

    if(disabled) {
        cn = "detailsbutton disabled"
        fn = () => {}
        text = "In Completed list"
    }

    return (
        <button className={cn} onClick={fn}>
            {text}
        </button>
    )
}