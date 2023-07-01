import React from "react";

import { Helmet } from "react-helmet";
import Footer1 from "../components/fknround/footer1.js";
import Partners from "../components/partners.js";
import Expertise from "../components/expertise.js";
import Main from "../components/main/main.js";
import Wave from "../SVGs/Wave";
import Reputation from "../components/about/reputation";


const Home = (props) => {
	return (
		<div className="page-container">
			<Helmet
				title="GRELL ROOFING | Home"
				meta={[
					{ name: "description", content: "Home page for the website." },
					{ name: "keywords", content: "roofing, construction, home" }
				]} />
			<Wave />
			<Main />
			<Reputation />
			<Expertise />
			<Partners />
			<Footer1 />
		</div>
	);
};

export default Home;
