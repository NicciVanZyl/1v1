import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { List } from "react-bootstrap-icons";

function Navigation() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <Navbar expand="lg" className="fixed-top navBackground" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="Logo" to="#">
            1V1
          </Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <List color="white" size={30} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navBarLinks">
            <Nav.Link
              className={isActive("/") ? "active link" : "link"}
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={isActive("/comparison") ? "active link" : "link"}
              as={Link}
              to="/comparison"
            >
              Compare Stats
            </Nav.Link>
            <Nav.Link
              className={isActive("/timeline") ? "active link" : "link"}
              as={Link}
              to="/timeline"
            >
              Timeline
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
