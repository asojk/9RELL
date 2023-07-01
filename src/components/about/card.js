import React from "react";

import PropTypes from "prop-types";

import "./card.css";

const Card = (props) => {
	return (
		<section className={`card-card ${props.rootClassName} `}>
			<div className="card-icon">
				<img
					alt="Erica Grell"
					src="assets/grell/erica.jpg"
					className="card-icon1"
				/>
			</div>
			<main className="card-content">
				<h1 className="card-header">{props.Header}</h1>
				<p className="card-description">{props.Description}</p>
			</main>
		</section>
	);
};

Card.defaultProps = {
	Description:
		"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
	rootClassName: "",

	IconAlt: "image",
	Header: "Erica Grell"
};

Card.propTypes = {
	Description: PropTypes.string,
	rootClassName: PropTypes.string,
	Icon: PropTypes.string,
	IconAlt: PropTypes.string,
	Header: PropTypes.string
};

export default Card;
