import React, { useState } from "react";
import { Link } from "react-router-dom";
import {CategoryI} from "../hoc/iconsR";
import SideBar from "./SideBar";
import Cbuttons from "./cbuttons";

function Navbar() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full flex items-center px-2 md:px-[10vw] xl:px-[20vw] py-4 z-10">
        <div className="w-1/3 pl-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-8 h-8 cursor-pointer lg:w-12 lg:h-12 bg-d6">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <g style={{}} transform="translate(0,0)">
                <path d="M256.352 93.28c-65.93 0-125.644 4.402-168.39 11.402-21.374 3.5-38.557 7.704-49.683 12.01-5.563 2.155-9.59 4.392-11.624 6.02-.637.51-.72.65-.95.897.23.245.312.39.95.9 2.034 1.627 6.06 3.864 11.623 6.017 11.125 4.307 28.308 8.512 49.68 12.012 42.748 7 102.46 11.4 168.392 11.4 65.93 0 125.643-4.4 168.39-11.4 21.374-3.5 38.557-7.706 49.682-12.013 5.562-2.153 9.587-4.39 11.62-6.017.64-.51.723-.655.952-.9-.23-.247-.313-.39-.95-.9-2.035-1.626-6.06-3.863-11.622-6.017-11.125-4.307-28.308-8.512-49.682-12.01-42.747-7-102.46-11.404-168.39-11.404zm-.352 9.183a163.82 16.505 0 0 1 92.246 2.867v27.258A163.82 16.505 0 0 1 256 135.473 163.82 16.505 0 0 1 92.182 118.97 163.82 16.505 0 0 1 256 102.462zm110.246 4.322a163.82 16.505 0 0 1 53.572 12.184 163.82 16.505 0 0 1-53.572 12.182v-24.367zM25 144.395v106.216h.154v8.585c.015-.522.326.768 3.977 2.98 4.275 2.587 11.744 5.63 21.66 8.442 3.438.976 7.193 1.93 11.21 2.862V155.956c-11.84-2.584-21.97-5.45-30.22-8.644-2.423-.94-4.67-1.905-6.78-2.917zm462 .337c-1.905.89-3.923 1.746-6.078 2.58-13.184 5.104-31.178 9.373-53.272 12.99-44.187 7.236-104.57 11.64-171.298 11.64-60.444 0-115.64-3.622-158.352-9.68V280.08c11.88 1.733 24.956 3.294 39.1 4.63 73.627 6.96 164.876 6.96 238.504 0 36.813-3.48 66.478-8.47 86.308-14.093 9.915-2.812 17.386-5.855 21.66-8.443 1.945-1.178 2.918-2.08 3.428-2.604V144.732zM48 288.514V496h38V296.46c-14.57-2.36-27.292-5.02-38-7.946zm416 .19c-21.43 5.786-50.79 10.532-86.703 13.927-75.007 7.092-166.884 7.092-241.89 0-4.578-.432-9.045-.89-13.407-1.364V496h342V288.705z" fill="#fff" fillOpacity="1"/></g>
              </svg>
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
