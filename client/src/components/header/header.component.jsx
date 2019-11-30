import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = ({ brand, route, isAuthenticated }) => {
  return (
    <Navbar className="light justify-content-between" expand="lg">
      <Container>
        <Navbar.Brand> {brand}</Navbar.Brand>

        <Nav>
          {isAuthenticated ? (
            <NavDropdown
              title="nikhil.shrestha1995@gmail.com"
              id="basic-nav-dropdown"
              alignRight
            >
              <NavDropdown.Item href="#action/3.1">Manage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            route
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {};

export default Header;
