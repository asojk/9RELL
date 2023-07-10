import React from "react";
import Grid from '@mui/material/Grid';

import Badges from "./badges";
import CTA from "./cta";


const Main = () => {
	
	return (
		
		<Grid container style={{ zIndex: "99", padding: "2rem" }}>
			<Grid xs={12} md={8}>
				<CTA />
			</Grid>
			<Grid xs={12} md={4}>
				<Badges />
			</Grid>
		</Grid>
  );
};

export default Main;
