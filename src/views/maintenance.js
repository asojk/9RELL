import React from "react";
import Her from "../components/info/her";

import Accordian from "../components/info/accordian";
import Cube from "../components/info/cube";

import NextNav from "../components/HOC/NextNav";
import Footer1 from "../components/fknround/footer1.js";

const Maintenance = (props) => {
	return (
		<div className="page-container">
			<NextNav />
			<Her></Her>
			<Accordian></Accordian>
			<Cube></Cube>
			<Footer1 />
		</div>
	);
};

export default Maintenance;
