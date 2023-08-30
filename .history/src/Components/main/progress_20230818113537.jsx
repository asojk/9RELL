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
    <label htmlFor="user_name"
    className="block px-3 py-2 overflow-hidden border rounded-md bg-d7 border-b3 focus-within:border-rd3 focus-within:ring-1 focus-within:ring-r">
        <span className="text-xs font-medium text-l1">*Name</span>
        <input type="text" name="user_name" required autoComplete="name"
        value={name} onChange={(e) => setName(e.target.value)}
        className="w-full p-0 mt-1 bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5"/>
    </label>);
};
const EmailInput = () => {
    const [email, setEmail] = useState('');
    return (
    <label htmlFor="user_email"
    className="block px-3 py-2 overflow-hidden border rounded-md bg-d7 border-b3 focus-within:border-rd3 focus-within:ring-1 focus-within:ring-r">
        <span className="text-xs font-medium text-l1">*Email</span>
        <input type="email" name="user_email" required autoComplete="email"
        value={email} onChange={(e) => setEmail(e.target.value)}
        className="w-full p-0 mt-1 bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5"/>
    </label>);
};
const PhoneInput = () => {
    const [phone, setPhone] = useState('');
    return (
    <label htmlFor="user_phone"
    className="block px-3 py-2 overflow-hidden border rounded-md bg-d7 border-b3 focus-within:border-rd3 focus-within:ring-1 focus-within:ring-r">
        <span className="text-xs font-medium text-l1">*Phone Number</span>
        <input type="tel" name="user_phone" required autoComplete="tel"
        value={phone} onChange={(e) => setPhone(e.target.value)}
        className="w-full p-0 mt-1 bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5"/>
    </label>);
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
    <label htmlFor="date"
    className="block px-3 py-2 overflow-hidden border rounded-md bg-d7 border-b3 focus-within:border-rd3 focus-within:ring-1 focus-within:ring-r">
        <ReactDatePicker autoComplete="off"
              inputID="date" selected={date} onChange={(date) => setDate(date)}
              filterDate={isWeekday} monthsShown={1} minDate={minDate}
              type="date" name="user_date" value={date}
              placeholderText="Select"
        className="w-full p-0 mt-1 bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5"/>
    </label>);
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

  const [stepsComplete, setStepsComplete] = useState(0);
  const numSteps = 4;

  const handleSetStep = (num) => {
    if (
      (stepsComplete === 0 && num === -1) ||
      (stepsComplete === numSteps && num === 1)
    ) {
      return;
    }

    setStepsComplete((pv) => pv + num);
  };

  return (
    <div className="px-4 py-14">
      <div className="w-full max-w-2xl p-8 mx-auto rounded-2xl bg-d7 shadow-nimble">
        <Steps numSteps={numSteps} stepsComplete={stepsComplete} />
        <div className="flex h-48 p-2 my-6 rounded-lg">
            {stepsComplete === 0 && <NameInput />}
            {stepsComplete === 0 && <EmailInput />}
            {stepsComplete === 0 && <PhoneInput />}
            {stepsComplete === 1 && <DateInput />}
        </div>
        <div className="flex items-center justify-end gap-2">
          <button onClick={() => handleSetStep(-1)}
            className="px-4 py-1 rounded text-l1 hover:bg-d6">Prev
          </button>
          <button onClick={() => handleSetStep(1)}
            className="px-4 py-1 rounded text-l1 bg-r">Next
          </button>
        </div>
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