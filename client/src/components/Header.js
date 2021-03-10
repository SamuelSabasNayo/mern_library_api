import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>MERN LIBRARY</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/books">
                  <NavLink>
                      <i className="fas fa-book" size='lg' /> MY BOOKS
                  </NavLink>
                </LinkContainer>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
  )
}

export default Header;
