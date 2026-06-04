import Link from "next/link";
import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Home from '@/styles/Home.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

const productOrganizations = [
  {
    name: "Fieldman Induction",
    description: "Induction furnace, heating systems and furnace spares.",
    groups: [
      {
        title: "Induction Furnace",
        items: ["Furnace Assembly", "Furnace Coil", "Water Cooled Cable"],
      },
      {
        title: "Heating Spares",
        items: ["Heating Furnace Spares", "Lead Adaptors", "Selector Switch"],
      },
    ],
  },
  {
    name: "Fieldman Sensors",
    description: "Temperature, pressure and industrial sensing products.",
    groups: [
      {
        title: "Temperature Sensors",
        items: ["Thermocouple Wire", "Temperature Gauge", "Heater"],
      },
      {
        title: "Industrial Controls",
        items: ["Pressure Gauge", "Controllers", "Automation Products"],
      },
    ],
  },
  {
    name: "Fieldman Control System",
    description: "Automation, instruments and factory control solutions.",
    groups: [
      {
        title: "Automation",
        items: ["Inverter", "Rotary Encoder", "Proximity Sensor"],
      },
      {
        title: "Industrial Materials",
        items: ["FRP Washers", "Teflon Sheet", "Mica Washer"],
      },
    ],
  },
];

const Navigationbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const closeProductsMenu = () => {
    setIsProductsOpen(false);
  };

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
                renderMenuOnMount
                show={isProductsOpen}
                onToggle={(isOpen) => setIsProductsOpen(isOpen)}
              >
                <div className={Home.megaMenu}>
                  <div className={Home.megaIntro}>
                    <span className={Home.megaEyebrow}>PRODUCT RANGE</span>
                    <h3>Explore by organization</h3>
                    <p>
                      Browse our major product lines across induction,
                      sensors, automation and industrial materials.
                    </p>
                    <Link
                      href="/gallery"
                      className={Home.megaCta}
                      onClick={closeProductsMenu}
                    >
                      View all products
                    </Link>
                  </div>

                  <div className={Home.megaGrid}>
                    {productOrganizations.map((organization, orgIndex) => (
                      <div className={Home.megaColumn} key={organization.name}>
                        <div className={Home.organizationHeader}>
                          <span>{String(orgIndex + 1).padStart(2, "0")}</span>
                          <div>
                            <h4>{organization.name}</h4>
                            <p>{organization.description}</p>
                          </div>
                        </div>

                        {organization.groups.map((group) => (
                          <div className={Home.productGroup} key={group.title}>
                            <Link
                              href="/gallery"
                              className={Home.productMainLink}
                              onClick={closeProductsMenu}
                            >
                              {group.title}
                            </Link>

                            <div className={Home.subProductList}>
                              {group.items.map((item) => (
                                <Link
                                  href="/gallery"
                                  key={item}
                                  onClick={closeProductsMenu}
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </NavDropdown>

              <Nav.Link href="/contactus" className={Home.navLink}>
                Contact
              </Nav.Link>

              <Nav.Link href="/faq" className={Home.navLink}>
                FAQ
              </Nav.Link>

              <Nav.Link href="/contactus" className={Home.quoteButton}>
                Get Quote
              </Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>
    </>
  );
};

export default Navigationbar;
