import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CategoryI } from "../hoc/iconsR";
import SideBar from "./SideBar";
import Cbuttons from "./cbuttons";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full flex items-center px-2 md:px-[10vw] xl:px-[20vw] py-4 z-10">
        <div className="w-1/3 pl-8">
          <button onClick={() => setSidebarOpen(true)}
            className="w-12 h-12 p-2 transition-colors duration-200 border rounded-lg shadow-sm cursor-pointer text-l1 lg:w-16 lg:h-16 bg-d6 shadow-d9 border-b3 hover:bg-d6 hover:text-r">
            <svg stroke="currentColor" strokeWidth="1px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g> <g> <path d="M18.436,10.997h-5.87c-1.379,0-2.5-1.122-2.5-2.5V5.564c0-1.378,1.121-2.5,2.5-2.5h5.87&#xA; c1.379,0,2.5,1.122,2.5,2.5v2.933C20.936,9.876,19.814,10.997,18.436,10.997z M12.565,4.064c-0.827,0-1.5,0.673-1.5,1.5v2.933&#xA; c0,0.827,0.673,1.5,1.5,1.5h5.87c0.827,0,1.5-0.673,1.5-1.5V5.564c0-0.827-0.673-1.5-1.5-1.5H12.565z"/> <path d="M5.564,10.998c-1.379,0-2.5-1.122-2.5-2.5V5.565c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5&#xA; v2.933C8.064,9.876,6.943,10.998,5.564,10.998z M5.564,4.065c-0.827,0-1.5,0.673-1.5,1.5v2.933c0,0.827,0.673,1.5,1.5,1.5&#xA; s1.5-0.673,1.5-1.5V5.565C7.064,4.738,6.392,4.065,5.564,4.065z"/></g> <path d="M18.436,20.936H5.564c-1.379,0-2.5-1.122-2.5-2.5v-2.933c0-1.378,1.121-2.5,2.5-2.5h12.871&#xA; c1.379,0,2.5,1.122,2.5,2.5v2.933C20.936,19.814,19.814,20.936,18.436,20.936z M5.564,14.003c-0.827,0-1.5,0.673-1.5,1.5v2.933&#xA; c0,0.827,0.673,1.5,1.5,1.5h12.871c0.827,0,1.5-0.673,1.5-1.5v-2.933c0-0.827-0.673-1.5-1.5-1.5H5.564z"/></g>
            </svg>
          </button>
          <SideBar
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)} />
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
