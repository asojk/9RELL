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
      <div className="grid max-w-3xl gap-2 px-8 py-10 rounded-md sm:grid-cols-2">
        <div className="grid">
          <div className="flex min-h-[60px] flex-col-reverse justify-center px-3 py-2 shadow-sm focus-within:shadow-inner relative z-0 group">
            <input id="floating_name" type="text" name="user_name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)}
              className="block w-full px-0 py-1 text-base bg-transparent border-0 border-b appearance-none text-l5 border-b1 focus:outline-none focus:ring-0 focus:border-y2 peer"/>
            <label htmlFor="floating_name"
              className="tracking-wide peer-focus:font-thin absolute text-base text-l5 duration-300 transform -translate-y-4 scale-100 top-3 -z-10 origin-[0] peer-focus:text-y2 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8"
            >* Name</label></div></div>
        <div className="grid pt-8 md:pt-0">
          <div className="first:flex min-h-[60px] flex-col-reverse justify-center px-3 py-2 shadow-sm focus-within:shadow-inner relative z-0 group">
            <input id="floating_email" type="email" name="user_email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-0 py-1 text-base bg-transparent border-0 border-b appearance-none text-l5 border-b1 focus:outline-none focus:ring-0 focus:border-y2 peer"/>
            <label htmlFor="floating_email"
              className="tracking-wide peer-focus:font-thin absolute text-base text-l5 duration-300 transform -translate-y-4 scale-100 top-3 -z-10 origin-[0] peer-focus:text-y2 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8"
            >* Email</label></div></div>
        <div className="grid">
          <div className="first:flex min-h-[60px] flex-col-reverse mt-8 justify-center px-3 py-2 shadow-sm focus-within:shadow-inner relative z-0 group">
            <input id="floating_phone" type="tel" name="user_phone" required autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
              className="block w-full px-0 py-1 text-base bg-transparent border-0 border-b appearance-none text-l5 border-b1 focus:outline-none focus:ring-0 focus:border-y2 peer"/>
            <label htmlFor="floating_phone"
              className="tracking-wide peer-focus:font-thin absolute text-base text-l5 duration-300 transform -translate-y-4 scale-100 top-3 -z-10 origin-[0] peer-focus:text-y2 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8"
            >* Phone</label></div></div></div>

      <div className="first:flex min-h-[60px] flex-col-reverse justify-center mx-8 relative lg:mb-8 z-1 items-center content-center">
        <div className="grid items-center grid-cols-2 gap-8 py-8">
            <label htmlFor="date" className="font-thin tracking-wide text-l5">If you'd like, select a day that works best for an inspection</label>
              <ReactDatePicker autoComplete="off"
              inputID="date" selected={date} onChange={(date) => setDate(date)}
              filterDate={isWeekday} monthsShown={1} minDate={minDate}
              type="date" name="user_date" value={date}
              placeholderText="Select"
              className="text-base font-thin tracking-wide normal-case bg-transparent rounded-lg outline-none cursor-pointer w-[12rem] btn border-b1 text-w4 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0"></ReactDatePicker>
              </div>

        <div className="grid grid-cols-2 gap-8 py-8">
          <div className="my-2 lg:mb-8">
          <div className="first:flex min-h-[60px] flex-col-reverse">
            <select id="building_type" name="user_buildingType" required value={buildingType}
                onChange={(e) => setBuildingType(e.target.value)}
                className="text-base font-thin tracking-wide normal-case bg-transparent rounded-lg outline-none cursor-pointer w-[12rem] btn border-b1 text-w4 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0">
                <option value="NA">* Building Type</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Medical">Medical</option>
                <option value="School">School</option>
                <option value="Office">Office</option>
                <option value="Retail">Retail</option>
                <option value="Residential">Residential</option>
                <option value="Other">Other</option></select></div></div>

          <div className="my-2">
          <div className="first:flex min-h-[60px] flex-col-reverse">
              <select id="application" name="user_application" required value={application} onChange={(e) => setApplication(e.target.value)}
                className="text-base font-thin tracking-wide normal-case bg-transparent rounded-lg outline-none cursor-pointer w-[12rem] btn border-b1 text-w4 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0">
                <option value="NA">* Application</option>
                <option value="New Construction">New Construction</option>
                <option value="Repair">Repair</option>
                <option value="Retrofit (Current is Metal)">Retrofit (Current is Metal)</option>
                <option value="Retrofit (Current is Rubber or Tar)">Retrofit (Current is Rubber or Tar)</option>
                <option value="Insulation (Energy Efficient)">Insulation (Energy Efficient)</option>
                <option value="PVC Duro-Last">PVC Duro-Last</option>
                <option value="EDPM Rubber Roofing">EDPM Rubber Roofing</option>
                <option value="Other">Other</option>
                <option value="I'm Not Sure">Not Sure</option></select></div></div></div></div>

          <div className="relative z-0 pl-8 mt-12 mb-8 lg:mt-4 group">
            <label htmlFor="notes" className="font-thin tracking-wide text-l5">
              Do you have a special request or additional information to provide?</label>
              <input type="text" name="user_notes" id="notes" value={notes} onChange={(e) => setNotes(e.target.value)}
                className="block w-full max-w-md px-0 py-2 text-base bg-transparent border appearance-none border-b1 textarea textarea-bordered textarea-md text-l5 focus:outline-none focus:ring-0 focus:border-y2 peer"/></div>
                <div className="grid pr-8">
                  <button type="submit" className="flex px-5 py-2 mt-4 mb-4 font-bold tracking-widest text-center uppercase transition-all duration-500 rounded-md justify-self-start justify-items-center w-fit text-l1 hover:text-l1 animate-btn-anim-1 hover:bg-r hover:shadow-xl">SEND</button></div>
              <a className="flex justify-start px-4 pb-2 text-sm italic text-l5">* indicates required fields</a></div></div>
              </form>
            </div>
            {/* End Card */}

            <div className="pl-6 md:pl-0">
              <div className="flex py-6 pr-8 text-right">
                <div><h3 className="font-semibold text-yw">Other ways to connect</h3>
                  <p className="pl-8 mt-1 text-sm md:pl-16 text-w3">
                    Our office is open Monday-Friday from 8am to 4pm. If you
                    your request is urgent, we do our best to respond to calls
                    and texts 24/7.</p></div></div>

              <div className="flex justify-end py-6 pr-12 gap-x-7 text-r"><FiMessageCircle /><div>
                <h3 className="font-semibold text-w3">Text us</h3>
                <a href="text:5152276367" className="inline-flex items-center mt-2 text-sm font-medium text-w3 gap-x-2 hover:text-r">(515) 227-6367
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1">
                    <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"/></svg></a></div>
          </div>
              <div className="flex justify-end py-6 pr-12 gap-x-7 text-r">
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
              <div className="flex justify-end py-6 pr-12 gap-x-7 text-r">
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
