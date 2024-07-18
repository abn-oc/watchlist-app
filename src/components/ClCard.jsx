import DetailsButton3 from './DetailsButton3'
import DetailsButton2 from './DetailsButton2'
import { Link } from "react-router-dom"

export default function ClCard() {

    return (
        <div className="wlcard">
            <img src="https://m.media-amazon.com/images/M/MV5BNjdhYzY0M2QtODgwZi00NDg2LTliNDQtMzA4ZTMzMzQ0MGEyXkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_SX300.jpg" alt="" />
            <div className="info">
                <h4>Terror in Resonance</h4>
                <p>Tokyo has been decimated by a terrorist attack, and the only clue to the culprit's identity is a bizarre internet video. While paranoia spreads, two mysterious children form "Sphinx," a clandestine entity determined to pull the trigger on this world.</p>
                <div className='btns'>
                <div className='btncont'><DetailsButton2 text="Go to Page"/></div>
                <div className='btncont'><DetailsButton3 text="Review"/></div>
                </div>
            </div>
        </div>
    )
}