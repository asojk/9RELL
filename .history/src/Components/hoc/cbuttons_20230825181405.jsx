import React from "react";
import { FiSend, FiMessageCircle, FiPhone } from "react-icons/fi";
import { Tooltip } from "@material-tailwind/react";


const Cbuttons = () => {
  return (
		<section className='text-center md:text-right'>
			<span className='relative inline-flex overflow-hidden border rounded-md shadow-nimble border-b3 '>
				<Tooltip
					className='p-2 text-l3 '
					placement='bottom'
					content='Call 1-800 208-9693'
					animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}>
					<a
						href='tel:+18002089693'
						className='inline-block p-4 text-l1 md:text-l1 border-e-[.5px] border-b3 focus:relative md:bg-r/50 hover:bg-r/90 '>
						<FiPhone className='w-6 h-6 lg:w-8 lg:h-8' />
					</a>
				</Tooltip>

				<Tooltip
					className='p-2 text-l3'
					placement='bottom'
					content='Email Roof@Grell.pro'
					animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}>
					<a
						href='mailto:roof@grell.pro'
						className='inline-block p-4 text-l1 md:text-l1 border-e-[.5px] border-b3 focus:relative hover:bg-r/90'>
						<FiSend className='w-6 h-6 lg:w-8 lg:h-8' />
					</a>
				</Tooltip>

				<Tooltip
					className='p-2 text-l3'
					placement='bottom'
					content='Text (515) 227-6367'
					animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}>
					<a href='sms:+15152276367' className='inline-block p-4 text-l1 md:text-l1 focus:relative hover:bg-r/90'>
						<FiMessageCircle className='w-6 h-6 lg:w-8 lg:h-8' />
					</a>
				</Tooltip>
			</span>
		</section>
	);
};

export default Cbuttons;
