import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCompasses2Line, Ri24HoursLine, RiCheckDoubleLine } from 'react-icons/ri';

function Hero({ executeScroll }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
		<section className="py-16 lg:py-32">
			<div className="px-6 m-auto text-l1 xl:container md:px-12 xl:px-6">

				<div className="grid grid-cols-1 grid-rows-2 gap-8 place-content-center lg:grid-cols-[2fr,1fr] lg:grid-rows-1">
					<div className='relative justify-center w-full overflow-hidden rounded-2xl group'>
						<img
							alt='moto'
							src='https://grell.s3.us-east-2.amazonaws.com/earth-line.svg'
							className='absolute w-40 h-40 mb-4 -left-16 -bottom-16'
						/>
					<div className='w-full'>
										<h2 className="mb-8 text-2xl font-bold text-center text-white md:text-4xl">
				Does Grell service my area?
				</h2>
						<p className='text-md text-l3'></p>
					</div>
					<iframe
						src='https://api.mapbox.com/styles/v1/grell/clkk0o55v00vq01qf1ze302fe.html?title=false&access_token=pk.eyJ1IjoiZ3JlbGwiLCJhIjoiY2xraXpib3NkMDBibTNybXZnbml5eGMwMyJ9.y69nZBItX012aWE7GWBfyA&zoomwheel=true#4.21/39.56/-94.35'
						title='GRELL-copy-copy'
						width='100%'
						height='100%'
						loading='lazy'
						className='flex p-0 rounded-2xl border-b3'
						style={{}}></iframe>
				</div>
				<div className='relative justify-center w-full overflow-hidden rounded-2xl group'>
						<h2 className="mb-8 text-2xl font-bold text-center text-white md:text-4xl">How soon can we start?</h2>
						<div className='w-5/6 p-4 rounded-2xl border-[1px] border-b3 relative overflow-hidden group shadow-nimble bg-gradient-to-tl from-d7 to-d6'>
							<img
								alt='moto'
								src='https://grell.s3.us-east-2.amazonaws.com/calendar.svg'
								className='absolute w-40 h-40 mb-4 -right-16 -bottom-16'
							/>
							<div className='flex flex-wrap lg:p-2'>
								<p className='text-sm text-l3'>It could be as soon as a week, depending on availability.</p>
								</div>
								<div className='grid place-content-center'>
								<p className='mt-8 mb-1 text-center text-md text-l3'>Schedule your</p>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.9 }}
									transition={{ duration: 0.225, ease: 'easeIn' }}
									onClick={executeScroll}
									className='px-4 py-2 font-black text-center uppercase rounded-lg cursor-pointer xl:mt-6 text-md text-l1 shadow-nimble bg-r hover:bg-rd2 focus:outline-none focus:ring-1 focus:ring-rd2 active:bg-rl'>
									free estimate
								</motion.button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
		);
	}

export default Hero;
