import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../store/auth-context';

const Header = ({ cartItems }) => {
  const cartItemCount = cartItems ? cartItems.length : 0;
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

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
          <Nav className="justify-content-center flex-grow-1 pe-3 me-auto">
          <>
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
                <Nav.Link as={Link} to="/contactus">
                  Contact Us
                </Nav.Link>
                <Button onClick={logoutHandler}>Logout</Button>
              </>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
