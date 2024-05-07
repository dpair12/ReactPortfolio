import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import NavBarHeader from '../NavBarHeader/NavBarHeader.jsx';

function CustomNavBar() {
  const location = useLocation();

  const isPageActive = (page) => {
    return location.pathname === page ? { color: 'yellow' } : { color: 'white' };
  };

  return (
    <>
      <Navbar style={NavBarHeader} bg="light" expand="lg" data-bs-theme="light">
        <Navbar.Brand style={{ fontSize: "25px", color: "white" }} href="/">De'Sean Pair</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"> {/* Aligns items to the right */}
            <Nav.Link style={{ fontSize: "20px", ...isPageActive('/') }} href="/">About Me</Nav.Link>
            <Nav.Link style={{ fontSize: "20px", ...isPageActive('/portfolio') }} href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link style={{ fontSize: "20px", ...isPageActive('/contact') }} href="/contact">Contact</Nav.Link>
            <Nav.Link style={{ fontSize: "20px", ...isPageActive('/resume') }} href="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default CustomNavBar;