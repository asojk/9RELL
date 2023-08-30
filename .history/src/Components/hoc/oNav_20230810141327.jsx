import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactButtons from "./ContactButtons";
import {
  ActivityIcon,
  CategoryI,
  CgMenuRoundI,
  FlashIcon,
  MaintenanceI,
  NewI,
  QuestionI,
  ReplaceI,
  ToolsI,
  UserIcon,
  WarrantyI,
} from "../hoc/iconsR";
import SideBar from "./SideBar";
import("preline");

const MenuItem = React.memo(({ to, title, icon }) => (
  <Link to={to}>
    <button className="flex items-center px-6 py-2 cursor-pointer md:py-4 rounded-xl">
      <span className="col-span-1 pr-4">{icon}</span>
      <span className="text-xs text-l1 md:text-lg">{title}</span>
    </button>
  </Link>
));

const menuItems = [
  { to: "/repair", title: "Repair", icon: <ToolsI /> },
  { to: "/replacement", title: "Replace", icon: <ReplaceI /> },
  { to: "/new-roof", title: "Building New", icon: <NewI /> },
  { to: "/maintenance", title: "Maintenance", icon: <MaintenanceI /> },
  { to: "/warranty", title: "Warranty", icon: <WarrantyI /> },
  { to: "/products", title: "Products", icon: <CgMenuRoundI /> },
  { to: "/faq", title: "FAQ", icon: <QuestionI /> },
  { to: "/about", title: "About", icon: <UserIcon /> },
  { to: "/projects", title: "Projects", icon: <FlashIcon /> },
  { to: "/press", title: "Press", icon: <ActivityIcon /> },
];

function Navbar() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full flex items-center justify-between px-[10vw] py-4 z-10">
        <div className="w-1/3">
				<button
				onClick={() => setSidebarOpen(true)}
				className="w-[3rem] h-[3rem] cursor-pointer bg-d7 btn rounded-2xl"
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
          <ContactButtons />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
