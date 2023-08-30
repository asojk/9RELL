import React, { useRef } from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import ContactButtons from './ContactButtons';
import {ActivityIcon, CategoryI, CgMenuRoundI, FlashIcon, MaintenanceI, NewI, QuestionI, ReplaceI, ToolsI, UserIcon, WarrantyI} from '../hoc/iconsR';
import { Menu } from '@chakra-ui/react';
import { DefaultSidebar } from './sidebar';

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
					<Link to='/'>
						<img className='z-50 mx-auto w-2/2 md:w-4/4 lg:w-5/6 xl:w-5/8' src='https://grell.s3.us-east-2.amazonaws.com/grell/W-Tag.svg' alt='Logo' />
					</Link>
				</div>
				<div className='relative w-1/3 bg-transparent'>

        <DefaultSidebar />
        <button className='' toggleMenu >button </button>
        




					<div className='dropdown'>
						<label tabIndex={0} className='m-1 btn bg-l1 border-l1 hover:border-y2 text-l1 hover:bg-l5'>
							<CategoryI />
						</label>
						<ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow bg-d9 rounded-box w-52 text-l1'>
							<div className='flex flex-wrap'>
								<motion.div variants={containerVariants} initial='hidden' animate='show' exit='exit'>
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
								</motion.div>
							</div>
						</ul>
					</div>
				</div>
				<div className='w-1/3'>
					<ContactButtons />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
