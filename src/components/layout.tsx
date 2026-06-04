import React, { ReactNode } from "react";
import Navigationbar from "./navbar";
import Footer from "./footer";
import Inquiry from "./contactForm";


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <style jsx>{`
        .maiin {
          display: grid;
          grid-template-areas:
            "head head head"
            "content content content"
            "foot foot foot";
          grid-template-rows: 71px auto 20px;
          min-height: 90vh;
        }
        .headeer {
          grid-area: head;
        }
        .articlee {
          grid-area: content;
          position: relative;
  z-index: 1;
        }
        .footeer {
          grid-area: foot;
        }
        @media (max-width: 768px) {
          .maiin {
            grid-template-rows: 65px auto 20px;
          }
        }
      `}</style>
      <div className="maiin">
        <div className="headeer">
          <Navigationbar />
        </div>

        <div className="articlee hideOverflowOnMobile">
          <main>{children}</main>{" "}
        </div>
        <Inquiry />
        <div className="footeer"> <Footer /></div>
      </div>
    </>
  );
}
