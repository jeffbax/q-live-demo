import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap/lib';
import { IndexLinkContainer } from 'react-router-bootstrap';

import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <Navbar className="Navigation">
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to="/">
                <a>
                  <img src="/q-live-logo.png" title="Q-Live" alt="Q-Live" className="nav-logo" />
                </a>
            </IndexLinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
           <IndexLinkContainer to='/servers/'>
            <NavItem>Servers</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/rankings/">
            <NavItem>Rankings</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/about/">
            <NavItem>About</NavItem>
          </IndexLinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
