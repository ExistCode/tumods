import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  const logo = "<mods/>";
  return (
    <Navbar expand="md" className="nav-color">
      <Container>
        <Navbar.Brand href="/">{logo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav .ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav .ms-auto">
          <Nav className="navigation-bar ms-auto">
            <Nav.Link id="navbar-home active" href="/">
              Home
            </Nav.Link>
            <Nav.Link id="navbar-modules active" href="modules">
              Modules
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
