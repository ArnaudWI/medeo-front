import React, { Component } from 'react';
import smoothScroll from 'smoothscroll-polyfill';
//import reactstrap elements
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
//import assets
import logo from '../assets/logo-medeo.png';

// Polyfill for function scrollIntoView
smoothScroll.polyfill();

class Header extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <Navbar light expand="md">
            <NavbarBrand href="/">
              <img src={logo} alt='logo Medeo'/>
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => {
             			 document.getElementById("practitioner").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}}>
                   My Practitioner
                </NavLink>
              </NavItem>
              <NavItem style={styles.navItems}>
                <NavLink onClick={() => {
                   document.getElementById("device").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}}>
                   My Device
                </NavLink>
              </NavItem>
              <NavItem style={styles.navItems}>
                <NavLink onClick={() => {
                   document.getElementById("management").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}}>
                   Device Management
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;

const styles = {
  container: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 1160,
  },
  navItems: {
    marginLeft: 10,
  }
}
