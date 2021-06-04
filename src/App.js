import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'
import MyFooter from './components/Footer'
import { Container } from 'react-bootstrap';
import Carousel from './components/Carousel';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <MyNav />
      <SearchBar/>
      <Container fluid>
        <Carousel title="Harry Potter"/>   
        <Carousel title="Lord of the Rings"/>      
        <Carousel title="The Matrix"/>         
      </Container>
      <MyFooter/>
    </div>
  );
}

export default App;
