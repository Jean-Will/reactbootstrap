import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Navegation/Nav.css';

function Navegadores() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Jean Will</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/Jean-Will">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/jean-will-webdeveloper/">LinkdIn</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://smartcalculator-js.netlify.app/">Calculator in Js</NavDropdown.Item>
              <NavDropdown.Item href="https://forms-javascript.netlify.app/">
                Forms in Js
              </NavDropdown.Item>
              <NavDropdown.Item href="https://sysbanking-angular.netlify.app/">Angular Project</NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegadores;