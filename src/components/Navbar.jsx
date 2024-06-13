import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.jpg';

const NavBar = () => {
  return (
    <div>
      <div 
        style={{
          height: 50,
          backgroundColor: "#3949ab",
          padding: 7,
          fontSize: "150%",
          color: "black"
        }}
      >
        <b>For All The Contents Needs You are in the RIGHT PLACE</b>
      </div>
      <Navbar style={{ backgroundColor: "#c5cae9 !important" }} collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <h3 className="display-6">WriteMatics</h3>
            {/* <img src={Logo} alt="WriteMatics" height="40px" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="hero" smooth={true} duration={800}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="services" smooth={true} duration={800}>
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="contact" smooth={true} duration={800}>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
