import Tile from './Tile'

const TilesList = ( {moviesToShow} ) => (
    <div className="ms-slider__inner ">
        {
            moviesToShow.map(movie => (
                <Tile movie={movie} key={movie.imdbID} />
            ))
        }
    </div>
)

export default TilesList