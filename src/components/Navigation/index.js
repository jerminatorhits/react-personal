import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import linkedinLogo from '../../logos/linkedin.png';
import githubLogo from '../../logos/github.svg';
import mediumLogo from '../../logos/medium.png';
import './style.css';

class Navigation extends Component {
  render() {
    return (
      <Navbar className="navbar-color" inverse collapseOnSelect fixedTop>
        <Navbar.Header className="navbar-height">
          <Navbar.Brand>
            <a href="#brand">Jeremy Kwa</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Portfolio
            </NavItem>
            <NavItem eventKey={2} href="#">
              Music Production
            </NavItem>
             <NavItem eventKey={3} href="#">
              Traveling
            </NavItem>
          </Nav>
          <Nav className="nav-right" pullRight>
            <NavItem className="reduce-a-padding" eventKey={1} href="#">
              <img className="invert-img" id="medium-logo" src={mediumLogo} height={40} />
            </NavItem>
            <NavItem className="reduce-a-padding" eventKey={1} href="#">
              <img className="invert-img" src={githubLogo} height={40} />
            </NavItem>
            <NavItem className="reduce-a-padding" eventKey={2} href="#">
              <img src={linkedinLogo} height={40} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
