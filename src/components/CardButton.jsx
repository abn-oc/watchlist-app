export default function CardButton({text}) {

    function handleclick(e) {
        let t
        if(e.target.tagName == "SPAN") {
            t = e.target.parentElement
        }
        else {
            t = e.target
        }
        t.classList.add("addedanim")
        setTimeout(() => {
            t.classList.remove("addedanim")
        }, 1500);
    }

    return (
        <button className="cardbutton" onClick={(e) => handleclick(e)} >
            <span className="s1">{text}</span>
            <span className="s2">Added!</span>
        </button>
    )
}