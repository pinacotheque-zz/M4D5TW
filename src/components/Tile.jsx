const Tile = ( {movie} ) => (
           
              <div className="tile">
                <div className="tile__media">
                  <img className="tile__img" src={movie.Poster} alt={movie.Title}  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">
                    Watch Now
                  </div>
                </div>
              </div>
        )

export default Tile