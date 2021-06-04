import { Component } from "react"
import {Container,Row} from 'react-bootstrap'
import Tile from './Tile'

class Carousel extends Component {

state = {

}
componentDidMount = async () => {

    const url = "http://www.omdbapi.com/?apikey=3355a11b&s="
    const searchTerm = "Harry%20Potter"

    try {
        let response = await fetch (url + searchTerm)
        
        console.log(response)

            if (response.ok) {
                let movies = await response.json()
                console.log(movies)
                
            } else {
                console.log('error')
            }
        console.log(response) 
        
    } catch (error) {
        console.log(error)
    }
}

render(){
    return(  
    <> 
        
        <h4>{this.props.title}</h4>
        <Container className="ms-slider ms-slider--enlarge py-3">
            <Row className="ms-slider__inner ">
                <Tile/>
                
            </Row>
        </Container>
    </>
    )
  
}
   
}

export default Carousel 