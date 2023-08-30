/** @format */

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
	ActivityIcon,
	CgMenuRoundI,
	FlashIcon,
	MaintenanceI,
	NewI,
	QuestionI,
	ReplaceI,
	ToolsI,
	UserIcon,
	WarrantyI,
} from '../hoc/iconsR';
import { FiHome } from 'react-icons/fi';
import Cbuttons from './cbuttons';

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
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onClose]);

	return (
		<AnimatePresence>
			{' '}
			{isOpen && (
				<motion.div
					ref={node}
					variants={sidebarVariants}
					initial='closed'
					animate='open'
					exit='closed'
					className='fixed top-0 left-0 h-screen py-4 overflow-auto text-lg border-r-2 w-42 md:text-xl lg:text-2xl md:max-w-[20rem] md:w-[45vw] bg-gradient-to-l from-d7 to-d8 via-d8 rounded-r-lg text-l1 border-b3 z-[99]'>
					<nav className='grid w-full h-full px-6 place-content-center lg:px-8'>
						<motion.div variants={menuVariants}>
							<ul className='flex flex-col h-fit justify-items-center gap-4 z-[99]'>
								<div className='hidden w-full pt-6 pl-2 text-sm lg:text-sm md:pt-8 text-w4 md:block'>Services</div>
								<MenuItem onClick={onClose} to='/new-roof' title='Building New' icon={<NewI />} />
								<MenuItem onClick={onClose} to='/repair' title='Repair' icon={<ToolsI />} />
								<MenuItem onClick={onClose} to='/replacement' title='Replacement' icon={<ReplaceI />} />
								<div className='hidden w-full pt-6 pl-2 text-sm lg:text-sm md:pt-8 text-w4 md:block'>Information</div>
								<MenuItem onClick={onClose} to='/maintenance' title='Maintenance' icon={<MaintenanceI />} />
								<MenuItem onClick={onClose} to='/warranty' title='Warranty' icon={<WarrantyI />} />
								{/*  <MenuItem onClick={onClose} to="/products" title="Products" icon={<CgMenuRoundI />} /> */}
								<MenuItem onClick={onClose} to='/faq' title='FAQ' icon={<QuestionI />} />
								<div className='hidden w-full pt-6 pl-2 text-sm lg:text-sm md:pt-8 text-w4 md:block'>About</div>
								<MenuItem onClick={onClose} to='/about' title='About Grell' icon={<UserIcon />} />
								<MenuItem onClick={onClose} to='/projects' title='Projects' icon={<FlashIcon />} />
								<MenuItem onClick={onClose} to='/press' title='Press' icon={<ActivityIcon />} />
								<div className='display-block md:hidden'>
									<div className='w-full pt-4 pb-2 pl-2 text-sm lg:text-sm md:pt-8 text-w4'>Contact</div>
									<Cbuttons />
								</div>
								<Link to='/' onClick={onClose}>
									<span className='flex items-center w-1/3 border-[1px] rounded-md shadow-nimble border-b3 hover:border-l5'>
										<a className='inline-flex items-center p-3 text-sm gap-x-2'>
										<FiHome className='w-4 h-4 lg:w-8 lg:h-8' />
											Home
										</a>
									</span>
								</Link>
							</ul>
						</motion.div>
					</nav>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default SideBar;

const MenuItem = ({ to, title, icon, onClick }) => (
	<Link to={to} onClick={onClick}>
		<button className='flex items-center px-2 py-2 transition-colors duration-150 rounded-lg cursor-pointer lg:px-6 group'>
			<span className='col-span-1 pr-4 group-hover:scale-110'>
				<motion.span 
					variants={iconVariants}
					whileInView={{ rotate: 180 }}
					transition={{ duration: 0.225, ease: 'easeIn' }}>
					{icon}
				</motion.span>
			</span>
			<span className='font-thin leading-relaxed text-md md:text-xl lg:text-2xl text-l1 group-hover:text-w4 group-hover:scale-110'>
				{title}
			</span>
		</button>
	</Link>
);

const sidebarVariants = {
	open: {
		x: 0,
		transition: {
			when: 'beforeChildren',
		},
	},
	closed: {
		x: '-100%',
		transition: {
			when: 'withChildren',
		},
	},
};


const wrapperVariants = {
	open: {
		scaleY: 1,
		transition: {
			when: 'withChildren',
			staggerChildren: 1,
		},
	},
	closed: {
		scaleY: 0,
		transition: {
			when: 'withChildren',
			staggerChildren: 0.1,
		},
	},
};

const content = { animate: { transition: { staggerChildren: 0.8 } } };

const SecMotion = {
	initial: { y: -10, scale: 0.7, opacity: 0 },
	animate: { y: 0, scale: 1, opacity: 1, transition: { duration: 1.3, delay: 0.6 }, staggerChildren: 0.8 },
	exit: { opacity: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
};

const iconVariants = {
	open: {
		initial: { rotate: 180 },
		animate: { rotate: 180 },
		transition: {
			duration: 0.9,
			ease: 'easeIn',
			when: 'withChildren',
		},
	},
	closed: {
		rotate: 0,
		transition: {
			duration: 0.1,
			ease: 'linear',
			when: 'beforeChildren',
		},
	},
};

const menuVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .2,
			ease: 'easeOut',
			when: 'beforeChildren',
		},
	},
	closed: {
		opacity: 0,
		y: -15,
		transition: {
			duration: .05,
			ease: 'easeInOut',
			when: 'beforeChildren',
		},
	},
};

const sidebarVariantsX = {
	open: { scale: 1, y: 0 },
	closed: { scale: 0, y: -7 },
};
