import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


function Announcement({ isOpen, onClose }) {
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
	const [isVisible, setIsVisible] = useState(true);

	const onClose = () => {
		setIsVisible(false);
	};

	if (!isVisible) {
		return null;
	}

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
					className='fixed top-0 left-0 h-screen py-12 overflow-auto text-base border-r-2 w-42 lg:max-w-[20rem] lg:w-[25vw] bg-gradient-to-r from-d7 to-d6/95 via-d7 rounded-r-lg text-l1 border-b3 z-[99]'>
					<motion.div variants={menuVariants}>
						<div className='px-4 py-3 text-black bg-yw border border-w3 shadow-nimble flex items-center rounded-t-xl justify-between sm:px-6 lg:px-8 fixed bottom-0 z-[999] w-full'>
							<span className='hidden text-lg font-black md:w-64 md:block sm:p-0 md:p-2 lg:text-center'>
								The New Look of Grell{' '}
							</span>
							<span className='mr-8 font-medium text-center sm:text-left'>
								We are excited to announce the launch of our new website & logo! We have made it easier to navigate and
								find the information you are looking for. We have also added a new feature that allows you to request a
								quote online. We look forward to hearing from you!
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
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Announcement
