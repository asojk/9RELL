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
				className='min-h-screen hero lg:hidden'
				style={{ backgroundImage: 'url(https://grell.s3.us-east-2.amazonaws.com/pics/finishedroof.jpg)' }}>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24'>
					<div className='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0'>
						<span className='mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase'> Your tagline </span>
						<h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-l1 md:text-7xl lg:text-5xl'>
							Medium length display headline.
						</h1>
						<p className='mb-8 text-base leading-relaxed text-left text-l1'>
							Free and Premium themes, UI Kit&apos;s, templates and landing pages built with Tailwind CSS, HTML &amp;
							Next.js.
						</p>
					</div>
				</div>
			</div>
			<div className='hidden min-h-screen hero lg:inline'>
				<div className='hero-overlay bg-opacity-60'></div>
				<video className='' autoPlay={true} muted loop={false}>
					<source src='https://grell.s3.us-east-2.amazonaws.com/Smid1.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
				<div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24'>
					<div className='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0'>
						<span className='mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase decoration-r'> Your tagline </span>
						<h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-l1 md:text-7xl lg:text-5xl'>
							Medium length display headline.
						</h1>
						<p className='mb-8 text-base leading-relaxed text-left text-l1'>
							Free and Premium themes, UI Kit&apos;s, templates and landing pages built with Tailwind CSS, HTML &amp;
							Next.js.
						</p>
					</div>
				</div>
			</div>

			<Clients />
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