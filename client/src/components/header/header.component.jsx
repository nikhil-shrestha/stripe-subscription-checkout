import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const { Brand, Toggle, Collapse } = Navbar;
const { Link } = Nav;

const Header = props => {
  const isAuthenticated = false;
  return (
    <Navbar bg="light" expand="lg">
      <Brand href="#home">React-Bootstrap</Brand>

      <Nav className="mr-auto">
        {isAuthenticated ? (
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Link href="#home">Home</Link>
        )}
      </Nav>
    </Navbar>
  );
};

Header.propTypes = {};

export default Header;
