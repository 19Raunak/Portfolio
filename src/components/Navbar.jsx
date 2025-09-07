import { useState } from "react";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <BsNavbar
      expand="lg"
      bg="dark"
      variant="dark"
      expanded={expanded}
      className="shadow-sm fixed-top"
    >
      <Container>
        <BsNavbar.Brand href="#about">Raunak Tiwari</BsNavbar.Brand>
        <BsNavbar.Toggle
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <BsNavbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link href="#projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
