import React from "react";
import Nav from "../Components/hoc/Nav.jsx";
import Footer from "../Components/hoc/footer.js";

import Her from "../Components/info/her";
import Accordian from "../Components/info/accordian";
import Cube from "../Components/info/cube";

const Maintenance = (props) => {
	return (
		<div className="page-container">
			<Nav />
			<Her></Her>
			<Accordian></Accordian>
			<Cube></Cube>
			<Footer />
		</div>
	);
};

export default Maintenance;
