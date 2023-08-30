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
				<div className='mt-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-8'>
					<div className='relative p-4 m-auto w-146'>
						<div className='w-full h-full ml-8 mr-8'>
							<div className='flex flex-col justify-between h-full'></div>
							<div className='relative w-64 p-4 overflow-hidden bg-d7 shadow-nimble rounded-2xl'>
								<img
									alt='moto'
									src='https://grell.s3.us-east-2.amazonaws.com/circle-arrow.svg'
									className='absolute w-40 h-40 mb-4 -right-16 -bottom-16'
								/>
								<div className='w-4/6'>
									<p className='mb-2 text-lg font-medium text-l1'>NextJS</p>
									<p className='text-xs text-l3'>NextJs build all free components and templates for React website.</p>
								</div>
							</div>
							<div className='relative w-64 p-4 overflow-hidden bg-d7 shadow-nimble rounded-2xl'>
								<img
									alt='moto'
									src='https://grell.s3.us-east-2.amazonaws.com/circle-arrow.svg'
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
											className='block w-full px-4 py-2 font-bold rounded cursor-pointer text-md shadow-nimble shadow-rd3 text-l1 bg-r hover:bg-rd1 focus:outline-none focus:ring active:bg-r sm:w-auto'>
											Schedule your free estimate
										</button>
									</motion.button>
								</div>
							</div>

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
				</div>
			</div>
		</section>
	);
}

export default GettingStarted;