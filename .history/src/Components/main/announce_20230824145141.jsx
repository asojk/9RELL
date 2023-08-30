import React, {useState} from 'react'

const Announcement = () => {
  return (
		<div className='px-4 py-3 text-black bg-yw sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 absolute z-[999] bottom-0 w-full'>
			<p className='font-bold text-center sm:text-left'>
				The New Look of Grell
				<br className='hidden md:block' /> xxxxxxxxxxx
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