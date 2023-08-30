import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactButtons from "./ContactButtons";
import {CategoryI} from "../hoc/iconsR";
import SideBar from "./SideBar";
import { motion } from "framer-motion";



function Navbar() {
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
        <div className="w-1/3">
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.225, ease: "easeIn" }}
            className=""><button onClick={<ContactButtons/>} className="relative inline-flex items-center justify-center m-1 mt-2 text-center cursor-pointer lg:text-lg lg:px-2 lg:py-3 btn bg-r border-l1 hover:bg-r text-l1">Schedule your free estimate</button></motion.button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
