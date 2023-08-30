import React, { useState } from 'react'

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);

  const onClose = () => {
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }
	
  return (
		<div className='px-4 py-3 text-black bg-yw sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 relative z-[999] w-full'>
			<h1 className='hidden font-black md:block sm:p-0 md:p-2'>The New Look of Grell {' '}</h1>
			<p className='font-medium text-center sm:text-left'>
				We are excited to announce the launch of our new website & logo! We have made it easier to
				navigate and find the information you are looking for. We have also added a new feature that allows you to
				request a quote online. We look forward to hearing from you!
			</p>
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
	);
}

export default Announcement
