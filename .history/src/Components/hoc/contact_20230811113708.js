import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ContactSection from "../../Layout/ContactSection";
import ContactSection2 from "../../Layout/ContactSection2";

const Contact = ({
  heading,
  BuildingType,
  Application,
}) => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [application, setApplication] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        "service_caqlar9",
        "template_webform",
        {
          user_name: name,
          user_email: email,
          user_phone: phone,
          user_date: date,
          user_notes: notes,
          user_buildingType: buildingType,
          user_application: application,
        },
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
          setBuildingType("");
          setApplication("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <><ContactSection2 /><div className='container max-w-3xl px-12 pt-16 pb-8 mx-auto mt-16 mb-16 rounded-2xl bg-d9/90'>
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
  <div>
    <h1 className="flex items-baseline gap-1 mb-1 font-mono text-3xl font-bold">Form UI<span className="text-sm text-purple-700">form showcase</span></h1>
<div className="grid max-w-3xl gap-2 px-8 py-10 bg-white border-t-4 border-purple-400 rounded-md sm:grid-cols-2">
  <div className="grid">
    <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
      <input type="text" name="first-name" id="first-name" className="block w-full p-0 text-base text-gray-900 placeholder-gray-400 border-0 peer focus:ring-0" placeholder="First name" />
      <label html="first-name" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">First name</label>
    </div>
  </div>
  <div className="grid">
    <div className="bg-white first:flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
      <input type="text" name="last-name" id="last-name" className="block w-full p-0 text-base text-gray-900 placeholder-gray-400 border-0 peer focus:ring-0" placeholder="Last name" />
      <label html="last-name" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Last name</label>
    </div>
  </div>
    <div className="grid">
    <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
      <input type="text" name="last-name" id="last-name" className="block w-full p-0 text-base text-gray-900 placeholder-gray-400 border-0 peer focus:ring-0" placeholder="Company" />
      <label html="company" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Company</label>
    </div>
  </div>
  <div className="grid">
    <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
      <input type="email" name="email" id="email" className="block w-full p-0 text-base text-gray-900 placeholder-gray-400 border-0 peer focus:ring-0" placeholder="E-mail" />
      <label html="email" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">E-mail</label>
    </div>
  </div>
         <button type="submit" className="px-6 py-2 mt-4 text-white bg-purple-500 rounded-md hover:bg-purple-600 ">Login</button>
</div>
</div></div>
      <span className='px-12 head'>Free Estimate</span>
      <h2 className='px-12 heading'>Get in touch</h2>
      <ul className="items-center justify-center gap-4 list-none">
        <form ref={form} onSubmit={sendEmail} className="relative flex flex-wrap items-center max-w-3xl justify-left">

          <div className='relative mb-2 list-none group'>
            <li className="w-full px-6 py-2 pt-12 text-center rounded-lg text-l1 sm:w-auto">
              <input
                type="text"
                name="user_name"
                required
                className="bg-transparent border-b outline-none border-l5 text-l1"
                autoComplete="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </li>
          </div>
          <div className='relative mb-2 list-none group'>
            <li className="w-full px-6 py-2 pt-12 text-center rounded-lg text-l1 sm:w-auto">
              <input
                type="email"
                name="user_email"
                required
                autoComplete="email"
                className="bg-transparent border-b outline-none border-l5 text-l1"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </li>
          </div>
          <div className='relative mb-2 list-none group'>
            <li className="w-full px-6 py-2 pt-12 text-center rounded-lg text-l1 sm:w-auto">
              <input
                type="tel"
                name="user_phone"
                required
                placeholder="Phone"
                className="bg-transparent border-b outline-none border-l5 text-l1"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />
            </li>
          </div>


          <div className='relative mb-2 list-none group'>
            <li className="w-full px-6 py-2 pt-12 text-center rounded-lg text-l1 sm:w-auto">
              <ReactDatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                type="date"
                name="user_date"
                value={date}
                placeholderText="Select a date"
                className="bg-transparent border-b outline-none text-l1 border-l5" />

            </li>
          </div>
          <div className='relative mb-2 list-none group'>
            <li className="w-full px-6 py-2 pt-12 text-center rounded-lg text-l1 sm:w-auto">
              <input
                type="text"
                name="user_notes"
                className="bg-transparent border-b outline-none border-l5 text-l1"
                value={notes}
                placeholder="Notes"
                onChange={(e) => setNotes(e.target.value)} />

            </li>
          </div>
          <div className="selections">
            <div className="select-container1">
              <label htmlFor="building_type">{BuildingType}</label>
              <select
                id="building_type"
                name="user_buildingType"
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
              <label htmlFor="application">{Application}</label>
              <select
                id="application"
                name="user_application"
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
                <option value="EDPM Rubber Roofing">
                  EDPM Rubber Roofing
                </option>
                <option value="Other">Other</option>
                <option value="I'm Not Sure">Not Sure</option>
              </select>
            </div>
          </div>
          <center className="flex items-center justify-center mt-6">
            <button className='items-center justify-center px-5 py-2 mt-1 mb-4 font-bold tracking-widest text-center uppercase transition-all duration-500 rounded-md text-l1 hover:text-l1 animate-btn-anim-1 hover:bg-r hover:shadow-xl'
              type="submit">
              SEND</button>
          </center>
        </form>
      </ul>
    </div></>
  );
};

Contact.defaultProps = {
  heading: "Book an Appointment",
  textinputPlaceholder: "Name",
  textinputPlaceholder1: "Email",
  textinputPlaceholder2: "Phone",
  textinputPlaceholder3: "Notes",
  textinputPlaceholder4: "Date",
  BuildingType: "Building Type",
  Application: "Application",
};

Contact.propTypes = {
  heading: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  textinputPlaceholder3: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  BuildingType: PropTypes.string,
  Application: PropTypes.string,
};

export default Contact;
