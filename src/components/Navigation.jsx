import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

function Navigation() {
  const { pathname } = useLocation(); // Use destructuring to extract pathname from location
  const [activeButton, setActiveButton] = useState(pathname); // Store the active button path

  useEffect(() => {
    setActiveButton(pathname); // Update active button on path change
  }, [pathname]); // Only depend on pathname for optimization

  const handleButtonClick = (path) => {
    setActiveButton(path); // Update active button on click
  };

  const logo = "<mods/>";
  return (
    <Navbar expand="md" className="nav-color">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <i>{logo}</i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav .ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav .ms-auto">
          <Nav className="navigation-bar ms-auto">
            <Nav.Link id="navbar-home">
              <Button
                className={activeButton === "/" ? "nav-dark" : "nav-link"}
                as={Link}
                to="/"
                onClick={() => handleButtonClick("/")}
                variant={activeButton === "/" ? "dark" : "link"}
              >
                Home
              </Button>
            </Nav.Link>
            <Nav.Link id="navbar-modules">
              <Button
                className={
                  activeButton === "/modules" ? "nav-dark" : "nav-link"
                }
                as={Link}
                to="/modules"
                onClick={() => handleButtonClick("/modules")}
                variant={activeButton === "/modules" ? "dark" : "link"}
              >
                Modules
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
