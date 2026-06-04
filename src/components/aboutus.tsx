import React from 'react';
import about from "@/styles/About.module.css";
import { Container, Row, Col } from 'react-bootstrap';
import Home from '@/styles/Home.module.css'

const groupCompanies = [
  {
    label: "AUTOMATION & CONTROLS",
    title: "Fieldman Control System",
    image: "/valves.jpg",
    text:
      "A trusted division for industrial automation, factory automation, testing instruments, sensors and control products used across modern plant operations.",
  },
  {
    label: "SENSORS & MEASUREMENT",
    title: "Fieldman Sensors Pvt. Ltd.",
    image: "/Inverter.jpg",
    text:
      "An Indian manufacturer of standard and precision temperature measurement sensors serving steel, glass, petrochemical, power and furnace industries.",
  },
  {
    label: "FURNACE SOLUTIONS",
    title: "Fieldman Induction",
    image: "/pedestal-bearing.jpg",
    text:
      "Focused on induction furnace systems, selector switches, spares and allied products tested through a dedicated quality control process.",
  },
];

const AboutUs = () => {
  return (
    <section id="about-us" className="mt-5 mb-5">

      <Container className={Home.aboutSection}>

        <Row className={Home.aboutRow}>

          {/* LEFT SIDE */}

          <Col lg={6} md={12}>

            <div className={Home.aboutImageWrapper}>

              <img
                src="/AboutCompany.jpeg"
                alt="About Us"
                className={Home.aboutImage}
                loading="lazy"
              />

            </div>

          </Col>

          {/* RIGHT SIDE */}

          <Col lg={6} md={12}>

            <div className={Home.aboutContent}>

              <span className={Home.aboutTag}>
                ABOUT COMPANY
              </span>

              <h2 className={Home.aboutTitle}>
                Delivering Advanced Industrial
                Furnace Solutions Since 2014
              </h2>

              <p className={Home.aboutText}>

                We initially started our journey around 11 years back as
                <b> FIELDMAN CONTROL SYSTEM </b>
                but after achieving successful growth we launched our
                new venture
                <b> Fieldman Induction </b>
                in 2014.

                <br /><br />

                We are a proud manufacturer, supplier and exporter of
                products like
                <b>
                  {' '}Induction Furnace Coil,
                  Furnace Assembly,
                  Refractory Top Cast & Bottom Cast,
                  Hydraulic Power Pack,
                  Heating Furnace Spares
                </b>
                and many more.

                <br /><br />

                Our products are widely used in
                steel, petrochemical, glass,
                aerospace and plastic industries.

              </p>

            </div>

          </Col>

        </Row>

      </Container>  

      <Container className={about.groupSection}>
        <div className={about.groupHeading}>
          <span>FIELDman GROUP</span>
          <h2>Three focused organizations, one industrial standard.</h2>
        </div>

        <div className={about.companyGrid}>
          {groupCompanies.map((company, index) => (
            <article
              className={about.companyCard}
              key={company.title}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 120}
              data-aos-once="true"
            >
              <div className={about.companyImageWrap}>
                <img
                  src={company.image}
                  alt={company.title}
                  className={about.companyImage}
                  loading="lazy"
                />
              </div>

              <div className={about.companyContent}>
                <span>{company.label}</span>
                <h3>{company.title}</h3>
                <p>{company.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default AboutUs;
