/** @format */

import React, { useEffect, useState } from 'react';
const Announcement = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [hasSeenAnnouncement, setHasSeenAnnouncement] = useState(false);

	const onClose = () => {
		setIsVisible(false);
	};
	if (!isVisible || hasSeenAnnouncement) {
		return null;
	}
	return (
		<div className='px-2 lg:p-4 text-black bg-yw border border-b3 shadow-nimble rounded-2xl fixed bottom-2 z-[999] grid grid-rows-2 lg:grid-rows-3'>
			<span className='pt-1 font-black text-center divide-x-2 divide-b3 font-xs sm:font-sm md:font-md sm:text-left'>The New Look of Grell</span>
			<span className='text-center font-xs sm:font-sm md:font-md sm:text-left'>
				We are excited to announce the launch of our new website & logo!
			</span>
			<span className='hidden text-center lg:block font-xs sm:font-sm md:font-md sm:text-left'>
				We have made it easier to navigate and find the information you are looking for. We have also added a new
				feature that allows you to request a quote online. We look forward to hearing from you!
			</span>
			<button
				onClick={onClose}
				aria-label='Close'
				className='absolute p-1 transition rounded-lg shrink-0 bg-black/10 hover:bg-black/20 right-2 top-2'>
				<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
					<path
						fillRule='evenodd'
						d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
						clipRule='evenodd'
					/>
				</svg>
			</button>
		</div>
	);
};

export default Announcement;
