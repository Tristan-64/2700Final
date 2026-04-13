import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const Navigation = () => (
  <div className="navbar">
    <Navbar>
      <Nav>
        <a href="/" className = "links">Home</a>
        <a href="/pages/Info" className = "links">Info</a>
      </Nav>
    </Navbar>
  </div>
);

export default Navigation;