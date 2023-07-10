import React from "react";
import Swipe from "./swiper.jsx";
import Heading from "./heading.jsx";
import Badges from "./badges";
import CTA from "./cta";

import Grid from '@mui/material/Grid';

const Hero2 = () => {
  return (
    <Grid 
      container
      style={{ zIndex: "99" }}>

      <Grid item xs={12} md={6}>
        <Swipe />
      </Grid>

      <Grid item xs={12} md={6}>
        <Heading />
        <Grid container direction="row"
        style={{ zIndex: "99" }}>
          <Grid item xs={12} md={6}>
            <CTA />
            <p className="main-description">Grell exists to provide top-notch quality commercial roofing services, while delivering exceptional customer satisfaction. The company holds core values in honesty, reliability, and expertise.</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <Badges />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero2;