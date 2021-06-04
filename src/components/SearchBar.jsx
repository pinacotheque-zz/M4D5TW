import { Component } from "react"
import TilesList from './TilesList'
import {Form, FormControl, Button, Container} from 'react-bootstrap' 
    
class SearchBar extends Component {
    render(){
        return(
        <Container fluid>
         <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
        </Container>
        )
    }
}
       
export default SearchBar