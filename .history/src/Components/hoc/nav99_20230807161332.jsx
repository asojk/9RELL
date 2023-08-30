import React from "react";
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
        <button className="ml-12 cursor-pointer btn md:hidden text-l1 bg-r">
          Contact
        </button>
        </div>
      </div>

      <MobileNav open={isNavOpen} className="gap-8 px-8 py-4 mr-4 w-fit rounded-xl">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}