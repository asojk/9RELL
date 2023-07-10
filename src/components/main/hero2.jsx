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
      style={{ 
        zIndex: "99"

        }}
      direction="row"
      justifyContent="center"
      alignItems="center">

    <Grid xs={12} md={6} spacing={2} direction="row">
            <Swipe />
          </Grid>

      <Grid xs={12} md={6} direction="row">
        <Heading />
          <Grid xs={12} md={4} direction="column">
            <CTA />
          </Grid>
          <Grid xs={12} md={4} direction="column">
            <Badges />
          </Grid>
      </Grid>

    </Grid>
  );
};

export default Hero2;