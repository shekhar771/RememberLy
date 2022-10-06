/** @format */

import React from 'react';
import NavLinks from './NavLinks';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from './../../atoms/Button';
import './Navbar.css';

const Header = () => {
  return (
    <Navbar className="todo-app-navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="todo-logo"
            alt="Rememberly"
            style={{ width: '10px' }}
            src={process.env.PUBLIC_URL + '/logoBack.png'}
            data-src={process.env.PUBLIC_URL + '/logoBack.png'}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <NavLinks />
      </Container>
    </Navbar>
  );
};

export default Header;
