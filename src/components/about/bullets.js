import React from "react";
import PropTypes from "prop-types";
import Mark from "./mark.js";
const Bullets = (props) => {
	return (
	<section className="section-container">
        <header className="header">
				<span 
				className="head">
					About GRELL</span>
				<h2
				className="heading">
				Commercial Roofing Pros
				</h2>
				</header>
        <div className="section-description">
            <p className="content">
			For 30 years and more than 12 million square feet of roofing application, Grell Roofing has served Iowa and the Upper Midwest’s commercial and industrial roofing needs. We’re a family-owned firm with an outstanding reputation for workmanship, quality, and customer support. Additionally, all Duro-Last roofing is manufactured and created in the state of Iowa. Grell Roofing LLC is fully licensed, bonded and insured. We take the responsibility of safety and quality seriously. We’re proud to say we’ve been a Duro-Last Elite Contractor for over 15 years. To read our latest achievement click on this link Duro-Last Elite Award."
            </p>
        </div>
			<div className="bullets-checkmarks">
				<span className="bullets-section1 section-head">
					{props.Heading1}
				</span>
				<Mark Label="New Construction"> </Mark>
				<Mark Label="Preventive Maintenance"> </Mark>
				<Mark Label="Metal Retrofit Roofing"> </Mark>
				<Mark Label="Thermal Imaging"> </Mark>
				<Mark Label="Metal Retrofits"> </Mark>
				<Mark Label="Insulation"></Mark>
				<Mark Label="24/7 Emergency Repair"> </Mark>
				<Mark Label="Disaster Storm Damage Response"> </Mark>
				<Mark Label="National & Regional Accounts"> </Mark>
				<Mark Label="Consultation, Inspection, Expertise"> </Mark>
			</div>
	</section>
	);
};

Bullets.defaultProps = {
	image_src: "/assets/grell/Tagged.png",
	image_alt: "image",
	Text: "Get started",
	Section: "About Us",
	Heading: "Commercial Roofing Experts",
	Heading1: "What we do",
};

Bullets.propTypes = {
	image_src: PropTypes.string,
	image_alt: PropTypes.string,
	Text: PropTypes.string,
	Section: PropTypes.string,
	Heading: PropTypes.string,
	Heading1: PropTypes.string,
	Paragraph: PropTypes.string
};

export default Bullets;
