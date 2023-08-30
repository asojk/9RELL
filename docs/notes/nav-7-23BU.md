# nav-7-23BU

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { Modal } from "@nextui-org/react";
import Contact from "./contact";

import {
FiEdit,
FiChevronDown,
FiTrash,
FiShare,
FiPlusSquare,
} from "react-icons/fi";

function Navbar() {
const [open, setOpen] = useState(false);
const [menuVisible, setMenuVisible] = React.useState(false);
const [contactVisible, setContactVisible] = React.useState(false);

const closeMenuHandler = () => {
setMenuVisible(false);
console.log("Menu closed");
};

const openContactHandler = () => setContactVisible(true);
const closeContactHandler = () => {
setContactVisible(false);
console.log("Contact closed");
};

return (
<>
<nav className="fixed w-full flex items-center justify-between px-[10vw] py-4 bg-transparent z-10">
<div className="w-1/3">
<motion.div animate={open ? "open" : "closed"} className="relative">
<button
onClick={() => setOpen((pv) => !pv)}
className="flex items-center gap-2 px-3 py-2 transition-colors bg-indigo-500 rounded-md text-indigo-50 hover:bg-indigo-500" >
<motion.span variants={iconVariants}>
<FiChevronDown />
</motion.span>
</button>
<motion.ul
initial={wrapperVariants.closed}
variants={wrapperVariants}
style={{ originY: "top", translateX: "-50%" }}
className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden" >
<motion.li variants={itemVariants}>
<button className="flex items-center gap-2 px-3 py-2 transition-colors bg-indigo-500 rounded-md text-indigo-50 hover:bg-indigo-500">
<motion.span variants={actionIconVariants}>
<FiEdit />
</motion.span>
<span>Edit</span>
</button>
</motion.li>
<motion.li variants={itemVariants}>
<button className="flex items-center gap-2 px-3 py-2 transition-colors bg-indigo-500 rounded-md text-indigo-50 hover:bg-indigo-500">
<motion.span variants={actionIconVariants}>
<FiPlusSquare />
</motion.span>
<span>Duplicate</span>
</button>
</motion.li>
</motion.ul>
</motion.div>
</div>
<div className="w-1/3 text-center">
<Link to="/">
<img
              className="mx-auto w-2/2 md:w-4/4 lg:w-5/6 xl:w-5/8"
              src="/assets/grell/LOGO.svg"
              alt="Logo"
            />
</Link>
</div>
<div className="w-1/3 text-right">
<button
            onClick={openContactHandler}
            className="p-3 rounded-lg bg-[var(--blue)] text-white"
          >
Contact
</button>
<Modal
blur
closeButton
aria-labelledby="modal-title"
open={contactVisible}
onClose={closeContactHandler}
width="fit-content"
css={{ backgroundColor: "#111" }} >
<Modal.Body
css={{
                margin: "0",
                padding: "$10",
                textAlign: "center",
              }} >
<Contact />
</Modal.Body>
</Modal>
</div>
</nav>
<Menu isOpen={menuVisible} onClose={closeMenuHandler} />
</>
);
}

export default Navbar;

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
open: { rotate: 180 },
closed: { rotate: 0 },
};

const itemVariants = {
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

const actionIconVariants = {
open: { scale: 1, y: 0 },
closed: { scale: 0, y: -7 },
};
