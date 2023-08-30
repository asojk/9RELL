import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { FiMessageCircle, FiPhone, FiSend } from "react-icons/fi";
import ReactDatePicker from "react-datepicker";
  import './datepick.css'
  import addDays from 'date-fns/addDays';
  import getDay from 'date-fns/getDay';
import { AnimatePresence, motion } from "framer-motion";


const NameInput = () => {
    const [name, setName] = useState('');
    return (
      <div className="flex flex-col w-full mb-4">
    <label htmlFor="user_name"
    className="block px-3 py-2 overflow-hidden border rounded-md bg-d7 border-b3 focus-within:border-rd3 focus-within:ring-1 focus-within:ring-r">
        <span className="text-sm font-medium text-l1">*Name</span>
        <input type="text" name="user_name" required autoComplete="name"
        value={name} onChange={(e) => setName(e.target.value)}
        className="w-full p-0 mt-1 bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5"/>
    </label>
    </div>);
};
const EmailInput = () => {
    const [email, setEmail] = useState('');
    return (
      <div className="flex flex-col w-full mb-8">
    <label htmlFor="user_email"
    className="block px-3 py-2 overflow-hidden border rounded-md bg-d7 border-b3 focus-within:border-rd3 focus-within:ring-1 focus-within:ring-r">
        <span className="text-sm font-medium text-l1">*Email</span>
        <input type="email" name="user_email" required autoComplete="email"
        value={email} onChange={(e) => setEmail(e.target.value)}
        className="w-full p-0 mt-1 bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5"/>
    </label>
    </div>);
};
const PhoneInput = () => {
    const [phone, setPhone] = useState('');
    return (
      <div className="flex flex-col w-full">
    <label htmlFor="user_phone"
    className="block px-3 py-2 overflow-hidden border rounded-md bg-d7 border-b3 focus-within:border-rd3 focus-within:ring-1 focus-within:ring-r">
        <span className="text-sm font-medium text-l1">*Phone Number</span>
        <input type="tel" name="user_phone" required autoComplete="tel"
        value={phone} onChange={(e) => setPhone(e.target.value)}
        className="w-full p-0 mt-1 bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5"/>
    </label>
    </div>);
};
const DateInput = () => {
    const [date, setDate] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const minDate = addDays(new Date(), 7); // One week from now
    const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
    };
    return (
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <p className="text-sm font-medium text-l1">If you'd like, select a day that works best for an inspection</p>
          </div>

    <label htmlFor="date"
    className="block px-3 py-2 overflow-hidden rounded-md cursor-pointer bg-d7 focus-within:border-rd3 focus-within:ring-1 focus-within:ring-r">
        <ReactDatePicker autoComplete="off"
              inputID="date" selected={date} onChange={(date) => setDate(date)}
              filterDate={isWeekday} monthsShown={1} minDate={minDate}
              type="date" name="user_date" value={date}
              placeholderText="Select"
        className="w-full p-0 mt-1 bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5"/>
    </label>
    </div>);
};
const BuildingSelect = () => {
    const [buildingType, setBuildingType] = useState('');
    return (
      <div className="flex flex-col w-full mb-8">
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
        <option value="Other">Other</option></select>
    </div>);
};
const ApplicationSelect = () => {
    const [application, setApplication] = useState('');
    return (
      <div className="flex flex-col w-full">
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
        <option value="I'm Not Sure">Not Sure</option></select>
    </div>);
};
const NotesInput = () => {
    const [notes, setNotes] = useState('');
    return (
    <label htmlFor="user_notes"
    className="block px-3 py-2 overflow-hidden border rounded-md bg-d7 border-b3 focus-within:border-rd3 focus-within:ring-1 focus-within:ring-r">
        <span className="text-sm font-medium text-l1">Do you have a special request or additional information to provide?</span>
        <input type="text" name="user_notes" id="notes" value={notes} onChange={(e) => setNotes(e.target.value)}
        className="w-full p-0 mt-1 bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5"/>
    </label>);
};
const Send = () => {
    return (
        <button type="submit" className="flex px-5 py-2 m-6 font-bold tracking-widest text-center uppercase transition-all duration-500 rounded-md justify-self-start justify-items-center w-fit text-r hover:text-l1 animate-btn-anim-1 hover:bg-r hover:shadow-xl">SEND</button>
    );
};

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

  const [stepsComplete, setStepsComplete] = useState(0);
  const numSteps = 4;

  const handleSetStep = (num) => {
    if ((stepsComplete === 0 && num === -1) ||
      (stepsComplete === numSteps && num === 1)) {
      return;} setStepsComplete((pv) => pv + num);
  };

  return (


    <div className="grid items-center gap-4 lg:grid-cols-[4fr,2fr] gap-8">

        <div className="grid max-w-3xl gap-2 px-8 py-10 rounded-md sm:grid-cols-2">
          <div className="w-full max-w-2xl p-8 mx-auto rounded-2xl bg-d7 shadow-nimble">
            <header className="header">
              <span className="title-head">Schedule a free estimate</span>
              <h1 class="h1">Contact</h1></header>
              <grid>

            <Steps numSteps={numSteps} stepsComplete={stepsComplete} />
              <div className="flex justify-around h-48 p-2 my-6 rounded-lg">
                <form ref={form} onSubmit={sendEmail}>
                    {stepsComplete === 0 && <NameInput />}
                    {stepsComplete === 0 && <PhoneInput />}
                    {stepsComplete === 1 && <EmailInput />}
                    {stepsComplete === 1 && <DateInput />}
                    {stepsComplete === 2 && <BuildingSelect />}
                    {stepsComplete === 2 && <ApplicationSelect />}
                    {stepsComplete === 3 && <NotesInput />}
                    {stepsComplete === 3 && <Send />}
                </form>
              </div>
            
            <div className="flex items-center justify-end gap-2">
              <button onClick={() => handleSetStep(-1)} className="px-4 py-1 rounded text-l1 hover:bg-d6">Prev</button>
              <button onClick={() => handleSetStep(1)} className="px-4 py-1 rounded text-l1 bg-r">Next</button>
            </div>
            </grid>
          </div>

          <grid>
          <div className="lg:ml-6 md:pl-0 bg-d7 shadow-nimble rounded-2xl md:max-w-[300px] lg:max-w-[300px]">
            <div className="flex py-6 pr-8 text-right"><div><h3 className="font-semibold text-yw">Other ways to connect</h3><p className="pl-8 mt-1 text-sm md:pl-16 text-w3"> Our office is open Monday-Friday from 8am to 4pm. If you your request is urgent, we do our best to respond to calls and texts 24/7.</p></div></div>
            <div className="flex items-center justify-end py-6 pr-12 gap-x-7 text-r"><FiMessageCircle />
              <div><h3 className="font-semibold text-w3">Text us</h3><a href="sms:+15152276367" className="items-center mt-2 text-sm font-medium text-w3 gap-x-2 hover:text-r">(515) 227-6367<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"/></svg></a></div></div>
            <div className="flex items-center justify-end py-6 pr-12 gap-x-7 text-r"><FiPhone />
              <div><h3 className="font-semibold text-w3">Call instead</h3><a className="items-center mt-2 text-sm font-medium text-w3 gap-x-2 hover:text-r" href="tel:+18002089693">1-800-208-9693 <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/></svg></a></div></div>
            <div className="flex items-center justify-end py-6 pr-12 gap-x-7 text-r"><FiSend />
              <div><h3 className="font-semibold text-w3">Send an email</h3><a className="items-center mt-2 text-sm font-medium text-w3 gap-x-2 hover:text-r" href="mailto:roof@grell.pro">roof@grell.pro<svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/></svg></a></div></div>
            
          </div>
          </grid>
        </div>

    </div>


  );
};

const Steps = ({ numSteps, stepsComplete }) => {
  const stepArray = Array.from(Array(numSteps).keys());

  return (
    <div className="flex items-center justify-between gap-3">
      {stepArray.map((num) => {
        const stepNum = num + 1;
        const isActive = stepNum <= stepsComplete;
        return (
          <React.Fragment key={stepNum}>
            <Step num={stepNum} isActive={isActive} />
            {stepNum !== stepArray.length && (
              <div className="relative w-full h-1 rounded-full bg-rd2">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 rounded-full bg-r"
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ ease: "easeIn", duration: 0.3 }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Step = ({ num, isActive }) => {
  return (
    <div className="relative">
      <div
        className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative z-10 transition-colors duration-300 ${
          isActive
            ? "border-rA text-l1"
            : "border-w4 text-w4"
        }`}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.svg key="icon-marker-check" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </motion.svg>
          ) : (
            <motion.span key="icon-marker-num"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              {num}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isActive && (
        <div className="absolute z-0 -inset-1.5 bg-rd2 rounded-full animate-pulse" />
      )}
    </div>
  );
};

export default Contact;