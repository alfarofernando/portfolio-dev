import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      bg="dark"
      data-bs-theme="dark"
      expand="md    "
      className="bg-body-dark"
    >
      <Container>
        <Navbar.Brand href="#home">AlfaDeveloper</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <NavDropdown title="Proyectos" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Sobre Mi</Nav.Link>
            <Nav.Link href="#estudios">Estudios</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
