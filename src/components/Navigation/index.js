import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import { IndexLinkContainer } from 'react-router-bootstrap';

import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to="/">
              <a>Home</a>
            </IndexLinkContainer>
            <IndexLinkContainer to="/rankings">
              <a>Rankings</a>
            </IndexLinkContainer>
            <IndexLinkContainer to="/about">
              <a>About</a>
            </IndexLinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Navigation;
