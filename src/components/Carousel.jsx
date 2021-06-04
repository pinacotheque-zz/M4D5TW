import { Component } from "react"
import TilesList from './TilesList'

class Carousel extends Component {

    state = {
        movies: []
    }

    componentDidMount = async () => {

        const url = "http://www.omdbapi.com/?apikey=3355a11b&s="
        const searchTerm = this.props.title

        try {
            let response = await fetch (url + searchTerm)
            
            console.log(response)

                if (response.ok) {
                    let newMovies = await response.json()
                    this.setState({
                        movies: newMovies.Search
                    })
                    
                } else {
                    console.log('error')
                }
            
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(  
        <div className="py-3">  
            <h4>{this.props.title}</h4> 
            <div className="ms-slider ms-slider--enlarge">
                <TilesList moviesToShow={this.state.movies} />
            </div>  
        </div>
        )  
    }
}

export default Carousel 