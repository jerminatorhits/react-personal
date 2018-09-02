import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import linkedinLogo from '../../logos/linkedin.png';
import githubLogo from '../../logos/github.svg';
import mediumLogo from '../../logos/medium.png';
import './style.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

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
            <NavItem eventKey={1} href="#portfolio">
              Portfolio
            </NavItem>
            <NavItem eventKey={2} href="#music">
              Music Production
            </NavItem>
             <NavItem eventKey={3} href="#traveling">
              Traveling
            </NavItem>
          </Nav>
          <Nav className="nav-right" pullRight>
            <NavItem className="reduce-a-padding" eventKey={4} href="https://medium.com/@jeremykwa">
              <img alt="medium-logo" className="invert-img" id="medium-logo" src={mediumLogo} height={40} />
            </NavItem>
            <NavItem className="reduce-a-padding" eventKey={5} href="https://github.com/jerminatorhits">
              <img alt="github-logo" className="invert-img" src={githubLogo} height={40} />
            </NavItem>
            <NavItem className="reduce-a-padding" eventKey={6} href="https://www.linkedin.com/in/jeremykwa/">
              <img alt="linkedin-logo" src={linkedinLogo} height={40} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
