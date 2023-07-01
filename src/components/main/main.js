import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NextNav from "../HOC/NextNav";
import Gif from "./gif.js";

const Main = (props) => {
	
	return (
		<div className="main-main">
			<NextNav />
			<Gif />
			<div className="main-content">
				<p className="main-caption">
					<span className="emoji-large">🏢 </span> 12 Million FT<sup>2</sup>{" "}
					Secured
					<br />
					<span className="emoji-large">🌐 </span> Across 20+ States
					<br />
					<span className="emoji-large">⏳ </span> Since 1985
				</p>
				<div className="main-bottom">

				<a className="call-button" href="tel:+18002089693">
					<img
						alt={props.image_alt1}
						src= "/assets/icons/phone.svg"
						className="phone"
					/>
					    <span class="call-text">Free Estimate</span>
				</a>
				</div>
				<div className="badges">
					<Link to="/">
						<img alt={props.image_alt} src={props.image_src5} className="bbb" />
					</Link>
					<Link to="/duro_last">
						<img
							alt={props.image_alt}
							src={props.image_src4}
							className="duro-last"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

Main.defaultProps = {
	image_alt1: "image",
	Header: "Your roof is our top priority",
	text: "Free Estimate",
	image_src1: "/assets/icons/phone.svg",
	image_src: "/assets/grell/W-Tag.svg",
	image_alt: "image",
	image_src4: "/assets/duro-last-elite.svg",
	image_src5: "assets/BBB.png"
};

Main.propTypes = {
	image_alt1: PropTypes.string,
	Header: PropTypes.string,
	Caption: PropTypes.string,
	text: PropTypes.string,
	image_src1: PropTypes.string,
	image_src: PropTypes.string,
	image_alt: PropTypes.string,
	image_src5: PropTypes.string,
	image_src4: PropTypes.string
};

export default Main;
