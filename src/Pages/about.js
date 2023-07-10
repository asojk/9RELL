import React from "react";

import Bullets from "../Components/about/bullets.js";
import Cards from "../Components/about/cards.js";

const About = () => {
	return (
	<section className="home-container">
				<Bullets />
				<Cards />
			<iframe
				style={{ zIndex: "999", padding: "0", margin: "0" }}
				frameborder="0"
				width="100%"
				height="100%"
				marginheight="0"
				marginwidth="0"
				title="map"
				scrolling="no"
				src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=cyprus&ie=UTF8&t=&z=14&iwloc=B&output=embed"
				id="i72hyt"
			></iframe>
		</section>
	);
};

export default About;
