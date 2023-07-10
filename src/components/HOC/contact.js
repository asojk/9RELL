import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";

const Contact = (props) => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_caqlar9",
				"template_7a6btu8",
				form.current,
				"KfKbChHKxtJr4p331"
			)
			.then(
				(result) => {
					console.log("Form submitted successfully:", result.data);
					// Clear the input fields after a successful submission
					setName("");
					setEmail("");
					setPhone("");
					setDate("");
					setNotes("");
					setBuildingType("Commercial");
					setApplication("New Construction");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [date, setDate] = useState("");
	const [notes, setNotes] = useState("");
	const [buildingType, setBuildingType] = useState("NA");
	const [application, setApplication] = useState("NA");

	return (
		<div className="contact-container">
				<h2 className="head">{props.heading}</h2>
				<span className="subhead">
					or (PHONEBUTTON) or (EMAILBUTTON) INSTEAD
				</span>
			<div className="book-book">
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						required
						placeholder={props.textinput_placeholder}
						autoComplete="name"
						className="input book-input"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="email"
						required
						placeholder={props.textinput_placeholder1}
						autoComplete="email"
						className="input book-input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="tel"
						required
						placeholder={props.textinput_placeholder2}
						autoComplete="tel"
						className="input book-input"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
					<input
						type="date"
						placeholder={props.textinput_placeholder4}
						className="input book-input"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
					<input
						type="text"
						placeholder={props.textinput_placeholder3}
						className="input book-input"
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
					/>
					<div className="selections">
						<div className="select-container1">
							<label htmlFor="building_type">{props.Building_Type}</label>
							<select
								id="building_type"
								required
								className="custom-select1"
								value={buildingType}
								onChange={(e) => setBuildingType(e.target.value)}
							>
								<option value="NA">Select</option>
								<option value="Commercial">Commercial</option>
								<option value="Industrial">Industrial</option>
								<option value="Medical">Medical</option>
								<option value="School">School</option>
								<option value="Office">Office</option>
								<option value="Retail">Retail</option>
								<option value="Residential">Residential</option>
								<option value="Other">Other</option>
							</select>
						</div>
						<div className="select-container2">
							<label htmlFor="repair">{props.Application}</label>
							<select
								id="repair"
								required
								className="custom-select2"
								value={application}
								onChange={(e) => setApplication(e.target.value)}
							>
								<option value="NA">Select</option>
								<option value="New Construction">New Construction</option>
								<option value="Repair">Repair</option>
								<option value="Retrofit (Current is Metal)">
									Retrofit (Current is Metal)
								</option>
								<option value="Retrofit (Current is Rubber or Tar)">
									Retrofit (Current is Rubber or Tar)
								</option>
								<option value="Insulation (Energy Efficient)">
									Insulation (Energy Efficient)
								</option>
								<option value="PVC Duro-Last">PVC Duro-Last</option>
								<option value="EDPM Rubber Roofing">EDPM Rubber Roofing</option>
								<option value="Other">Other</option>
								<option value="I'm Not Sure">Not Sure</option>
							</select>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

Contact.defaultProps = {
	Application: "Application",
	Building_Type: "Building Type",
	call2: "Or call instead",
	heading: "Request a free estimate",
	image_alt: "image",
	image_alt1: "image",
	image_src: "/assets/icons/calendar.svg",
	image_src1: "/assets/icons/phone.svg",
	Phone: "(800) 208-9693",
	text: "Book an appointment",
	text1: "In person appointment",
	text2: "Virtual appointment",
	text3:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
	text4: "Request",
	textinput_placeholder: "Name",
	textinput_placeholder1: "Email",
	textinput_placeholder2: "Phone",
	textinput_placeholder3: "Notes",
	textinput_placeholder4: "Date"
};

Contact.propTypes = {
	Application: PropTypes.string,
	Building_Type: PropTypes.string,
	call2: PropTypes.string,
	heading: PropTypes.string,
	image_alt: PropTypes.string,
	image_alt1: PropTypes.string,
	image_src: PropTypes.string,
	image_src1: PropTypes.string,
	Phone: PropTypes.string,
	text: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string,
	text4: PropTypes.string,
	textinput_placeholder: PropTypes.string,
	textinput_placeholder1: PropTypes.string,
	textinput_placeholder2: PropTypes.string,
	textinput_placeholder3: PropTypes.string,
	textinput_placeholder4: PropTypes.string
};

export default Contact;
