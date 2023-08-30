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
  const numSteps = 3;

  const handleSetStep = (num) => {
    if ((stepsComplete === 0 && num === -1) ||
      (stepsComplete === numSteps && num === 1)) {
      return;} setStepsComplete((pv) => pv + num);
  };

  return (
		<>
			<section className='max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 mx-auto flex flex-wrap items-start lg:flex-nowrap'>
				<div className='p-4'>
					<div className='grid grid-cols-1 gap-2 md:grid-cols-[1fr,2fr,1fr]'>
						<h1 className='relative p-4 h1'>
							Schedule your<span className='text-r'> free</span> estimate
						</h1>
						<div className='w-full p-4 px-8 lg:p-8 lg:px-12 mx-auto rounded-2xl border-[1px] border-b3 group shadow-nimble bg-gradient-to-tl from-d7 to-d6'>
							<Steps numSteps={numSteps} stepsComplete={stepsComplete} />
							<div className='flex p-2 my-6 h-fit justify-evenly'>
								<form ref={form} onSubmit={sendEmail}>
									{stepsComplete === 0 && <NameInput />}
									{stepsComplete === 0 && <PhoneInput />}
									{stepsComplete === 0 && <EmailInput />}
									{stepsComplete === 1 && <DateInput />}
									{stepsComplete === 1 && <BuildingSelect />}
									{stepsComplete === 1 && <ApplicationSelect />}
									{stepsComplete === 2 && <NotesInput />}
									{stepsComplete === 2 && <Send />}
								</form>
							</div>
							<div className='flex items-center justify-end gap-2'>
								<button onClick={() => handleSetStep(-1)} className='px-4 py-1 rounded text-l1 hover:bg-d6'>
									Prev
								</button>
								<button onClick={() => handleSetStep(1)} className='px-4 py-1 rounded text-l1 bg-r'>
									Next
								</button>
							</div>
						</div>
						<div className='w-full p-4 lg:pb-8 rounded-2xl'>
							<div className='flex py-4 text-left'>
								<div>
									<h3 className='font-semibold text-yw'>Other ways to connect</h3>
									<p className='px-8 mt-1 text-sm lg:text-left lg:px-0 text-w3'>
										{' '}
										Our office is open Monday-Friday from 8am to 4pm. If you your request is urgent, we do our best to
										respond to calls and texts 24/7.
									</p>
								</div>
							</div>
							<div className='w-64 p-4 py-6 bg-white shadow-lg rounded-2xl'>
								<div className='flex flex-col items-center justify-center'>
									<div className='relative w-24 h-24 bg-green-200 rounded-full'>
										<svg
											width='20'
											height='20'
											fill='currentColor'
											viewBox='0 0 2304 1792'
											className='absolute w-8 h-8 text-green-700 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'
											xmlns='http://www.w3.org/2000/svg'>
											<path d='M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z'></path>
										</svg>
									</div>
									<p className='mt-4 mb-4 text-xl font-medium text-gray-800'>Justice</p>
									<p className='px-2 text-xs text-center text-gray-400'>
										I therefore look forward to further developments in this area so that we can ease the path in
										bringing these reckless individuals to justice.
									</p>
								</div>
							</div>
							<div className='w-64 p-4 py-6 bg-white shadow-lg rounded-2xl'>
								<div className='flex flex-col items-center justify-center'>
									<div className='relative w-24 h-24 bg-green-200 rounded-full'>
										<svg
											width='20'
											height='20'
											fill='currentColor'
											viewBox='0 0 2304 1792'
											className='absolute w-8 h-8 text-green-700 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'
											xmlns='http://www.w3.org/2000/svg'>
											<path d='M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z'></path>
										</svg>
									</div>
									<p className='mt-4 mb-4 text-xl font-medium text-gray-800'>Justice</p>
									<p className='px-2 text-xs text-center text-gray-400'>
										I therefore look forward to further developments in this area so that we can ease the path in
										bringing these reckless individuals to justice.
									</p>
								</div>
							</div>
							<div className='w-64 p-4 py-6 bg-white shadow-lg rounded-2xl'>
								<div className='flex flex-col items-center justify-center'>
									<div className='relative w-24 h-24 bg-green-200 rounded-full'>
										<svg
											width='20'
											height='20'
											fill='currentColor'
											viewBox='0 0 2304 1792'
											className='absolute w-8 h-8 text-green-700 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'
											xmlns='http://www.w3.org/2000/svg'>
											<path d='M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z'></path>
										</svg>
									</div>
									<p className='mt-4 mb-4 text-xl font-medium text-gray-800'>Justice</p>
									<p className='px-2 text-xs text-center text-gray-400'>
										I therefore look forward to further developments in this area so that we can ease the path in
										bringing these reckless individuals to justice.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

const Steps = ({ numSteps, stepsComplete }) => {
  const stepArray = Array.from(Array(numSteps).keys());

  return (
    <div className="flex items-center justify-between gap-4">
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