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
        <div className="max-w-2xl mx-auto lg:max-w-6xl">
          <header className="header">
            <span className="head">Free Estimate</span>
            <h2 className="heading">Get in touch</h2>
          </header>

          <div className="grid items-center gap-6 mt-12 lg:grid-cols-2 lg:gap-16 bg-d7 rounded-2xl">
            {/* Card */}
            <div className="flex flex-col p-4 rounded-2xl sm:p-6 lg:p-8">
              <form ref={form} onSubmit={sendEmail} className="">
                {/* Grid */}

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative px-4 py-8 text-base rounded-lg group">
                    <label
                      htmlFor="Username"
                      className="relative block text-base rounded-md shadow-sm bg-d7"
                    >
                      <input
                        id="Username"
                        type="text"
                        name="user_name"
                        required
                        className="placeholder-transparent bg-transparent border-b outline-none border-l5 text-l1 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0"
                        autoComplete="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-l3 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Name
                      </span>
                    </label>
                  </div>

                  <div className="relative px-4 py-8 text-base rounded-lg group">
                    <label
                      htmlFor="Email"
                      className="relative block text-base rounded-md shadow-sm bg-d7"
                    >
                      <input
                        id="Email"
                        type="email"
                        name="user_email"
                        required
                        autoComplete="email"
                        className="placeholder-transparent bg-transparent border-b outline-none border-l5 text-l1 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-base text-l3 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Email
                      </span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative px-4 py-8 text-base rounded-lg group">
                    <label
                      htmlFor="Telephone"
                      className="relative block text-base rounded-md shadow-sm bg-d7"
                    >
                      <input
                        id="Telephone"
                        type="tel"
                        name="user_phone"
                        required
                        placeholder="Phone"
                        className="placeholder-transparent bg-transparent border-b outline-none border-l5 text-l1 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-base text-l3 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Phone
                      </span>
                    </label>
                  </div>
                  <div className="relative px-4 py-8 text-base rounded-lg group">
                    <label
                      htmlFor="Date"
                      className="relative block text-base rounded-md shadow-sm bg-d7"
                    >
                      <ReactDatePicker
                        id="Date"
                        selected={date}
                        onChange={(date) => setDate(date)}
                        type="date"
                        name="user_date"
                        value={date}
                        placeholderText="Select a Date"
                        className="bg-transparent border-b outline-none placeholder-l3 border-l5 text-l1 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0"
                      />
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="col-span-1">
                    <label htmlFor="building_type">{BuildingType}</label>
                    <select
                      id="building_type"
                      name="user_buildingType"
                      required
                      className=""
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

                    <label htmlFor="application">{Application}</label>
                    <select
                      id="application"
                      name="user_application"
                      required
                      className=""
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

                <div className="relative col-span-2 px-4 py-8 text-base rounded-lg group">
                  <label
                    htmlFor="Notes"
                    className="relative block text-base rounded-md shadow-sm bg-d7"
                  >
                    <input
                      id="Notes"
                      type="text"
                      name="user_notes"
                      className="placeholder-transparent bg-transparent border-b outline-none border-l5 text-l1 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0"
                      value={notes}
                      placeholder="Notes"
                      onChange={(e) => setNotes(e.target.value)}
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-base text-l3 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Anything else?
                    </span>
                  </label>
                </div>

                {/* End Grid */}

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

            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {/* Icon Block */}
              <div className="flex py-6 gap-x-7">
                <svg
                  className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Knowledgebase
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We&apos;re here to help with any questions or code.
                  </p>
                  <a
                    className="inline-flex items-center mt-2 text-sm font-medium text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    href="#"
                  >
                    Contact support
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
              <div className="flex py-6 gap-x-7">
                <svg
                  className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    FAQ
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Search our FAQ for answers to anything you might ask.
                  </p>
                  <a
                    className="inline-flex items-center mt-2 text-sm font-medium text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    href="#"
                  >
                    Visit FAQ
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
              <div className="flex py-6 gap-x-7">
                <svg
                  className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Developer APIs
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Check out our development quickstart guide.
                  </p>
                  <a
                    className="inline-flex items-center mt-2 text-sm font-medium text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    href="#"
                  >
                    Contact sales
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
              <div className="flex py-6 gap-x-7">
                <svg
                  className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Contact us by email
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    If you wish to write us an email instead please use
                  </p>
                  <a
                    className="inline-flex items-center mt-2 text-sm font-medium text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    href="#"
                  >
                    example@site.com
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

export default ContactSection2;
