import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContactButtons from "./ContactButtons";

import {FiHome} from "react-icons/fi";
import {ActivityIcon, CategoryI, CgMenuRoundI, FlashIcon, MaintenanceI, NewI, QuestionI, ReplaceI, ToolsI, UserIcon, WarrantyI} from '../hoc/iconsR';
import('preline')

const itemVariants = {
	hidden: {opacity: 0, y: 50},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 20,
		},
	},
	exit: {opacity: 0, y: -50, transition: {duration: 0.5}},
};

const containerVariants = {
	hidden: {opacity: 0},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.1,
			staggerDirection: -1,
		},
	},
};

const hoverVariants = {
	hovered: {
		rotateY: '15deg',
		rotateX: '2.5deg',
		x: -10,
		style: {
			transformStyle: 'preserve-3d',
		},
		transition: {
			duration: 0.35,
		},
	},
};

const motionVariants = {
	hovered: {
		x: 0,
		opacity: 1,
	},
	style: {
		x: -40,
		opacity: 0,
	},
	transition: {
		duration: 0.35,
	},
};

const MenuItem = ({to, title, icon}) => (
	<Link to={to}>
		<motion.li variants={itemVariants} className='p-2'>
			<button className='flex items-center px-5 py-2 cursor-pointer md:py-4 rounded-xl bg-custom/30 hover:border-s-2'>
				<span className='col-span-1'>{icon}</span>
				<span className='text-xs text-l1 md:text-lg'>{title}</span>
			</button>
		</motion.li>
	</Link>
);

function Navbar() {

  return (
    <>
      <nav className="fixed w-full flex items-center justify-between px-[10vw] py-4 z-10">
        <div className="w-1/3 bg-transparent">


				<><button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition-all border border-transparent rounded-lg bg-l1 text-l1 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" data-hs-overlay="#hs-overlay-basic" aria-controls="hs-overlay-basic" aria-label="Toggle navigation">
  Open sidebar
</button>

<div id="hs-overlay-basic" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-d7 border-r border-d4 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0">
  <div className="flex items-center justify-between px-6">
    <a className="flex-none text-xl font-semibold" href="#" aria-label="Brand">Menu</a>

    <button type="button" className="inline-flex items-center justify-center w-8 h-8 gap-2 transition border rounded-md text-l1 border-d5 hover:text-l5" data-hs-overlay="#hs-overlay-basic" aria-controls="hs-overlay-basic" aria-label="Toggle navigation">
      <span className="sr-only">Close Sidebar</span>
      <svg className="w-3 h-3" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
      </svg>
    </button>
  </div>

  <nav className="flex flex-col flex-wrap w-full p-6">
									<div className='w-full pl-3 text-sm text-[var(--gray-3)]'>Services</div>
									<MenuItem to='/repair' title='Repair' icon={<ToolsI />} />
									<MenuItem to='/replacement' title='Replace' icon={<ReplaceI />} />
									<MenuItem to='/new-roof' title='Building New' icon={<NewI />} />
									<MenuItem to='/maintenance' title='Maintenance' icon={<MaintenanceI />} />
									
									<div className='w-full pl-3 text-sm text-[var(--gray-3)]'>Information</div>
									<MenuItem to='/warranty' title='Warranty' icon={<WarrantyI />} />
									<MenuItem to='/products' title='Products' icon={<CgMenuRoundI />} />
									<MenuItem to='/faq' title='FAQ' icon={<QuestionI />} />
									<div className='w-full pl-3 text-sm text-[var(--gray-3)]'>About</div>
									<MenuItem to='/about' title='About' icon={<UserIcon />} />
									<MenuItem to='/projects' title='Projects' icon={<FlashIcon />} />
									<MenuItem to='/press' title='Press' icon={<ActivityIcon />} />

</nav>
</div></>
        </div>
        <div className="items-center w-1/3 text-center bg-transparent place-content-center">
          <Link to="/">
            <img
              className="mx-auto w-2/2 md:w-4/4 lg:w-5/6 xl:w-5/8"
              src="https://grell.s3.us-east-2.amazonaws.com/grell/W-Tag.svg"
              alt="Logo"/>
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