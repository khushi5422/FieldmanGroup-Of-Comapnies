import ScaleCarousel from "@/components/scalecarousel";
import { EmblaOptionsType } from "embla-carousel";
import Head from "next/head";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from "react";
import { Container } from "react-bootstrap";

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const toggleAccordion = (targetId: string) => {
    setActiveAccordion((prev) => (prev === targetId ? null : targetId));
  };
  const accordionItems = [
    {
      title: "Ordering Process",
      description:
        "This is the first items accordion body. It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
      title: "Shipping and Delivery",
      description:
        "This is the second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
      title: "Product Information",
      description:
        "This is the third items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
      title: "Payment Methods.",
      description:
        "This is the third items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
  ];

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT2 = 10
  const SLIDES = Array.from(Array(SLIDE_COUNT2).keys())
  return (
    <>
      <Head>
        <title>FREQUENTLY ASKED QUESTIONS</title>
        <meta name="description" content="Frequently Asked Questions" />
      </Head>
      <Row className="mt-5 p-3">
        <Col className="border" >
          <div className="font-weight-bold text-center">
            Fieldman Control System
          </div>
          <ScaleCarousel slides={SLIDES} options={OPTIONS} /> </Col>
        <Col className="border" >
          <div className="font-weight-bold text-center">
            Fieldman Induction
          </div>
          <ScaleCarousel slides={SLIDES} options={OPTIONS} /> </Col>
        <Col className="border" >
          <div className="font-weight-bold text-center">
            Fieldman Sensors Pvt Ltd
          </div>
          <ScaleCarousel slides={SLIDES} options={OPTIONS} /> </Col>

      </Row>

      <h2 className="p-2 text-center mt-1">FREQUENTLY ASKED QUESTIONS</h2>
      <Container className="mb-5">
        <div className="accordion" id="accordionExample">
          {accordionItems.map((item, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button${activeAccordion === `collapse${index + 1}` ? " active" : ""
                    }`}
                  type="button"
                  onClick={() => toggleAccordion(`collapse${index + 1}`)}
                  aria-expanded={
                    activeAccordion === `collapse${index + 1}` ? "true" : "false"
                  }
                  aria-controls={`collapse${index + 1}`}
                >
                  {item.title}
                </button>
              </h2>
              <div
                id={`collapse${index + 1}`}
                className={`accordion-collapse collapse${activeAccordion === `collapse${index + 1}` ? " show" : ""
                  }`}
                aria-labelledby={`heading${index + 1}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>{item.description}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Container />
      </Container>
    </>
  );
};