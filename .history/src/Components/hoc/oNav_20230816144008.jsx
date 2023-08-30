import React, { useState } from "react";
import { Link } from "react-router-dom";
import {CategoryI} from "../hoc/iconsR";
import SideBar from "./SideBar";
import Cbuttons from "./cbuttons";

function Navbar() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full flex items-center justify-between px-2 md:px-[10vw] xl:px-[20vw] py-4 z-10">
        <div className="w-1/3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-[3.5rem] h-[3.5rem] lg:w-[4.5rem] lg:h-[4.5rem] cursor-pointer pl-8 inline-flex overflow-hidden border rounded-md shadow-sm shadow-d9 border-b3 bg-d7 hover:bg-d6">
            <CategoryI />
          </button>
          <SideBar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
          
        </div>
        <div className="items-center w-1/3 text-center bg-transparent place-content-center">
          <Link to="/">
            <img
              className="mx-auto w-2/2 md:w-4/4 lg:w-5/6 xl:w-5/8 xl:max-w-[32rem]"
              src="https://grell.s3.us-east-2.amazonaws.com/grell/W-Tag.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="w-1/3">
          <Cbuttons />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
