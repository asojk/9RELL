import React from "react";
import TailContent from "../Layout/TailContent";
import TailFlexCards from "../Layout/TailFlexCards";

const NewRoof = () => {
  return (
    <div className="page-container" style={{}}>
      <header className="header">
        <span className="head">Commercial Roofing</span>
        <h2 className="heading">New Construction</h2>
      </header>
      <div className="section-container" style={{}}>
        <TailFlexCards />
        <TailContent />
      </div>
    </div>
  );
};

export default NewRoof;
