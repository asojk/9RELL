/** @format */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCompasses2Line, Ri24HoursLine, RiCheckDoubleLine } from 'react-icons/ri';

function Hero({ executeScroll }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<section className='relative max-w-[85rem] px-2 pt-16 lg:px-12'>
				<div className='p-4'>
					<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
						<h1 className='relative p-4 h1'>Getting Started</h1>
						<div className='w-full p-4 rounded-2xl border-[1px] border-b3 relative overflow-hidden group shadow-nimble bg-gradient-to-t from-d7 to-d6'>
							<img
								alt='moto'
								src='https://grell.s3.us-east-2.amazonaws.com/circle-arrow.svg'
								className='absolute w-40 h-40 mb-4 -right-16 -bottom-16'
							/>
							<div className='w-4/6'>
								<p className='mb-2 text-lg font-medium text-l1'>Does Grell service my area?</p>
								<p className='text-xs text-l3'></p>
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									transition={{ duration: 0.225, ease: 'easeIn' }}
									className='p-2 text-center'
									onClick={() => window.my_modal_2.showModal()}>
									<a className='inline-flex mt-2 font-black cursor-pointer text-md text-r'>
										Find out
										<svg
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={1}
											className='w-6 h-6 ml-2'
											viewBox='0 0 24 24'>
											<path d='M5 12h14M12 5l7 7-7 7' />
										</svg>
									</a>
								</motion.button>
								<dialog id='my_modal_2' className='modal'>
									<form method='dialog' className='modal-box'>
										<iframe
											src='https://api.mapbox.com/styles/v1/grell/clkk0o55v00vq01qf1ze302fe.html?title=false&access_token=pk.eyJ1IjoiZ3JlbGwiLCJhIjoiY2xraXpib3NkMDBibTNybXZnbml5eGMwMyJ9.y69nZBItX012aWE7GWBfyA&zoomwheel=true#4.21/39.56/-94.35'
											title='GRELL-copy-copy'
											width='100%'
											height='100%'
											loading='lazy'
											style={{}}></iframe>
									</form>
									<form method='dialog' className='modal-backdrop'>
										<button>close</button>
									</form>
								</dialog>
							</div>
						</div>
						<div className='w-full p-4 rounded-2xl border-[1px] border-b3 relative overflow-hidden group shadow-nimble bg-gradient-to-t from-d7 to-d6'>
							<img
								alt='moto'
								src='https://grell.s3.us-east-2.amazonaws.com/calendar.svg'
								className='absolute w-40 h-40 mb-4 -right-16 -bottom-16'
							/>
							<div className='w-4/6'>
								<p className='mb-2 text-lg font-medium text-l1'>How soon can we start?</p>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.9 }}
									transition={{ duration: 0.225, ease: 'easeIn' }}
									className=''>
									<button
										onClick={executeScroll}
										className='block w-full px-4 py-2 text-sm font-bold rounded cursor-pointer shadow-nimble shadow-rd3 text-l1 bg-r hover:bg-rd1 focus:outline-none focus:ring active:bg-r sm:w-auto'>
										Schedule your free estimate
									</button>
								</motion.button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='relative max-w-[85rem] px-2 pt-16 lg:px-12'>
				<div className='p-4 mt-8'>
					<div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
						<Card
							title='Build'
							subtitle='We work with builders & contractors'
							Icon={RiCompasses2Line}
							href='/new-roof'
						/>
						<Card
							title='Repair'
							subtitle='For leaks, cracks, emergency repairs & more'
							Icon={Ri24HoursLine}
							href='/repair'
						/>
						<Card
							title='Replace'
							subtitle="We'll help you find the right solution"
							href='/replacement'
							Icon={RiCheckDoubleLine}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

const Card = ({ title, subtitle, Icon, href }) => {
	return (
		<a
			href={href}
			className='w-full p-4 rounded-2xl border-[1px] border-b3 relative overflow-hidden group shadow-nimble bg-gradient-to-tr from-d7 to-d6'>
			<div className='absolute inset-0 bg-gradient-to-b from-d7 to-rd1 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300' />

			<Icon className='absolute z-10 transition-transform duration-300 -top-1 -right-1 text-7xl md:text-9xl text-d6 group-hover:text-r group-hover:rotate-12' />
			<Icon className='relative z-10 mb-2 text-2xl transition-colors duration-300 md:text-4xl text-r group-hover:text-yw' />
			<h3 className='relative z-10 pt-2 text-xl font-black duration-300 md:text-2xl text-l1 group-hover:text-white'>
				{title}
			</h3>
			<p className='relative z-10 pt-2 text-xs font-thin duration-300 md:text-base text-l3 group-hover:text-l1'>
				{subtitle}
			</p>
		</a>
	);
};

export default Hero;
