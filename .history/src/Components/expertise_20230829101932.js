import React from "react";
import { Link } from "react-router-dom";

import Hotels from "../SVGs/hotels.js";
import Banks from "../SVGs/banks.js";
import CityCounty from "../SVGs/city-county.js";
import Federal from "../SVGs/federal.js";
import K12 from "../SVGs/k12.js";
import Malls from "../SVGs/malls.js";
import Manufacturing from "../SVGs/manufacturing.js";
import Medical from "../SVGs/medical.js";
import Offices from "../SVGs/offices.js";
import Residential from "../SVGs/residential.js";
import Restaurants from "../SVGs/restaurants.js";
import SmallBusiness from "../SVGs/small-business.js";
import { useSpring, animated } from "@react-spring/web";

const ExpCard = ({ Icon, description }) => {
	const [hovered, setHovered] = React.useState(false);
	const spring = useSpring({
		transform: hovered ? "translateY(0%)" : "translateY(100%)",
		config: { tension: 0, friction: 100 }
	});

	return (
		<div
			className="exp-card"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<Icon />
			<animated.div className="exp-description" style={spring}>
				{description}
			</animated.div>
		</div>
	);
};

const Expertise = () => {
	return (
		<>
			<div className="exp">
				<header className="header">
				<span className="head">Expertise</span>
				<h2 className="heading">
				We work across a variety of industries
				</h2>
				</header>
				<div className="exp-container1">
					<main className="exp-cards">
						<div className="med">
							<ExpCard Icon={Medical} description="Medical" />
						</div>
						<div className="cit">
							<ExpCard Icon={CityCounty} description="City & County" />
						</div>
						<div className="fed">
							<ExpCard Icon={Federal} description="Federal" />
						</div>
						<div className="ba">
							<ExpCard Icon={Banks} description="Banks" />
						</div>
						<div className="k12">
							<ExpCard Icon={K12} description="K-12" />
						</div>
						<div className="resi">
							<ExpCard Icon={Residential} description="Residential" />
						</div>
						<div className="man">
							<ExpCard Icon={Manufacturing} description="Manufacturing" />
						</div>
						<div className="rest">
							<ExpCard Icon={Restaurants} description="Restaurants" />
						</div>
						<div className="sm">
							<ExpCard Icon={SmallBusiness} description="Small Business" />
						</div>
						<div className="ho">
							<ExpCard Icon={Hotels} description="Hotels" />
						</div>
						<div className="off">
							<ExpCard Icon={Offices} description="Offices" />
						</div>
						<div className="sh">
							<ExpCard Icon={Malls} description="Shopping" />
						</div>
					</main>
					<p className="exp-text">
						No matter the size or shape of your flat or low-sloped roof, we are
						<strong> confident</strong> that we can take care of you. Our team
						is experienced in working with all parties including building
						owners, architects, and specifiers to make sure the re-roofing
						process goes as quickly and smoothly as possible.
					</p>
					<div className="subhead">
						<span>
							<Link to="/projects">See our past projects</Link>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Expertise;
