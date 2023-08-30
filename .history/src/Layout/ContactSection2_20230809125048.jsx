import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactSection2 = ({ BuildingType, Application }) => {
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
    <>
      {/* Contact Us */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto lg:max-w-5xl">
          <header className="header">
            <span className="head">Free Estimate</span>
            <h2 className="heading">Get in touch</h2>
          </header>
          <div className="grid items-center gap-6 mt-12 lg:grid-cols-2 lg:gap-16 bg-d7 rounded-2xl">
            {/* Card */}
            <div className="flex flex-col p-4 rounded-2xl sm:p-6 lg:p-8">
              <form
                ref={form}
                onSubmit={sendEmail}
                className=""
              >
                <div className="grid gap-4">
                  {/* Grid */}

                    <div className="relative mb-2 list-none group">
                      <li className="w-full px-6 py-2 pt-12 text-center rounded-lg text-l1 sm:w-auto">
                        <input
                          type="text"
                          name="user_name"
                          required
                          className="bg-transparent border-b outline-none border-l5 text-l1"
                          autoComplete="name"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </li>
                    </div>
                    <div className="relative mb-2 list-none group">
                      <li className="w-full px-6 py-2 pt-12 text-center rounded-lg text-l1 sm:w-auto">
                        <input
                          type="email"
                          name="user_email"
                          required
                          autoComplete="email"
                          className="bg-transparent border-b outline-none border-l5 text-l1"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </li>
                    </div>
                    <div className="relative mb-2 list-none group">
                      <li className="w-full px-6 py-2 pt-12 text-center rounded-lg text-l1 sm:w-auto">
                        <input
                          type="tel"
                          name="user_phone"
                          required
                          placeholder="Phone"
                          className="bg-transparent border-b outline-none border-l5 text-l1"
                          autoComplete="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </li>
                    </div>

                    <div className="relative mb-2 list-none group">
                      <li className="w-full px-6 py-2 pt-12 text-center rounded-lg text-l1 sm:w-auto">
                        <ReactDatePicker
                          selected={date}
                          onChange={(date) => setDate(date)}
                          type="date"
                          name="user_date"
                          value={date}
                          placeholderText="Select a date"
                          className="bg-transparent border-b outline-none text-l1 border-l5"
                        />
                      </li>
                    </div>
                    <div className="relative mb-2 list-none group">
                      <li className="w-full px-6 py-2 pt-12 text-center rounded-lg text-l1 sm:w-auto">
                        <input
                          type="text"
                          name="user_notes"
                          className="bg-transparent border-b outline-none border-l5 text-l1"
                          value={notes}
                          placeholder="Notes"
                          onChange={(e) => setNotes(e.target.value)}
                        />
                      </li>
                    </div>
                  </div>
                  {/* End Grid */}

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
                        <option value="New Construction">
                          New Construction
                        </option>
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
                {/* End Grid */}

                <div className="grid mt-4">
                  <center className="flex items-center justify-center mt-6">
                    <button
                      className="items-center justify-center px-5 py-2 mt-1 mb-4 font-bold tracking-widest text-center uppercase transition-all duration-500 rounded-md text-l1 hover:text-l1 animate-btn-anim-1 hover:bg-r hover:shadow-xl"
                      type="submit"
                    >
                      SEND
                    </button>
                  </center>
                </div>
              </form>
            </div>
            {/* End Card */}

           
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Us */}
    </>
  );
};

export default ContactSection2;
