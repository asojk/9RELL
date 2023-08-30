import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
  Bars2Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { FiSend, FiMessageCircle, FiPhone } from "react-icons/fi";

import ContactButtons from "./ContactButtons";
import {
  FiMenu,
  FiHome,
  FiX,
} from "react-icons/fi";
import {BsTools, BsShieldCheck, BsBuildingGear} from 'react-icons/bs';
import {VscNewFile, VscArrowSwap} from 'react-icons/vsc';
import {CgProfile, CgMenuRound} from 'react-icons/cg';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {ActivityIcon, FlashIcon } from '../hoc/iconsR';
import { MenuButton, MenuIcon } from "@chakra-ui/react";
 
// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];
 

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a key={title} MenuHandler>
      <MenuItem>
        <Typography variant="h6" color="l1" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="l5" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
  }
 
// nav list component
const navListItems = [
  {
    label: "Repair",
    icon: BsTools,
    to: "/repair",
  },
  {
    label: "Replace",
    icon: VscArrowSwap,
    to: "/replacement",
  },
  {
    label: "New Roof",
    icon: VscNewFile,
    to: "/new-roof",
  },
  {
    label: "Maintenance",
    icon: BsBuildingGear,
    to: "/maintenance",
  },
  {
    label: "Warranty",
    icon: BsShieldCheck,
    to: "/warranty",
  },
  {
    label: "Products",
    icon: CgMenuRound,
    to: "/products",
  },
  {
    label: "FAQ",
    icon: AiOutlineQuestionCircle,
    to: "/faq",
  },
  {
    label: "About Us",
    icon: UserCircleIcon,
    to: "/about",
  },
  {
    label: "Projects",
    icon: ActivityIcon,
    to: "/projects",
  },
  {
    label: "Press",
    icon: FlashIcon,
    to: "/press",
  },
  {
    label: "Home",
    icon: FiHome,
    to: "/",
  },
];

function NavList() {
  return (
    
    <ul className="grid grid-flow-row gap-8 p-4 px-8 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center bg-d8 rounded-xl">
      <NavListMenu />
      {navListItems.map(({ to, label, icon }, key) => (
        
        <Link to={to}>
        <Typography
          key={label}
          as="a"
          href="#"
          className="text-l1 hover:text-r text-sm md:text-[1rem] lg:text-xl"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px] mr-3" })}{" "}
            {label}
          </MenuItem>
        </Typography>
        </Link>
      ))}
    </ul>
  );
}

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

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar className="fixed z-10 items-center p-2 py-4 mx-auto border-0">
      <div className="relative flex items-center mx-auto text-l1">
      <div className="sticky top-0 w-4/12">
      <div id="navbar-collapse-with-animation" className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block">
        <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
          <div className="flex flex-col mt-5 divide-y divide-gray-200 gap-x-0 divide-dashed md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
            <a className="py-3 font-medium text-blue-600 md:py-6 dark:text-blue-500" href="#" aria-current="page">Landing</a>

            <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
              <button type="button" className="flex items-center w-full font-medium text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-500">
                Company
                <svg className="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </button>

              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-10 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-gray-800 dark:divide-gray-700 before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5">
                <a className="inline-flex w-full p-4 text-gray-600 rounded-md gap-x-5 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  <svg className="flex-shrink-0 w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z" />
                  </svg>
                  <div className="grow">
                    <span className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Data</span>
                    How you get the most accurate and up-to-date data
                  </div>
                </a>

                <div className="my-2 border-t border-gray-100 dark:border-gray-800" />

                <a className="inline-flex w-full p-4 text-gray-600 rounded-md gap-x-5 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  <svg className="flex-shrink-0 w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                  <div className="grow">
                    <span className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Team <span className="inline px-2 py-1 ml-1 text-xs text-white bg-blue-600 rounded-full">We&apos;re hiring</span></span>
                    Meet the people building products to help your business grow
                  </div>
                </a>

                <div className="my-2 border-t border-gray-100 dark:border-gray-800" />

                <a className="inline-flex w-full p-4 text-gray-600 rounded-md gap-x-5 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  <svg className="flex-shrink-0 w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                  </svg>
                  <div className="grow">
                    <span className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Blog</span>
                    The latest news, feature releases, and how to grow with data
                  </div>
                </a>
              </div>
            </div>
      <FiMenu
          onClick={toggleIsNavOpen}
          className="w-12 h-12 p-3 ml-12 bg-l1 text-d9 rounded-2xl"
        >
          <Bars2Icon className="w-6 h-6" />
        </FiMenu>
        </div>
      <div className="sticky top-0 w-4/12">
      <Link to='/'>
						<img className='z-50 mx-auto w-2/2 md:w-4/4 lg:w-5/6 xl:w-5/8' src='https://grell.s3.us-east-2.amazonaws.com/grell/W-Tag.svg' alt='Logo' />
					</Link>
        </div>
        <div className="w-4/12">
          <div className="hidden md:block">
          <a className="ml-12">Office Open M-F<br></br> </a>
          <a className="ml-12">8AM - 4PM </a>

        <ContactButtons />
        </div>
        <ContactButton />
        </div>
      </div>

      <MobileNav open={isNavOpen} className="gap-8 px-8 py-4 mr-4 w-fit rounded-xl">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}