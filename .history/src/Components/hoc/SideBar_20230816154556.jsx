import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ActivityIcon, CgMenuRoundI, FlashIcon, MaintenanceI, NewI, QuestionI, ReplaceI, ToolsI, UserIcon, WarrantyI} from "../hoc/iconsR";
import { FiHome } from "react-icons/fi";

function SideBar({ isOpen, onClose }) {
  const node = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
        if (node.current.contains(e.target)) {return;}onClose();};
        if (isOpen) {document.addEventListener("mousedown", handleClickOutside);
        } else {document.removeEventListener("mousedown", handleClickOutside);}
        return () => {document.removeEventListener("mousedown", handleClickOutside);};
    }, [isOpen, onClose]);

return (
<AnimatePresence> {isOpen && (
  <motion.div ref={node} variants={sidebarVariants} initial="closed" animate="open" exit="closed"
    className="fixed top-0 left-0 z-50 h-full py-12 overflow-clip text-base border-r-2 w-42 lg:w-[25vw] bg-gradient-to-r from-d7 to-d6/95 via-d7 rounded-r-[25%] text-l1 border-b3">
  <nav className="flex flex-col flex-wrap w-full p-6">

    <motion.div variants={menuVariants}>
      <ul className='flex flex-col items-center h-full gap-2'>
        <div className="w-full pt-6 pb-2 pl-4 text-sm lg:text-sm md:pt-8 text-w4">Services</div>
          <MenuItem onClick={onClose} to="/new-roof" title="Building New" icon={<NewI />} />
          <MenuItem onClick={onClose} to="/repair" title="Repair" icon={<ToolsI />} />
          <MenuItem onClick={onClose} to="/replacement" title="Replacement" icon={<ReplaceI />}/>
          <MenuItem onClick={onClose} to="/maintenance" title="Maintenance" icon={<MaintenanceI />}/>
        <div className="w-full pt-6 pb-2 pl-4 text-sm lg:text-sm md:pt-8 text-w4">Information</div>
          <MenuItem onClick={onClose} to="/warranty" title="Warranty" icon={<WarrantyI />} />
          <MenuItem onClick={onClose} to="/products" title="Products" icon={<CgMenuRoundI />} />
          <MenuItem onClick={onClose} to="/faq" title="FAQ" icon={<QuestionI />} />
        <div className="w-full pt-6 pb-2 pl-4 text-sm lg:text-sm md:pt-8 text-w4">About</div>
          <MenuItem onClick={onClose} to="/about" title="About Grell" icon={<UserIcon />} />
          <MenuItem onClick={onClose} to="/projects" title="Projects" icon={<FlashIcon />} />
          <MenuItem onClick={onClose} to="/press" title="Press" icon={<ActivityIcon />} />
      </ul>

      <button onClick={onClose} type="button" aria-label="Toggle navigation"
        className="inline-flex items-center justify-center w-12 h-12 gap-2 transition border shadow-2xl rounded-2xl text-l1 border-d5 shadow-d7 hover:text-l5">
          <span className="sr-only">Close Sidebar</span>
          <svg className="w-3 h-3" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
      </button>
      <Link to="/" onClick={onClose}><button type="button" className="p-3 mt-6 btn border-d5 text-l1">
              <FiHome /><span className="">Home</span></button></Link>
    </motion.div>
  </nav>
  </motion.div>)}
</AnimatePresence>);}

export default SideBar;

const MenuItem = ({ to, title, icon, onClick }) => (
  <Link to={to} onClick={onClick}>
    <button className="flex items-center px-2 py-2 transition-colors duration-150 rounded-lg cursor-pointer lg:px-6 md:py-4">
      <span className="col-span-1 pr-4">
        <motion.span variants={iconVariants}>{icon}</motion.span></span>
      <span className="text-sm font-medium leading-none md:text-base text-l1 lg:text-lg">
        {title}
      </span>
    </button>
  </Link>
);

const sidebarVariants = {
  open: { x: 0,
    transition: {
      when: "beforeChildren",
    }},
  closed: { x: "-100%",
    transition: {
      when: "afterChildren",
     }}
    };

const menuVariantsBU = {
  open: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  closed: {
    scale: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180,
    transition: {
      duration: 0.2,
      ease: "linear",
      when: "afterChildren", 
  }},
  closed: { rotate: 0,
    transition: {
      duration: 0.2,
      ease: "linear",
      when: "beforeChildren",
     }}
};

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const sidebarVariantsX = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};