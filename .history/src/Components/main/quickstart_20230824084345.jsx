import React, {useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { InfoCard } from "./InfoCard.jsx";
import { DescIconCard } from "./DescIconCard.jsx";

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="cursor-pointer">
          <motion.div initial={{ scale: 0, rotate: "12.5deg" }} animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }} onClick={(e) => e.stopPropagation()} className="relative p-0 overflow-hidden">
            <div className="relative z-10 h-48 lg:h-80">
              <iframe src="https://api.mapbox.com/styles/v1/grell/clkk0o55v00vq01qf1ze302fe.html?title=false&access_token=pk.eyJ1IjoiZ3JlbGwiLCJhIjoiY2xraXpib3NkMDBibTNybXZnbml5eGMwMyJ9.y69nZBItX012aWE7GWBfyA&zoomwheel=false#4.21/39.56/-94.35" title="GRELL-copy-copy" width="100%" height="100%" loading="lazy" style={{ }}></iframe>
            </div>
          </motion.div>
        </motion.div>
)}</AnimatePresence>);};

function GettingStarted({ executeScroll }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
		<section className='relative z-1 max-w-[85rem] px-4 py-12 lg:py-24 mx-auto'>
			<div className='container px-5 mx-auto'>
				<span className='relative z-10 p-4 border title-head shadow-nimble border-b3 bg-d7 rounded-2xl'>
					Getting Started
				</span>









				

				<div className='relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl'>
					<img alt='moto' src='/images/object/1.png' className='absolute w-40 h-40 mb-4 -right-16 -bottom-16' />
					<div className='w-4/6'>
						<p className='mb-2 text-lg font-medium text-gray-800'>NextJS</p>
						<p className='text-xs text-gray-400'>NextJs build all free components and templates for React website.</p>
					</div>
				</div>

				<div className='w-64 p-4 py-6 bg-white shadow-lg rounded-2xl'>
					<div className='flex flex-col items-center justify-center'>
						<div className='relative w-24 h-24 bg-green-200 rounded-full'>
							<svg
								width='20'
								height='20'
								fill='currentColor'
								viewBox='0 0 2304 1792'
								className='absolute w-8 h-8 text-green-700 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z'></path>
							</svg>
						</div>
						<p className='mt-4 mb-4 text-xl font-medium text-gray-800'>Justice</p>
						<p className='px-2 text-xs text-center text-gray-400'>
							I therefore look forward to further developments in this area so that we can ease the path in bringing
							these reckless individuals to justice.
						</p>
					</div>
				</div>

				<div className='relative w-64 p-4 m-auto bg-gray-900 shadow-lg rounded-2xl'>
					<div className='w-full h-full text-center'>
						<div className='flex flex-col justify-between h-full'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='40'
								height='40'
								fill='currentColor'
								className='w-20 h-20 m-auto mt-4 text-white dark:text-white'
								viewBox='0 0 2048 1792'>
								<path d='M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z'></path>
							</svg>
							<p className='absolute text-sm italic text-white top-2 right-2'>by express</p>
							<p className='mt-4 text-lg text-white'>Package delivered</p>
							<p className='px-6 py-2 text-xs font-thin text-gray-50'>
								Your package was delivered in 1 day and 4 hours by our postal partner
							</p>
						</div>
					</div>
				</div>













				<div className='mt-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-8'>
					{/* animate-background https://github.com/markmead/hyperui/blob/main/tailwind.preset.js*/}

					<article className='hover:animate-background rounded-xl bg-gradient-to-r from-d7 via-blue-500 to-d6 p-0.5 shadow-nimble transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]'>
						<div className='rounded-[10px] bg-white p-4 !pt-20 dark:bg-gray-900 sm:p-6'>
							<time datetime='2022-10-10' className='block text-xs text-gray-500 dark:text-gray-400'>
								10th Oct 2022
							</time>

							<a href='#'>
								<h3 className='mt-0.5 text-lg font-medium text-gray-900 dark:text-white'>
									How to center an element using JavaScript and jQuery
								</h3>
							</a>

							<div className='flex flex-wrap gap-1 mt-4'>
								<span className='whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100'>
									Snippet
								</span>

								<span className='whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100'>
									JavaScript
								</span>
							</div>
						</div>
					</article>

					<div className='relative p-4 m-auto w-146'>
						<div className='w-full h-full ml-8 mr-8'>
							<div className='flex flex-col justify-between h-full'>
								<h3 className='text-lg font-bold align-text-bottom text-l1'>Does Grell Service my Area?</h3>
							</div>
							<p className='px-4 py-2 text-sm text-l3'>
								Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod sunt. Esse qui aliquip adipisicing.
							</p>
							<div className='relative'>
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									transition={{ duration: 0.225, ease: 'easeIn' }}
									className='p-2 text-center'>
									<a
										onClick={() => setIsOpen(true)}
										className='inline-flex mt-2 font-black cursor-pointer text-md text-r'>
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
								<SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
							</div>
						</div>
					</div>

					<div className='relative p-4 m-auto w-146'>
						<div className='w-full h-full ml-8 lg:ml-0'>
							<div className='flex flex-col justify-between h-full'>
								<h3 className='text-lg font-bold align-text-bottom text-l1'>How Soon Can We Start?</h3>
							</div>
							<p className='px-4 py-2 text-sm text-l3'>
								Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod sunt. Esse qui aliquip adipisicing
								ea officia Lorem enim cupidatat Lorem amet tempor sint consequat.
							</p>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.9 }}
								transition={{ duration: 0.225, ease: 'easeIn' }}
								className=''>
								<button
									onClick={executeScroll}
									className='block w-full px-4 py-2 font-bold rounded cursor-pointer text-md shadow-nimble shadow-rd3 text-l1 bg-r hover:bg-rd1 focus:outline-none focus:ring active:bg-r sm:w-auto'>
									Schedule your free estimate
								</button>
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default GettingStarted;