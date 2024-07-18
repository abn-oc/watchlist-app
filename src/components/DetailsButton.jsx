export default function DetailsButton({ text, func, disabled}) {

    let cn = "detailsbutton"
    let fn = func

    if(disabled) {
        cn = "detailsbutton disabled"
        fn = () => {}
        text = "In Watch list"
    }

    return (
        <button className={cn} onClick={fn}>
            {text}
        </button>
    )
}