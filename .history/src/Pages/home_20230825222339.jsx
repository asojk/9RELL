import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Hero from '../Components/main/Hero.jsx';
import Testis from '../Components/main/testis.jsx';
import Contact from '../Components/main/Contact.jsx';
import Clients from '../Components/main/Clients.jsx';
import Announcement from '../Components/main/announce.jsx';
//import { Parallax } from 'react-scroll-parallax';

function Home() {
	const contactRef = useRef(null);
	const executeScroll = () => {
		contactRef.current.scrollIntoView();
	};

	return (
		<motion.div variants={content} animate='animate' initial='initial'>
			<Helmet
				title='GRELL ROOFING | Home'
				meta={[
					{ name: 'description', content: 'Home page for the website.' },
					{
						name: 'keywords',
						content:
							'Arena Roofing, Business Roofing, Church Roofing, Fast Food Roofing, Hospital Roofing, Industrial Roofing, Mall Roofing, Office Building Roofing, Restaurant Roofing, School Roofing, Shopping Center Roofing, Warehouse Roofing, Vinyl Roofing, Commercial Roofing, Prefabricated Roofing, PVC Roofing, Reflective Roofing, Single-Ply Roofing, White Commercial Roofing, Commercial Roof, Commercial Roof Installation, Commercial Roofing Companies, Commercial Roofing Materials, Custom-Fabricated Accessories, Custom-Fabricated Membrane, Custom-Fabricated Roofing System, Flat Roof Materials, Flat Roofing System, Low Slope Roofing System, Prefabricated Roofs, PVC Roofs, PVC Roof Systems, PVC Roofing Material, PVC Roofing Membrane, Single-Ply Membrane, Single-Ply Membrane Roof, Thermoplastic Roof, White Roof Membrane, White Vinyl Roof, Vinyl Roof, Vinyl Roofing Membrane, Vinyl Roofing System, Vinyl Single-Ply Roofing, Vinyl Single-Ply Roofing Membrane, Vinyl Single-Ply Roofing System',
					},
				]}
			/>
			<motion.div variants={BumpUp} initial='hidden' animate='visible'>
				<Announcement />
			</motion.div>

			<div
				className='min-h-screen hero'
				style={{ backgroundImage: 'url(https://grell.s3.us-east-2.amazonaws.com/pics/finishedroof.jpg)' }}>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='text-center hero-content text-neutral-content'>
					<div className='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0'>
						<span className='mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase'> Your tagline </span>
						<h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl'>
							Medium length display headline.
						</h1>
						<p className='mb-8 text-base leading-relaxed text-left text-gray-500'>
							Free and Premium themes, UI Kit&apos;s, templates and landing pages built with Tailwind CSS, HTML &amp;
							Next.js.
						</p>
					</div>
				</div>
			</div>
			<section>
				<div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24'>
					<div className='flex flex-wrap items-center mx-auto max-w-7xl'>
						<div className='w-full lg:max-w-lg lg:w-1/2 rounded-xl'>
							<div>
								<div className='relative w-full max-w-lg'>
									<div className='absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob' />

									<div className='absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000' />
								</div>
							</div>
						</div>
						<div className='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0'>
							<span className='mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase'> Your tagline </span>
							<h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl'>
								Medium length display headline.
							</h1>
							<p className='mb-8 text-base leading-relaxed text-left text-gray-500'>
								Free and Premium themes, UI Kit&apos;s, templates and landing pages built with Tailwind CSS, HTML &amp;
								Next.js.
							</p>
							<div className='flex flex-wrap w-full mt-2 -mx-4 text-left'>
								<div className='w-1/4 p-4 mt-4 sm:w-1/4'>
									<svg width='42' height='42' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<g clipPath='url(#clip0)'>
											<path d='M16 32.076L30 24.065V8.05701L16 16.067V32.076Z' fill='#000001' />
											<path d='M19 24.5556V27L25 23.4444V21L19 24.5556Z' fill='white' />
											<path
												d='M16 0.076004L2 8.057V24.065L16 32.076V16.067L30 8.057L16 0.076004Z'
												fill='url(#paint0_linear)'
											/>
										</g>
										<defs>
											<linearGradient
												id='paint0_linear'
												x1='2.18'
												y1='23.255'
												x2='30.041'
												y2='8.782'
												gradientUnits='userSpaceOnUse'>
												<stop offset='0.043' stopColor='#FF8618' />
												<stop offset='0.382' stopColor='#FF246E' />
												<stop offset='0.989' stopColor='#AF1DF5' />
											</linearGradient>
											<clipPath id='clip0'>
												<rect width='32' height='32' fill='white' />
											</clipPath>
										</defs>
									</svg>
								</div>
								<div className='w-1/4 p-4 mt-4 sm:w-1/4'>
									<svg width='42' height='42' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<circle cx='16' cy='16' r='14' fill='#FF3366' />
										<path
											d='M11.3594 10.8594C12.3259 10.8594 13.1094 10.0759 13.1094 9.10938C13.1094 8.14288 12.3259 7.35938 11.3594 7.35938C10.3929 7.35938 9.60938 8.14288 9.60938 9.10938C9.60938 10.0759 10.3929 10.8594 11.3594 10.8594Z'
											fill='white'
										/>
										<path
											d='M7.70312 12.3594L7.09375 14.5938H9.09375C8.69271 16.224 7.85312 19.6531 7.70312 20.3281C7.51562 21.1719 7.48433 23.5781 10.0156 23.5781C11.7824 23.5781 12.9093 22.4368 13.5379 21.5048L13.0625 23.4062H15.9062L17.3906 17.3981C17.6016 16.3984 18.0981 14.4688 19.8906 14.4688C22.0225 14.4688 21.2404 16.9933 20.8571 18.2305C20.8415 18.2809 20.8266 18.3291 20.8125 18.375C20.525 19.3125 20.2188 20.4062 20.2188 21.1562C20.2188 22 20.6094 23.5781 22.7969 23.5781C24.9844 23.5781 25.9167 21.4115 26.1094 20.3281L25 19.875C24.9219 20.4531 24.2188 21.7031 23.5625 21.7031C22.6641 21.7031 23.1154 20.1885 23.597 18.5721C23.8106 17.8551 24.0302 17.1181 24.1406 16.4844C24.4198 14.8821 24.1406 12.1562 21.3594 12.1562C19.632 12.1562 18.2756 13.6955 17.6303 14.7641L18.1719 12.3594H13.8438L13.25 14.5938H15.2656C15.2656 14.5938 14.0695 19.4683 13.9922 19.6211C13.1797 21.2266 11.9508 21.7655 11.0312 21.7031C10.2938 21.6531 10.3802 20.7656 10.5156 20.3281L12.5156 12.3594H7.70312Z'
											fill='white'
										/>
									</svg>
								</div>
								<div className='w-1/4 p-4 mt-4 sm:w-1/4'>

								</div>
								<div className='w-1/4 p-4 mt-4 sm:w-1/4'>


								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='relative bg-center bg-no-repeat bg-cover'>
				<video
					className='hidden flex-shrink-0 object-center mx-auto lg:block h-full md:object-fit aboslute lg:w-screen max-h-[70vh]'
					autoPlay={true}
					muted
					loop={false}>
					<source src='https://grell.s3.us-east-2.amazonaws.com/Smid1.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</section>

			<motion.div variants={SecMotion}>
				<Hero executeScroll={executeScroll} />
			</motion.div>
			<div class=' w-full px-5 py-24 mx-auto lg:px-32'>
				<div class='flex flex-col w-full mx-auto mb-2 prose text-left prose-md'>
					<div class='mb-5 border-b border-gray-200'>
						<div class='flex flex-wrap items-baseline -mt-2'>
							<h5>12-03-2021</h5>
							<p class='mt-1 ml-2'>Transitions</p>
						</div>
					</div>
					<h1>Page transitions are a fundamental part of website navigation and user experience.</h1>
					<p>Through the lens of a set of certitudes based on deductions founded on false premise.</p>
					<p>
						Turd polishing put a record on and see who dances, dog and pony show, nor one-sheet. Ensure to follow
						requirements when developing solutions three-martini lunch, that jerk from finance really threw me under the
						bus. Bob called an all-hands this afternoon.
					</p>
					<p>
						We've got kpis for that this is a no-brainer viral engagement pixel pushing. Run it up the flagpole please
						use "solutionise" instead of solution ideas! :) dunder mifflin form without content style without meaning
						target rich environment. Three-martini lunch. Get buy-in prioritize these line items, or deliverables yet
						back to the drawing-board let's put a pin in that, close the loop. Manage expectations product market fit
						win-win-win. The horse is out of the barn poop, but can you put it on my calendar? but drink from the
						firehose, but quick-win.
					</p>
					<h1>"Focus on the customer journey"</h1>
					<p>
						If you could do that, that would be great this is a no-brainer, or Q1 regroup. Groom the backlog what do you
						feel you would bring to the table if you were hired for this position. Back of the net. Scope creep can you
						slack it to me? shotgun approach build on a culture of contribution and inclusion please advise soonest.
					</p>
					<h3>Is a no-brainer, or Q1 regroup.</h3>
					<p>
						Gain traction make it more corporate please we need to harvest synergy effects not enough bandwidth, and we
						want to empower the team with the right tools and guidance to uplevel our craft and build better nor
						low-hanging fruit the right info at the right time to the right people.
					</p>
				</div>
			</div>

			<motion.div variants={SecMotion}>
				<Testis />
			</motion.div>

			<div ref={contactRef} className='flex justify-center pt-8 pb-8 text-l1'>
				<motion.div variants={SecMotion}>
					<Contact />
				</motion.div>
			</div>
		</motion.div>
	);
}
export default Home;

const content = { animate: { transition: { staggerChildren: 0.8 } } };

const SecMotion = {
	initial: { y: -10, scale: 0.7, opacity: 0 },
	animate: { y: 0, scale: 1, opacity: 1, transition: { duration: 1.3, delay: 0.6 }, staggerChildren: 0.8 },
	exit: { opacity: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },};

const BumpUp = {
	hidden: { opacity: 0, y: -10, scale: 0.7 }, visible: { opacity: 1, scale: 1, y: 0,
		transition: { delay: 3, duration: 1.3, type: 'spring', stiffness: 10, damping: 10, staggerChildren: 0.8 },
		exit: { opacity: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },},};