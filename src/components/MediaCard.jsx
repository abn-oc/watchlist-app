import CardButton from './CardButton'
import { LuPopcorn } from "react-icons/lu";
import { TiTick } from "react-icons/ti";


export default function MediaCard({title, poster, plot}) {

    return (
        <>
            <div className="mediacard" >
                <div className="bgimg" style={{backgroundImage: `url(${poster})`}}></div>
                <img src={poster} alt="poster"/>
                <div className="mediainfo">
                    <h3>{title}</h3>
                    <p>{plot}</p>
                    <CardButton text="Add to Watch List" />
                    <CardButton text="Add to Watched List" />
                </div>
            </div>
        </>
    )
}