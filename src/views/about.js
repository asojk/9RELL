import React from "react";

import Bullets from "../components/about/bullets.js";
import Cards from "../components/about/cards.js";
import Footer from "../components/fknround/footer1.js";
import NextNav from "../components/HOC/NextNav";

const About = () => {
	return (
		<div className="page-container">
			<NextNav />
			<Bullets />
			<Cards />
			<iframe
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
			<Footer />
		</div>
	);
};

export default About;
