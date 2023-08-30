import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactButtons from "./ContactButtons";
import {CategoryI} from "../hoc/iconsR";
import SideBar from "./SideBar";

function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button 
      className="ml-12 cursor-pointer btn md:hidden text-l1 bg-r group" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      Contact
      {isOpen && (
        <ul className="absolute p-2 m-0 mt-2 w-fit h-fit top-12 right-2 text-l1">
          <li className="flex items-center gap-2 py-2 btn text-l1 bg-d9">
            <FiPhone className="w-6 h-6" />
            <a href="tel:1-800-555-5555">Call 1-800-555-5555</a>
          </li>
          <li className="flex items-center gap-2 py-2 btn text-l1 bg-d9">
            <FiSend className="w-6 h-6" />
            <a href="mailto:roof@grell.pro">Email roof@grell.pro</a>
          </li>
          <li className="flex items-center gap-2 py-2 btn text-l1 bg-d9">
            <FiMessageCircle className="w-6 h-6" />
            <a href="text:5152276367">Text Us (515)227-6367</a>
          </li>
        </ul>
      )}
    </button>
  );
}

export default ContactButton;


export function Navbar() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full flex items-center justify-between px-[10vw] py-4 z-10">
        <div className="w-1/3">
				<button
				onClick={() => setSidebarOpen(true)}
				className="w-[3.5rem] h-[3.5rem] lg:w-[4.5rem] lg:h-[4.5rem] cursor-pointer bg-d7 btn rounded-2xl hover:bg-d6 border-w4"
				>
					<CategoryI /></button>
      <SideBar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
          
        </div>
        <div className="items-center w-1/3 text-center bg-transparent place-content-center">
          <Link to="/">
            <img
              className="mx-auto w-2/2 md:w-4/4 lg:w-5/6 xl:w-5/8"
              src="https://grell.s3.us-east-2.amazonaws.com/grell/W-Tag.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="w-4/12">
          <div className="hidden md:block">
          <a className="ml-12">Office Open M-F<br></br> </a>
          <a className="ml-12">8AM - 4PM </a>
          <a className="ml-12">Available 24/7</a>

        <ContactButtons />
        </div>
        <ContactButton />
        </div>
      </nav>
    </>
  );
}
