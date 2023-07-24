import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const Header = () => {
    return (
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          {/* Add your logo or brand name */}
          <Navbar.Brand href="/">ShopIt!</Navbar.Brand>
  
          {/* The following component will display a "hamburger" icon for mobile devices */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
          {/* Collapsible menu items */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Add your navigation links here */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/store">Store</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              {/* Add more links as needed */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Header;
  