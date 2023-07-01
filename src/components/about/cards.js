import React from "react";

import PropTypes from "prop-types";

import Card from "./card.js";
import "./cards.css";

const Cards = (props) => {
	return (
		<section className="cards-cards">
			<header className="cards-header">
				<header className="cards-left">
					<h2 className="section-heading">
						<span>Meet our team</span>
					</h2>
				</header>
			</header>
			<main className="cards-cards1">
				<Card rootClassName="card-root-class-name"></Card>
				<Card
					Icon="/Icons/group%201314-200h.png"
					rootClassName="card-root-class-name1"
				></Card>
				<Card
					Icon="/Icons/group%201317-200h.png"
					rootClassName="card-root-class-name2"
				></Card>
			</main>
		</section>
	);
};

Cards.defaultProps = {
	Section: "Tempor incididunt",
	Paragraph:
		"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
};

Cards.propTypes = {
	Section: PropTypes.string,
	Paragraph: PropTypes.string
};

export default Cards;
