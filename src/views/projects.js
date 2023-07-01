import Footer1 from "../components/fknround/footer1.js";
import NextNav from "../components/HOC/NextNav";

import React, { useEffect } from "react";

const Projects = (props) => {
	useEffect(() => {
		const ccShowcaseRoot = document.getElementById("companycam-showcase-root");
		if (!ccShowcaseRoot || !window.fetch) {
			return;
		}
		const ccShowcaseRootParent = document.getElementsByTagName("body")[0];
		const ccShowcaseScript = document.createElement("script");
		ccShowcaseScript.src = "https://showcase.companycam.com/bundle.js";
		ccShowcaseScript.type = "text/javascript";
		ccShowcaseRootParent.appendChild(ccShowcaseScript);
	}, []);

	return (
		<div className="page-container">
			<NextNav />
			<div className="showcase">
				<div
					data-showcase-id="bd0fbd6f-4168-45d7-a25c-0bba7e9817e2"
					id="companycam-showcase-root"
				></div>
			</div>
			<Footer1 />
		</div>
	);
};

export default Projects;
