import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Maintenance = () => (
  <div className="page-container">
    <motion.div enter={{ opacity: 1 }}>
      <div className="page-container">
        <Helmet
          title="GRELL | Flat Roof Maintenance"
          meta={[
            {
              name: "description",
              content:
                "As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.",
            },
            {
              name: "keywords",
              content:
                "roofing, construction, reapir, flat, flat-roof, roof repair",
            },
            { name: "view-transition", content: "same-origin" },
          ]}
        />
        <div className="replace-replace">
          <div className="replace-heading">
            <span className="replace-heading">
              Flat Roof Maintenance Program
            </span>
          </div>
          <p className="replace-text">
            As a commercial property owner, we understand that you don’t have
            time to constantly keep up with your roof maintenance. You may not
            even know how to. Leave that up to us and sign up for one of our
            flat roof maintenance contracts. Among other benefits, we inspect
            your roof every year, report any problems, and also provide
            solutions on how to best address them. This way, you have one less
            thing to worry about, and you’re positioned to save time and money.
            We offer flat roof maintenance contracts to clients throughout Iowa
            and the surrounding states, so contact us to sign up today.
          </p>
          <span className="replace-head">
            What Is Included In The Yearly Flat Roof Inspection?
          </span>
          <p className="replace-text">
            As part of our maintenance program, you will receive a free basic
            preventative maintenance inspection every year to ensure your roof
            is performing as it should. When one of our technicians arrives at
            your property for an inspection, you can expect them to do the
            following:
            <br />
            <br />
            <ul>
              <li>Inspect critical areas of your roof</li>
              <li>
                Clean environmental debris from waterways to promote drainage
              </li>
              <li>
                Report any damages or maintenance issues that need to be
                addressed
              </li>
            </ul>
            <br />
            <br />
            Without any effort on your end, a yearly flat roof inspection will
            allow you to be proactive instead of reactive when it comes to
            protecting your business.
          </p>
          <span className="replace-head">
            Our Commercial Roof Repair Services
          </span>
          <p className="replace-text">
            As a midwestern company, we fully understand how harsh winters and
            humid summers can take a toll on even the sturdiest of roofs. That
            is why we offer comprehensive flat roof repair services to cover
            just about any situation you may face. These include:
            <br />
            <br />
            <ul>
              <li>Roof Leaks</li>
              <li>Holes/Punctures in Roof</li>
              <li>Duro-Last Repairs</li>
              <li>EPDM Repairs</li>
              <li>Metal Roof Repairs</li>
              <li>Ballasted Roof Repairs</li>
              <li>TPO Repairs</li>
              <li>Seal in Seams &amp; Penetrations</li>
              <li>Ensure Proper Flashings</li>
              <li>Ensure Roof is Draining Properly</li>
              <li>Wind &amp; Hail Damage Repairs</li>
            </ul>
            <br />
            If you are experiencing a flat roofing issue not listed above, still
            contact us today. We are confident that we can provide the flat roof
            repairs you need.
          </p>
          <span className="replace-head">
            Why Grell’s Commercial Roof Maintenance Plan?
          </span>
          <p className="replace-text">
            If you’ve never considered a maintenance plan for your commercial
            roof, you may not recognize the compounding benefits. Some of the
            benefits of Grell’s commercial roofing maintenance plan include:
            <ul>
              <li>Free yearly inspection & cleaning service</li>
              <li>Protects your capital investment</li>
              <li>Prevents leaks</li>
              <li>Protects the inside of your facility</li>
              <li>Prevents productions delays</li>
              <li>Prevents loss of inventory</li>
              <li>Prevents employee accidents</li>
              <li>No hassle or work for you</li>
              <li>
                Keep your building protected and contact us today to learn more
                or sign up for one of our flat roof maintenance contracts.
              </li>
            </ul>
            <br />
            If you are experiencing any of the issues above or even another type
            of problem with your flat roof, contact us today for a free
            inspection.
          </p>
          <span className="replace-head">Emergency Flat Roof Repairs</span>
          <p className="replace-text">
            At Grell, we always strive to serve our customers as quickly and
            efficiently as possible. We understand, though, that some issues can
            not wait even a day. That is why we offer a 24/7 emergency flat roof
            repair services for situations that are serious safety hazards. If
            you need immediate assistance, call today.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default Maintenance;
