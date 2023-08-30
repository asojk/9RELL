import React from "react";

import Bullets from "../Components/about/bullets.js";
import Cards from "../Components/about/cards.js";
import Team from "../Components/about/team.jsx";

const About = () => (
  <section className="home-container">
    <Bullets />
    <Cards />
    <Team />
    <iframe
      style={{ zIndex: "999", padding: "0", margin: "0" }}
      width="100%"
      height="100%"
      title="map"
      src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=cyprus&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      id="i72hyt"
    />
  </section>
);

export default About;
