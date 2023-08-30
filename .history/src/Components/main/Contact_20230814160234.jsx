import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { FiMessageCircle, FiPhone, FiSend } from "react-icons/fi";
import ReactDatePicker from "react-datepicker";
  import './datepick.css'
  import addDays from 'date-fns/addDays';
  import getDay from 'date-fns/getDay';


const Contact = ({ BuildingType, Application }) => {
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

  const [startDate, setStartDate] = useState(new Date());
  const minDate = addDays(new Date(), 7); // One week from now
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  return (
  <>{/* Contact Us */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-2xl mx-auto lg:max-w-6xl">
      <div className="grid items-center gap-4 mt-12 lg:grid-cols-[4fr,2fr] lg:gap-8 bg-d7 rounded-2xl">{/* Card */}
        <div className="flex flex-col p-2 rounded-2xl sm:p-6 lg:p-4">
          <form ref={form} onSubmit={sendEmail} className="">{/* Grid */}
    <div className="flex items-center justify-center w-full">
      <div>
        <header className="header">
          <span className="head">Free Estimate</span>
          <h2 className="heading">Get in touch</h2>
        </header>
      <div className="grid max-w-3xl gap-2 px-8 py-10 rounded-md sm:grid-cols-2">
        <div className="grid">
          <div className="flex min-h-[60px] flex-col-reverse justify-center px-3 py-2 shadow-sm focus-within:shadow-inner relative z-0 group">
            <input id="floating_name"
              className="block w-full px-0 py-1 text-base bg-transparent border-0 border-b appearance-none text-l5 border-b1 focus:outline-none focus:ring-0 focus:border-y2 peer"
              type="text" name="user_name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="floating_name"
              className="tracking-wide peer-focus:font-thin absolute text-base text-l5 duration-300 transform -translate-y-4 scale-100 top-3 -z-10 origin-[0] peer-focus:text-y2 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8"
            >* Name</label></div></div>
        <div className="grid pt-8 md:pt-0">
          <div className="first:flex min-h-[60px] flex-col-reverse justify-center px-3 py-2 shadow-sm focus-within:shadow-inner relative z-0 group">
            <input id="floating_email"
              className="block w-full px-0 py-1 text-base bg-transparent border-0 border-b appearance-none text-l5 border-b1 focus:outline-none focus:ring-0 focus:border-y2 peer"
              type="email" name="user_email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="floating_email"
              className="tracking-wide peer-focus:font-thin absolute text-base text-l5 duration-300 transform -translate-y-4 scale-100 top-3 -z-10 origin-[0] peer-focus:text-y2 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8"
            >* Email</label></div></div>
        <div className="grid">
          <div className="first:flex min-h-[60px] flex-col-reverse my-8 justify-center px-3 py-2 shadow-sm focus-within:shadow-inner relative z-0 group">
            <input id="floating_phone"
              className="block w-full px-0 py-1 text-base bg-transparent border-0 border-b appearance-none text-l5 border-b1 focus:outline-none focus:ring-0 focus:border-y2 peer"
              type="tel" name="user_phone" required autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <label htmlFor="floating_phone"
              className="tracking-wide peer-focus:font-thin absolute text-base text-l5 duration-300 transform -translate-y-4 scale-100 top-3 -z-10 origin-[0] peer-focus:text-y2 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8"
            >* Phone</label></div></div></div>
        <label htmlFor="date" className="px-4 font-thin text-l5">If you'd like, select a day that works best for an inspection</label>
        <div className="first:flex min-h-[60px] flex-col-reverse justify-center px-8 py-2 shadow-sm focus-within:shadow-inner relative z-1 group">
          <ReactDatePicker autoComplete="off"
          inputID="date" selected={date} onChange={(date) => setDate(date)}
          filterDate={isWeekday} monthsShown={1} minDate={minDate}
          type="date" name="user_date" value={date}
          placeholderText="select"
          className="mt-2 mb-8 font-thin tracking-wide bg-transparent rounded-lg outline-none cursor-pointer w-fit btn border-b1 text-l5 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0">
          </ReactDatePicker>


          <div className="my-2 lg:mb-16">
          <div className="first:flex min-h-[60px] flex-col-reverse">
            <select id="building_type" name="user_buildingType" required value={buildingType}
                onChange={(e) => setBuildingType(e.target.value)}
                className="text-base font-thin tracking-wide normal-case bg-transparent rounded-lg outline-none cursor-pointer w-fit btn border-b1 text-w4 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0">
                <option value="NA">* Building Type</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Medical">Medical</option>
                <option value="School">School</option>
                <option value="Office">Office</option>
                <option value="Retail">Retail</option>
                <option value="Residential">Residential</option>
                <option value="Other">Other</option></select></div></div>

          <div className="my-2 lg:mb-16">
          <div className="first:flex min-h-[60px] flex-col-reverse">
              <select id="application" name="user_application" required value={application} onChange={(e) => setApplication(e.target.value)}
                className="text-base font-thin tracking-wide normal-case bg-transparent border-none rounded-lg outline-none cursor-pointer btn text-l5 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0">
                <option value="NA">* Application</option>
                <option value="New Construction">New Construction</option>
                <option value="Repair">Repair</option>
                <option value="Retrofit (Current is Metal)">Retrofit (Current is Metal)</option>
                <option value="Retrofit (Current is Rubber or Tar)">Retrofit (Current is Rubber or Tar)</option>
                <option value="Insulation (Energy Efficient)">Insulation (Energy Efficient)</option>
                <option value="PVC Duro-Last">PVC Duro-Last</option>
                <option value="EDPM Rubber Roofing">EDPM Rubber Roofing</option>
                <option value="Other">Other</option>
                <option value="I'm Not Sure">Not Sure</option></select></div></div></div>


                    <div className="relative z-0 px-12 mt-12 mb-8 lg:w-3/4 lg:mt-4 group">
                      <input
                        type="text"
                        name="user_notes"
                        id="floating_notes"
                        className="block w-full px-0 py-1 text-base bg-transparent border-0 border-b appearance-none text-l5 border-b1 focus:outline-none focus:ring-0 focus:border-y2 peer"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                      <label
                        htmlFor="floating_notes"
                        className="tracking-wide peer-focus:font-thin absolute text-base text-l5 duration-300 transform -translate-y-8 scale-100 top-3 -z-10 origin-[0] peer-focus:text-y2 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-12"
                      >
                        Special Request or Additional Info
                      </label>
                    </div>
                    <div className="grid pr-8">

                        <button
                          className="flex px-5 py-2 mt-1 mb-4 font-bold tracking-widest text-center uppercase transition-all duration-500 rounded-md justify-self-end justify-items-center w-fit text-l1 hover:text-l1 animate-btn-anim-1 hover:bg-r hover:shadow-xl"
                          type="submit"
                        >
                          SEND
                        </button>

                    </div>
                    <a className="flex justify-start px-4 pb-2 text-sm italic text-l5">
                      * indicates required fields
                    </a>
                  </div>
                </div>
              </form>
            </div>
            {/* End Card */}

            <div className="pl-6 md:pl-0">
              {/* Icon Block */}
              <div className="flex py-6 pr-8 text-right">
                <div>
                  <h3 className="font-semibold text-y">
                    Other ways to connect
                  </h3>
                  <p className="pl-8 mt-1 text-sm md:pl-16 text-w3">
                    Our office is open Monday-Friday from 8am to 4pm. If you
                    your request is urgent, we do our best to respond to calls
                    and texts 24/7.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}

              {/* Icon Block */}
              <div className="flex justify-end py-6 pr-12 gap-x-7 text-w3">
                <FiMessageCircle />
                <div>
                  <h3 className="font-semibold text-w3">Text us</h3>
                  <a
                    className="inline-flex items-center mt-2 text-sm font-medium text-w3 gap-x-2 hover:text-r"
                    href="text:5152276367"
                  >
                    (515) 227-6367
                    <svg
                      className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* End Icon Block */}

              {/* Icon Block */}
              <div className="flex justify-end py-6 pr-12 gap-x-7 text-w3">
                <FiPhone />
                <div>
                  <h3 className="font-semibold text-w3">Call instead</h3>
                  <a
                    className="inline-flex items-center mt-2 text-sm font-medium text-w3 gap-x-2 hover:text-r"
                    href="tel:+18002089693"
                  >
                    1-800-208-9693
                    <svg
                      className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* End Icon Block */}

              {/* Icon Block */}
              <div className="flex justify-end py-6 pr-12 gap-x-7 text-w3">
                <FiSend />
                <div>
                  <h3 className="font-semibold text-w3">Send an email</h3>
                  <a
                    className="inline-flex items-center mt-2 text-sm font-medium text-w3 gap-x-2 hover:text-r"
                    href="mailto:roof@grell.pro"
                  >
                    roof@grell.pro
                    <svg
                      className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Us */}
    </>
  );
};

export default Contact;
