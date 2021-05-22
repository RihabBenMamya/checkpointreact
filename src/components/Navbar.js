/*eslint-disable*/
import React from "react";

import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {

  return (
  <>
  <Navbar collapseOnSelect fixed='top' expand="sm" bg="transparent" variant="default">
  <Container>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
       <Nav.Link href="/">Home</Nav.Link>
        
        
    </Nav>
  </Navbar.Collapse>
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Nav.Link href="/form">Login</Nav.Link>
    </Navbar.Text>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    
  );
}
