import React, { useRef } from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import ContactButtons from './ContactButtons';
import {ActivityIcon, CategoryI, CgMenuRoundI, FlashIcon, MaintenanceI, NewI, QuestionI, ReplaceI, ToolsI, UserIcon, WarrantyI} from '../hoc/iconsR';
import { Menu } from '@chakra-ui/react';
import { DefaultSidebar } from './sidebar';
import SideMenu from './side';

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
  const Menu = useRef(null);
  const toggleMenu = () => {
    Menu.current.classList.toggle('hidden');
  };

  
	return (
		<>

 
			<nav className='fixed w-full flex items-center justify-between px-[2vw] py-4 z-10'>
      <div className='items-center w-1/3 text-center bg-transparent place-content-center'>
				<SideMenu />
					<Link to='/'>
						<img className='z-50 mx-auto w-2/2 md:w-4/4 lg:w-5/6 xl:w-5/8' src='https://grell.s3.us-east-2.amazonaws.com/grell/W-Tag.svg' alt='Logo' />
					</Link>
				</div>

				<div className='relative w-1/3 bg-transparent'>

        <DefaultSidebar />
        <button className='' toggleMenu >button </button>
        
				</div>
				<div className='w-1/3'>
					<ContactButtons />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
