//import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Inventory from './components/inventory';
import Login from './components/login';
import About from './components/about';
import Activity from './components/activity';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Azure Inventory Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to = "/">Login</Nav.Link>
            <Nav.Link as={Link} to = "/Inventory">Inventory</Nav.Link>
            <Nav.Link as={Link} to = "/Activity">Activity</Nav.Link>
            <Nav.Link as={Link} to = "/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path='/' element = {<Login/>}/>
          <Route path='/Inventory' element = {<Inventory/>}/>
          <Route path='/Activity' element = {<Activity/>}/>
          <Route path='/About' element = {<About/>}/>
        </Routes>
      </div>
 </div>
 </BrowserRouter>
  );
}

export default App;
