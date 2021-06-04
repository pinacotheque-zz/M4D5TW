import {Badge} from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './component/Navbar'
import MyFooter from './component/Footer'

function App() {
  return (
    <div className="App">
  
        <MyNav />
      <MyFooter/>
    </div>
  );
}

export default App;
