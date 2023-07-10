import React from "react";
import { Helmet } from "react-helmet";
import Partners from "../Components/partners.js";
import Expertise from "../Components/expertise.js";
import Testimonials from "../Components/testi/testimonials.js";
import Hero2 from "../Components/main/hero2.jsx";


const Home = () => {
	return (
		<><section className="home-main">
		<Hero2 />
		</section>
		<div className="home-container">
			<Helmet
				title="GRELL ROOFING | Home"
				meta={[
					{ name: "description", content: "Home page for the website." },
					{ name: "keywords", content: "roofing, construction, home" }
				]} />
			<Expertise />
			<Partners />
			<Testimonials />
		</div>
		</>
	);
};

export default Home;
