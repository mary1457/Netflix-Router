import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'
const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo}

            height="50"
            alt="Netflix Logo"
            loading="lazy"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent">

        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
        
        
          <Link to="/" className="text-decoration-none text-white nav-link">
              Home
              </Link>
          
           
            
            <Link to="/tv-show" className="text-decoration-none text-white nav-link">

              TV Shows
              </Link>
           
            <Nav.Link href="#" className="text-white">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              My List
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="text-white">
              <FaSearch size={20} color="white" />
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              KIDS
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              <FaBell size={20} color="white" />
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              <CgProfile size={24} color="white" />
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
