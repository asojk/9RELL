import React from "react";
import PropTypes from "prop-types";

import Footer from "../components/fknround/footer1.js";
import NextNav from "../components/HOC/NextNav";

const Glossary = (props) => {
	return (
		<div className="page-container">
			<NextNav />
			<div className="glossary-search">
				<div className="glossary-heading">
					<h2 className="glossary-text">{props.heading}</h2>
					<p className="glossary-text01">{props.text}</p>
				</div>
				<div className="glossary-content">
					<div className="glossary-type-one">
						<div className="glossary-alphabet">
							<div data-letter="a" className="letter">
								<span className="glossary-text02">{props.text3}</span>
							</div>
							<div data-letter="b" className="letter">
								<span className="glossary-text03">{props.text4}</span>
							</div>
							<div data-letter="c" className="letter">
								<span className="glossary-text04">{props.text5}</span>
							</div>
							<div data-letter="d" className="letter">
								<span className="glossary-text05">{props.text6}</span>
							</div>
							<div data-letter="e" className="letter">
								<span className="glossary-text06">{props.text7}</span>
							</div>
							<div data-letter="f" className="letter">
								<span className="glossary-text07">{props.text8}</span>
							</div>
							<div data-letter="g" className="letter">
								<span className="glossary-text08">{props.text9}</span>
							</div>
							<div data-letter="h" className="letter">
								<span className="glossary-text09">{props.text10}</span>
							</div>
							<div data-letter="i" className="letter">
								<span className="glossary-text10">{props.text11}</span>
							</div>
							<div data-letter="j" className="letter">
								<span className="glossary-text11">{props.text12}</span>
							</div>
							<div data-letter="k" className="letter">
								<span className="glossary-text12">{props.text13}</span>
							</div>
							<div data-letter="l" className="letter">
								<span className="glossary-text13">{props.text14}</span>
							</div>
							<div data-letter="m" className="letter">
								<span className="glossary-text14">{props.text15}</span>
							</div>
							<div data-letter="n" className="letter">
								<span className="glossary-text15">{props.text16}</span>
							</div>
							<div data-letter="o" className="letter">
								<span className="glossary-text16">{props.text17}</span>
							</div>
							<div data-letter="p" className="letter">
								<span className="glossary-text17">{props.text18}</span>
							</div>
							<div data-letter="q" className="letter">
								<span className="glossary-text18">{props.text19}</span>
							</div>
							<div data-letter="r" className="letter">
								<span className="glossary-text19">{props.text20}</span>
							</div>
							<div data-letter="s" className="letter">
								<span className="glossary-text20">{props.text21}</span>
							</div>
							<div data-letter="t" className="letter">
								<span className="glossary-text21">{props.text22}</span>
							</div>
							<div data-letter="u" className="letter">
								<span className="glossary-text22">{props.text23}</span>
							</div>
							<div data-letter="v" className="letter">
								<span className="glossary-text23">{props.text24}</span>
							</div>
							<div data-letter="w" className="letter">
								<span className="glossary-text24">{props.text25}</span>
							</div>
							<div data-letter="x" className="letter">
								<span className="glossary-text25">{props.text26}</span>
							</div>
							<div data-letter="y" className="letter">
								<span className="glossary-text26">{props.text27}</span>
							</div>
							<div data-letter="z" className="letter">
								<span className="glossary-text27">{props.text28}</span>
							</div>
						</div>
						<p className="glossary-text28">{props.text1}</p>
						<div data-teleport="results" className="glossary-results">
							<span className="glossary-heading1">{props.Heading}</span>
							<div data-results="letters" className="glossary-list"></div>
						</div>
					</div>
					<div className="glossary-type-two">
						<div className="glossary-heading2">
							<h3 className="glossary-text29">{props.heading1}</h3>
							<p className="glossary-text30">{props.text2}</p>
						</div>
						<div className="glossary-symptoms">
							<div className="glossary-row">
								<div className="symptom">
									<span className="glossary-text31">{props.text29}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text32">{props.text30}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text33">{props.text31}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text34">{props.text32}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text35">{props.text33}</span>
								</div>
							</div>
							<div className="glossary-row1">
								<div className="symptom">
									<span className="glossary-text36">{props.text34}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text37">{props.text35}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text38">{props.text36}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text39">{props.text37}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text40">{props.text38}</span>
								</div>
							</div>
							<div className="glossary-row2">
								<div className="symptom">
									<span className="glossary-text41">{props.text39}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text42">{props.text40}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text43">{props.text41}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text44">{props.text42}</span>
								</div>
								<div className="symptom">
									<span className="glossary-text45">{props.text43}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

Glossary.defaultProps = {
	text12: "J",
	text42: "Leaking Ceiling",
	heading: "Search symptoms & remedies",
	text29: "Heat loss",
	text19: "Q",
	heading1: "Symptom checker",
	text31: "Over-running air conditioner",
	text15: "M",
	text1: "You don’t know it’s name? Check out symptom checker below ",
	text17: "O",
	text38: "xxxxx",
	text27: "Y",
	text32: "xxxxx xxxxx",
	text33: "xxxxxxx",
	text20: "R",
	text34: "xxxxx",
	text7: "E",
	text11: "I",
	text22: "T",
	text10: "H",
	text3: "A",
	text5: "C",
	text36: "xxxx",
	text21: "S",
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
	text2:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
	text16: "N",
	text35: "xxxxxxxxxx",
	text18: "P",
	text25: "W",
	Heading: "Results:",
	text8: "F",
	text23: "U",
	text43: "xx xxxxx",
	text37: "xxx xxxxx xxxxxx",
	text41: "x xxx",
	text26: "X",
	text30: "xxxx",
	text14: "L",
	text4: "B",
	text28: "Z",
	text9: "G",
	text39: "xxxxxx",
	text24: "V",
	text40: "xxx",
	text13: "K",
	text6: "D"
};

Glossary.propTypes = {
	text12: PropTypes.string,
	text42: PropTypes.string,
	heading: PropTypes.string,
	text29: PropTypes.string,
	text19: PropTypes.string,
	heading1: PropTypes.string,
	text31: PropTypes.string,
	text15: PropTypes.string,
	text1: PropTypes.string,
	text17: PropTypes.string,
	text38: PropTypes.string,
	text27: PropTypes.string,
	text32: PropTypes.string,
	text33: PropTypes.string,
	text20: PropTypes.string,
	text34: PropTypes.string,
	text7: PropTypes.string,
	text11: PropTypes.string,
	text22: PropTypes.string,
	text10: PropTypes.string,
	text3: PropTypes.string,
	text5: PropTypes.string,
	text36: PropTypes.string,
	text21: PropTypes.string,
	text: PropTypes.string,
	text2: PropTypes.string,
	text16: PropTypes.string,
	text35: PropTypes.string,
	text18: PropTypes.string,
	text25: PropTypes.string,
	Heading: PropTypes.string,
	text8: PropTypes.string,
	text23: PropTypes.string,
	text43: PropTypes.string,
	text37: PropTypes.string,
	text41: PropTypes.string,
	text26: PropTypes.string,
	text30: PropTypes.string,
	text14: PropTypes.string,
	text4: PropTypes.string,
	text28: PropTypes.string,
	text9: PropTypes.string,
	text39: PropTypes.string,
	text24: PropTypes.string,
	text40: PropTypes.string,
	text13: PropTypes.string,
	text6: PropTypes.string
};

export default Glossary;
