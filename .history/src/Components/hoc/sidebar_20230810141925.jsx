import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

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
          <nav>
            <ul className='flex justify-center flex-rows'>
              <li><Link to="/" onClick={onClose} className="p-4 text-white">Home</Link></li>
              <li><Link to="/about" onClick={onClose} className="p-4 text-white">About</Link></li>
              <li><Link to="/contact" onClick={onClose} className="p-4 text-white">Contact</Link></li>
            </ul>
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