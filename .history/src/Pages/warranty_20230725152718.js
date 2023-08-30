import * as React from "react";
import WarrantyCards from "../Layout/WarrantyCards";
import AOS from "aos";
import "aos/dist/aos.css";
import Steps from "../Components/main/steps.jsx";

export default function WarrantyGrid() {
  return (
    <div className="">
      <header className="header">
        <span className="head">Warranty Information</span>
        <h2 className="heading">Protect Your Investment</h2>
      </header>

      <div data-aos="fade-up">
        <Steps />
      </div>
      <div className="section-container">
        <WarrantyCards />
      </div>
    </div>
  );
}
