import React from 'react'
import { motion } from 'framer-motion'

function GettingStarted({executeScroll}) {

  return (

      
			<div className='container flex flex-wrap items-center px-16 py-32 pb-16mx-auto rounded-2xl'>
				<div className='flex flex-wrap -m-4'>


					<div className='p-2 md:w-1/2'>
						<div className='flex flex-col h-full p-8 rounded-lg'>
							<div className='flex items-center mb-3'>
								<div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 rounded-full bg-r text-l1'>
									<svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} className='w-5 h-5' viewBox='0 0 24 24'>
										<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
									</svg>
								</div>
								<h2 className='text-lg font-bold align-text-bottom xl:font-extrabold text-l1 xl:text-2xl md:text-lg'>Does Grell Service my Area?</h2>
							</div>
							<div className='flex-grow'>
								<p className='pb-6 text-lg leading-relaxed text-l4'>
                Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod sunt. Esse qui aliquip adipisicing.
								</p>
                <iframe width='100%' height='400px' src="https://api.mapbox.com/styles/v1/grell/clkk0o55v00vq01qf1ze302fe.html?title=false&access_token=pk.eyJ1IjoiZ3JlbGwiLCJhIjoiY2xraXpib3NkMDBibTNybXZnbml5eGMwMyJ9.y69nZBItX012aWE7GWBfyA&zoomwheel=true#4.21/39.56/-94.35" title="GRELL-copy-copy" style={{borderRadius: "2rem", marginBottom: "2rem"}}></iframe>
							</div>
						</div>
					</div>


          <div className='p-2 md:w-1/2'>
						<div className='flex flex-col h-full p-8 rounded-lg'>
							<div className='flex items-center mb-3'>
								<div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 rounded-full bg-r text-l1'>
									<svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} className='w-5 h-5' viewBox='0 0 24 24'>
										<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
										<circle cx='12' cy='7' r='4' />
									</svg>
								</div>
								<h2 className='text-lg font-bold align-text-bottom xl:font-extrabold text-l1 xl:text-2xl md:text-lg'>How Soon Can We Start?</h2>
							</div>
							<div className='flex-grow'>
              <p className='pb-6 text-lg leading-relaxed text-l4'>
									Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod sunt. Esse qui aliquip adipisicing ea officia Lorem enim cupidatat Lorem amet tempor sint consequat.
								</p>
								<motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.9}} transition={{duration: 0.225, ease: 'easeIn'}} className='p-2'>
                <button onClick={executeScroll} className='relative inline-flex items-center justify-center m-1 mt-6 text-lg cursor-pointer btn bg-l1 border-l1 hover:border-y2 text-d9 hover:bg-l2'>Schedule your free estimate</button>
								</motion.button>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}

export default GettingStarted;