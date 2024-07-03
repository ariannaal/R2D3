import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


const MyNavbar = () => (
    <>
        
    <Navbar className="bg-body-tertiary" data-bs-theme="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home">
        <Image src="/assets/netflix_logo.png" fluid className='logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/tv-shows" className="nav-link">TV Shows</Link>
            <Link to="/movies" className="nav-link">Movies</Link>
            <Link to="/recently-added" className="nav-link">Recently Added</Link>
            <Link to="/my-list" className="nav-link">My List</Link>
        </Nav>
        <Nav className="ms-auto d-flex flex-row align-items-center">
          <Image
            src="/assets/search.svg"
            alt="search"
            style={{ height: '1.2rem' }}
            id="search-icon"
            className="me-3"
          />
          <div className="text-white me-3">KIDS</div>
          <Image
            src="/assets/bell-solid.svg"
            alt="notification menu"
            style={{ height: '1.2rem' }}
            id="notification"
            className="me-3"
          />
          <NavDropdown
            title={<Image src="/assets/avatar.png" alt="avatar" style={{ height: '2rem' }} />}
            id="navbarDarkDropdownMenuLink"
            align="end"
            className="dropdown-menu-dark"
          >
            <NavDropdown.Item href="areapersonale.html">Area Personale</NavDropdown.Item>
            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
);

export default MyNavbar;