import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
import { FiHome } from "react-icons/fi";

function SideBar({ isOpen, onClose }) {
  const node = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        return;
      }
      onClose();
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={node}
          className="fixed top-0 left-0 z-50 w-64 h-full px-4 py-12 overflow-auto text-base border-r-2 lg:w-80 bg-d7 rounded-r-2xl text-l1 border-rd3"
          variants={sidebarVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <nav className="flex flex-col flex-wrap w-full p-6">
            <div className='absolute top-0 right-0 bg-d7 opacity-30 hover:opacity-100'>
          <button
                    onClick={onClose}
                    type="button"
                    className="inline-flex items-center justify-center w-12 h-12 gap-2 transition border rounded-2xl text-l1 border-d5 hover:text-l5"
                    aria-label="Toggle navigation"
                  >
                    <span className="sr-only">Close Sidebar</span>
                    <svg
                      className="w-3 h-3"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  </button>
                  </div>
                  <ul className='flex flex-col h-full gap-4'>
            <div className="w-full pt-6 pb-2 pl-4 text-sm lg:text-sm md:pt-8 text-w4">
              Services
            </div>
            <MenuItem to="/new-roof" title="Building New" icon={<NewI />} />
            <MenuItem to="/repair" title="Repair" icon={<ToolsI />} />
            <MenuItem
              to="/replacement"
              title="Replacement"
              icon={<ReplaceI />}
            />
            <MenuItem
              to="/maintenance"
              title="Maintenance"
              icon={<MaintenanceI />}
            />
            <div className="w-full pt-6 pb-2 pl-4 text-sm lg:text-sm md:pt-8 text-w4">
              Information
            </div>
            <MenuItem to="/warranty" title="Warranty" icon={<WarrantyI />} />
            <MenuItem to="/products" title="Products" icon={<CgMenuRoundI />} />
            <MenuItem to="/faq" title="FAQ" icon={<QuestionI />} />
            <div className="w-full pt-6 pb-2 pl-4 text-sm lg:text-sm md:pt-8 text-w4">
              About
            </div>
            <MenuItem to="/about" title="About Grell" icon={<UserIcon />} />
            <MenuItem to="/projects" title="Projects" icon={<FlashIcon />} />
            <MenuItem to="/press" title="Press" icon={<ActivityIcon />} />
            </ul>
            <div className="flex items-center justify-center w-full pt-6 pb-2 text-sm lg:text-base md:pt-8 text-w4">
              <div className="absolute grid grid-cols-2 bottom-8">
                <div className="col-span-1">
                <Link to="/">
                    <button className="grid grid-cols-2 btn border-d5 text-l1">
                      <FiHome />
                      <span className="-ml-3">Home</span>
                    </button>
                  </Link>
                </div>
                <div className="col-start-2 pl-12">


                </div>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideBar;

const MenuItem = ({ to, title, icon }) => (
  <Link to={to}>
    <button className="flex items-center px-6 py-2 cursor-pointer md:py-4 rounded-xl">
      <span className="col-span-1 pr-4">{icon}</span>
      <span className="text-sm font-medium leading-none md:text-base text-l1 lg:text-lg">
        {title}
      </span>
    </button>
  </Link>
);

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};
