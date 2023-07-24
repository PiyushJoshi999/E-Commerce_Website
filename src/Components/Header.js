import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  const cartItemCount = cartItems ? cartItems.length : 0;

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        {/* Add your logo or brand name */}
        <Navbar.Brand as={Link} to="/">
          ShopIt!
        </Navbar.Brand>

        {/* The following component will display a "hamburger" icon for mobile devices */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible menu items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Add your navigation links here */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store">
              Store
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
            About
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart: {cartItemCount}
            </Nav.Link>
            {/* Add more links as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
