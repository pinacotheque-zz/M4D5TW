import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Carousel from './components/Carousel';

function App() {
  return (
    <Container fluid>
      <Carousel title="Harry Potter"/>   
      <Carousel title="Lord of the Rings"/>      
      <Carousel title="The Matrix"/>         
    </Container>
  );
}

export default App;
