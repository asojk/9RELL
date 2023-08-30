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
  InformationCircleIcon,
  CubeTransparentIcon,
  UserCircleIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ContactButtons from "./ContactButtons";
 
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
    <a href="#" key={title}>
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
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" className="font-normal">
            <MenuItem className="items-center hidden gap-2 text-l1 text-sm md:text-[1rem] lg:text-2xl lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[24px] w-[24px]" /> Services{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="grid w-full h-full col-span-3 rounded-md text-l1 place-items-center"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="flex flex-col w-full col-span-4 gap-1 p-4 rounded-lg text-l1 bg-d9/50">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-l1 lg:hidden">
        <Square3Stack3DIcon className="h-[24px] w-[24px]" /> Services{" "}
      </MenuItem>
      <ul className="flex flex-col w-full gap-1 ml-6 text-l1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
// nav list component
const navListItems = [
  {
    label: "About Us",
    icon: UserCircleIcon,
  },
];
 
function NavList() {
  return (
    <ul className="flex flex-col gap-8 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          className="text-l1 hover:text-r text-sm md:text-[1rem] lg:text-xl"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[24px] w-[24px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
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
      <div className="sticky top-0 w-1/3">
      <Link to='/'>
						<img className='z-50 mx-auto w-2/2 md:w-4/4 lg:w-5/6 xl:w-5/8' src='https://grell.s3.us-east-2.amazonaws.com/grell/W-Tag.svg' alt='Logo' />
					</Link>
        </div>
        <div className="absolute hidden top-1/4 left-2/4 -translate-y-2/4 lg:block">
        <ContactButtons />
        </div>
        <IconButton
          size="lg"
          color="l1"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="w-6 h-6" />
        </IconButton>
      </div>

      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}