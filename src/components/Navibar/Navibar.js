import React from 'react'
// import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Navibar = () => {
  return (
    <>
        {/* <Nav>
            <NavLink to="/">
                <a class="D_fa D_fQ" href="/"><svg height="20" viewBox="0 0 80 80" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M69.57 6.55V3.69A3.69 3.69 0 0065.87 0h-9.3a3.69 3.69 0 00-3.7 3.7v2.04H15.05C10.21 5.74 3 8.94 3 17.79v49.83c0 4.85 3.21 12.06 12.05 12.06H64.9c4.85 0 12.05-3.21 12.05-12.06V17.8c0-3.87-2.05-9.23-7.37-11.24" fill="#ffffff"></path><path d="M63.64 40.5h-6.1a2.2 2.2 0 100 4.42h6.1a2.21 2.21 0 100-4.42m-9.63-4.04a2.2 2.2 0 002.91 1.12l5.57-2.48a2.2 2.2 0 10-1.8-4.04l-5.56 2.48A2.2 2.2 0 0054 36.46m-.64-5.33l4.08-4.53a2.2 2.2 0 10-3.28-2.96l-4.08 4.53a2.2 2.2 0 00.16 3.12 2.2 2.2 0 003.12-.16" fill="#2c2c2d"></path><path d="M47.5 58.74a2.2 2.2 0 00-2.78-1.42 15.37 15.37 0 11-4.75-29.97 15.37 15.37 0 014.75.75 2.21 2.21 0 002.78-1.42l1.89-5.8a2.21 2.21 0 00-1.42-2.78 25.87 25.87 0 00-8-1.27 25.88 25.88 0 108 50.5 2.2 2.2 0 001.42-2.8l-1.89-5.8" fill="#2c2c2d"></path><path d="M53.37 54.29a2.21 2.21 0 00-3.28 2.96l4.08 4.53a2.21 2.21 0 003.28-2.96l-4.08-4.53m9.13-3.97l-5.58-2.48a2.21 2.21 0 00-1.8 4.03l5.58 2.49a2.21 2.21 0 001.8-4.04" fill="#2c2c2d"></path></g></svg></a>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>

        <Navbar bg="dark" expand="lg">
        <Container>
            <LinkContainer to="Home">
                <Navbar.Brand>
                    <a class="D_fa D_fQ" href="/"><svg height="20" viewBox="0 0 80 80" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M69.57 6.55V3.69A3.69 3.69 0 0065.87 0h-9.3a3.69 3.69 0 00-3.7 3.7v2.04H15.05C10.21 5.74 3 8.94 3 17.79v49.83c0 4.85 3.21 12.06 12.05 12.06H64.9c4.85 0 12.05-3.21 12.05-12.06V17.8c0-3.87-2.05-9.23-7.37-11.24" fill="#ffffff"></path><path d="M63.64 40.5h-6.1a2.2 2.2 0 100 4.42h6.1a2.21 2.21 0 100-4.42m-9.63-4.04a2.2 2.2 0 002.91 1.12l5.57-2.48a2.2 2.2 0 10-1.8-4.04l-5.56 2.48A2.2 2.2 0 0054 36.46m-.64-5.33l4.08-4.53a2.2 2.2 0 10-3.28-2.96l-4.08 4.53a2.2 2.2 0 00.16 3.12 2.2 2.2 0 003.12-.16" fill="#2c2c2d"></path><path d="M47.5 58.74a2.2 2.2 0 00-2.78-1.42 15.37 15.37 0 11-4.75-29.97 15.37 15.37 0 014.75.75 2.21 2.21 0 002.78-1.42l1.89-5.8a2.21 2.21 0 00-1.42-2.78 25.87 25.87 0 00-8-1.27 25.88 25.88 0 108 50.5 2.2 2.2 0 001.42-2.8l-1.89-5.8" fill="#2c2c2d"></path><path d="M53.37 54.29a2.21 2.21 0 00-3.28 2.96l4.08 4.53a2.21 2.21 0 003.28-2.96l-4.08-4.53m9.13-3.97l-5.58-2.48a2.21 2.21 0 00-1.8 4.03l5.58 2.49a2.21 2.21 0 001.8-4.04" fill="#2c2c2d"></path></g></svg></a>
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to="Home">
                    <Nav.Link className="signUp"><span className="signUp">Sign up</span></Nav.Link>
                </LinkContainer>
                <NavDropdown className="navDropdown dropdownText" title="Dropdown" id="basic-nav-dropdown" renderMenuOnMount={true}>
                    <LinkContainer to="about">
                        <NavDropdown.Item><span classname="aboutText">about</span></NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="services">
                        <NavDropdown.Item><span classname="servicesText">services</span></NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="contact">
                        <NavDropdown.Item><span classname="contactText">contact</span></NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar> */}
    </>
  )
}

export default Navibar