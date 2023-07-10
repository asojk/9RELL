import React from "react";
import PropTypes from "prop-types";
import Review from "./review.js";
import "./reputation.css";

const Reputation = (props) => {
	return (
		<section className="testimonials-testimonials">
			<header className="testimonials-header">
				<header className="testimonials-left">
					<span className="section-head">{props.Section}</span>
					<h2 className="testimonials-heading section-heading">
						{props.Heading}
					</h2>
				</header>
			</header>
			<main className="testimonials-cards">
				<div className="testimonials-container">
					<Review rootClassName="review-root-class-name"></Review>
					<Review
						Quote="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\u2028\u2028Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.”"
						rootClassName="review-root-class-name"
					></Review>
				</div>
				<div className="testimonials-container1">
					<Review
						Quote="“Illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”"
						rootClassName="review-root-class-name"
					></Review>
					<Review
						Quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
						rootClassName="review-root-class-name"
					></Review>
				</div>
				<div className="testimonials-container2">
					<Review
						Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
						rootClassName="review-root-class-name"
					></Review>
					<Review
						Quote="“Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
						rootClassName="review-root-class-name"
					></Review>
				</div>
			</main>
			<div className="testimonials-view-more">
				<p className="testimonials-text">{props.Text}</p>
			</div>
		</section>
	);
};

Reputation.defaultProps = {
	Text: "View more",
	Section: "Reputation",
	Heading: "What others say about Grell",
	Paragraph:
		"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
};

Reputation.propTypes = {
	Text: PropTypes.string,
	Section: PropTypes.string,
	Heading: PropTypes.string,
	Paragraph: PropTypes.string
};

export default Reputation;
