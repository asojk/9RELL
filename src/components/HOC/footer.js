import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./footer.css";

const Footer = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			animation={{ duration: 1.5 }}
			className={`footer-footer ${props.rootClassName} `}
		>
			<div className="footer-left">
				<div className="footer-brand">
					<img
						alt={props.image_alt}
						src={props.image_src}
						className="monogram"
					/>
				</div>
				<div className="footer-legal">
					<span className="footer-copyright">{props.Copyright1}</span>
				</div>
			</div>
			<div className="footer-center">
				<div className="footer-list">
					<div className="footer-links">
						<span className="footer-link08">{props.Address}</span>
					</div>
				</div>
			</div>

			<div className="footer-right">
				<div className="footer-list2">
					<div className="footer-links2">
						<a
							href="mailto:contact@template.new?subject=Roof Inquiry from Website"
							className="footer-link09"
						>
							{props.Mail}
						</a>
						<a href="tel:+18002089693" className="footer-link10">
							{props.Phone}
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

Footer.defaultProps = {
	Address: "2315 235th Street, Fort Dodge, IA 50501",
	Copyright1: "© 2023 Grell Roofing. All Rights Reserved.",
	Copyright4: "Privacy Policy",
	Copyright5: "Terms of Use",
	image_alt: "image",
	image_alt1: "image",
	image_alt2: "image",
	image_alt3: "image",
	image_src: "assets/grell/monogram.png",
	image_src1: "f4c6fd64-70a5-4d0b-9cdc-416d1d29ff62",
	image_src2: "578d6aff-bbc6-4769-aaea-16342ff676e1",
	image_src3: "5eac9e9e-b4f3-4e29-bf9d-9771a9843685",
	Link: "Home",
	Link1: "About",
	Link2: "FAQ",
	Link4: "Warranties",
	Link5: "Roof Repair",
	Link6: "Roof Replace",
	Link7: "New Construction",
	Link8: "Maintenance",
	Mail: "roof@grell.pro",
	Phone: "(800) 208-9693",
	rootClassName: ""
};

Footer.propTypes = {
	Address: PropTypes.string,
	Copyright1: PropTypes.string,
	Copyright4: PropTypes.string,
	Copyright5: PropTypes.string,
	image_alt: PropTypes.string,
	image_alt1: PropTypes.string,
	image_alt2: PropTypes.string,
	image_alt3: PropTypes.string,
	image_src: PropTypes.string,
	image_src1: PropTypes.string,
	image_src2: PropTypes.string,
	image_src3: PropTypes.string,
	Link: PropTypes.string,
	Link1: PropTypes.string,
	Link2: PropTypes.string,
	Link4: PropTypes.string,
	Link5: PropTypes.string,
	Link6: PropTypes.string,
	Link7: PropTypes.string,
	Link8: PropTypes.string,
	Mail: PropTypes.string,
	Phone: PropTypes.string,
	rootClassName: PropTypes.string
};

export default Footer;
