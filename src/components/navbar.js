import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {List} from 'react-bootstrap-icons';

function Navigation() {
  return (
    <Navbar expand="lg" className="fixed-top navBackground" variant='dark'>
      <Container>
        <Navbar.Brand><Link className='link Logo' to='/'>1V1</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <List color="white" size={30} />

        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className='link' to='/'>Home</Link> </Nav.Link>
            <Nav.Link><Link className='link' to='/comparison'>Compare Stats</Link> </Nav.Link>
            <Nav.Link><Link className='link' to='/timeline'>Timeline</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;