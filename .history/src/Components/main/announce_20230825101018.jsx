import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const Announcement = () => {
		const [isVisible, setIsVisible] = useState(true);

		const onClose = () => {
			setIsVisible(false);
		};

		if (!isVisible) {
			return null;
		}
		
	useEffect(() => {
		const hasSeenAnnouncement = localStorage.getItem('hasSeenAnnouncement');
		if (!hasSeenAnnouncement) {
			localStorage.setItem('hasSeenAnnouncement', 'true');
		}
	}, []);
	const hasSeenAnnouncement = localStorage.getItem('hasSeenAnnouncement');
	if (hasSeenAnnouncement === 'true') {
		return null;
	}


	return (
		<motion.div variants={BumpUp} initial='hidden' animate='visible'>
			<div className='px-4 py-3 text-black bg-yw border border-w3 shadow-nimble flex items-center rounded-t-xl justify-between sm:px-6 lg:px-8 fixed bottom-0 z-[999] w-full'>
				<span className='hidden text-lg font-black md:w-64 md:block sm:p-0 md:p-2 lg:text-center'>
					The New Look of Grell{' '}
				</span>
				<span className='mr-8 font-medium text-center sm:text-left'>
					We are excited to announce the launch of our new website & logo! We have made it easier to navigate and find
					the information you are looking for. We have also added a new feature that allows you to request a quote
					online. We look forward to hearing from you!
				</span>
				<button
					onClick={onClose}
					aria-label='Close'
					className='p-1 transition rounded-lg shrink-0 bg-black/10 hover:bg-black/20'>
					<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
			</div>
		</motion.div>
	);
};

export default Announcement;

const BumpUp = {
	hidden: { opacity: 0, y: -10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 3, // delay in seconds before the animation starts
			type: 'spring',
			stiffness: 100,
		},
	},
};