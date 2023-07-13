import React from 'react';
import Mark from './mark.js';

const Bullets = () => (
  <section className="section-container">
    <header className="header">
      <span className="head">About GRELL</span>
      <h2 className="heading">Commercial Roofing Pros</h2>
    </header>
    <div className="section-description">
      <p className="content">
        For 30 years and more than 12 million square feet of roofing
        application, Grell Roofing has served Iowa and the Upper Midwest’s
        commercial and industrial roofing needs. We’re a family-owned firm with
        an outstanding reputation for workmanship, quality, and customer
        support. Additionally, all Duro-Last roofing is manufactured and created
        in the state of Iowa. Grell Roofing LLC is fully licensed, bonded and
        insured. We take the responsibility of safety and quality seriously.
        We’re proud to say we’ve been a Duro-Last Elite Contractor for over 15
        years. To read our latest achievement click on this link Duro-Last Elite
        Award."
      </p>
    </div>
    <div className="bullets-checkmarks">
      <span className="bullets-section1 section-head">What we do</span>
      <Mark Label="New Construction"> </Mark>
      <Mark Label="Preventive Maintenance"> </Mark>
      <Mark Label="Metal Retrofit Roofing"> </Mark>
      <Mark Label="Thermal Imaging"> </Mark>
      <Mark Label="Metal Retrofits"> </Mark>
      <Mark Label="Insulation" />
      <Mark Label="24/7 Emergency Repair"> </Mark>
      <Mark Label="Disaster Storm Damage Response"> </Mark>
      <Mark Label="National & Regional Accounts"> </Mark>
      <Mark Label="Consultation, Inspection, Expertise"> </Mark>
    </div>
  </section>
);

export default Bullets;
