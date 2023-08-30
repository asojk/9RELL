import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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

function SideBar({ isOpen, onClose }) {
  const node = useRef();

  useEffect(() => {
    const handleClickOutside = e => {
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
          className="fixed top-0 left-0 z-50 w-64 h-full px-4 py-12 overflow-auto text-base bg-d7 text-l1"
          variants={sidebarVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
        <nav className="flex flex-col flex-wrap w-full p-6">
          <div className="w-full pl-3 text-sm text-[var(--gray-3)]">
            Services</div>

          <div className="w-full pl-3 text-sm text-[var(--gray-3)]">
            Information</div>

          <div className="w-full pl-3 text-sm text-[var(--gray-3)]">
            About</div>

            <div className="absolute bottom-0 ">
              <button onClick={onClose} className="p-4 text-l1">Close</button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


export default SideBar;

const MenuItem = ({to, title, icon}) => (
  <Link to={to}>
    <button className="flex items-center px-6 py-2 cursor-pointer md:py-4 rounded-xl">
      <span className="col-span-1 pr-4">{icon}</span>
      <span className="text-xs text-l1 md:text-lg">{title}</span>
    </button>
  </Link>
);

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};