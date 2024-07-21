export default function MediaCard({movie}) {

    return (
        <>
            <div>
                <img src={movie.Poster} alt="poster"/>
                <h5 style={{color: 'white'}}>{movie.Title}</h5>
            </div>
        </>
    )
}