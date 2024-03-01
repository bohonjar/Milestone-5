import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const navLinkStyle = {
    color: 'white',
    padding: '5px'
  };

  const navBrandStyle = {
    padding: '10px'
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Navbar.Brand href="/home-page" style={navBrandStyle}>Read-A-Lot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home-page" style={navLinkStyle}>Home</Nav.Link>
          <Nav.Link href="/view-books" style={navLinkStyle}>View Books</Nav.Link>
          <Nav.Link href="/view-authors" style={navLinkStyle}>View Authors</Nav.Link>
          <Nav.Link href="/create-a-book" style={navLinkStyle}>Add New Books</Nav.Link>
          <Nav.Link href="/modify-a-book" style={navLinkStyle}>Modify Books</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
