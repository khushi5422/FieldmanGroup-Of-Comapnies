import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Home from '@/styles/Home.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navigationbar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className={Home.customNavbar}
      >

        <Container fluid className={Home.navContainer}>

          {/* LOGO */}

          <Navbar.Brand href="/" className={Home.logoWrapper}>
            <img
              src="/logo.svg"
              alt="Logo"
              className={Home.navlogo}
              loading="lazy"
            />
          </Navbar.Brand>

          {/* MOBILE TOGGLE */}

          <Navbar.Toggle
            aria-controls="navbar-nav"
            className={Home.mobileToggle}
          />

          {/* NAV ITEMS */}

          <Navbar.Collapse
            id="navbar-nav"
            className={Home.navCollapse}
          >

            <Nav className={Home.centerNav}>

              <Nav.Link href="/" className={Home.navLink}>
                Home
              </Nav.Link>

              <Nav.Link href="/aboutus" className={Home.navLink}>
                About
              </Nav.Link>

              <NavDropdown
                title="Products"
                id="collapsible-nav-dropdown"
                className={Home.navDropdown}
              >

                <NavDropdown.Item href="/gallery">
                  Induction Furnace Assembly
                </NavDropdown.Item>

                <NavDropdown.Item href="/gallery">
                  Another action
                </NavDropdown.Item>

                <NavDropdown.Item href="#">
                  Something
                </NavDropdown.Item>

              </NavDropdown>

              <Nav.Link href="/contactus" className={Home.navLink}>
                Contact
              </Nav.Link>

              <Nav.Link href="/faq" className={Home.navLink}>
                FAQ
              </Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>
    </>
  );
};

export default Navigationbar;
