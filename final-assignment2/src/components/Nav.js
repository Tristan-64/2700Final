import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Navbar className = "navbar">
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/pages/Info">Info</Nav.Link>
        </Nav>
  </Navbar>
);

export default Navigation;