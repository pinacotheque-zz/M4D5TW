import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './component/Navbar'
import MyFooter from './component/Footer'
import { Container } from 'react-bootstrap';
import Carousel from './components/Carousel';

function App() {
  return (
    <Container fluid className="MainParent">
      <MyNav />
      <Container fluid>
        <Carousel title="Harry Potter"/>   
        <Carousel title="Lord of the Rings"/>      
        <Carousel title="The Matrix"/>         
      </Container>
      <MyFooter/>
    </Container>
  );
}

export default App;
