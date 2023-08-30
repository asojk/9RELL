import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCompasses2Line, Ri24HoursLine, RiCheckDoubleLine } from 'react-icons/ri';
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
			<div className="px-6 m-auto text-l1 xl:container md:px-12 xl:px-6">
				<span className='mb-8 text-sm font-bold tracking-widest underline uppercase decoration-rA'> Your tagline </span>
				<h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-l1 md:text-7xl lg:text-5xl'>
					Medium length display headline.
				</h1>
				<p className='mb-8 text-base leading-relaxed text-left text-l1'>
					Free and Premium themes, UI Kit&apos;s, templates and landing pages built with Tailwind CSS, HTML &amp;
					Next.js.
				</p>
				<div className='grid grid-cols-2 gap-4 lg:gap-8 md:grid-cols-3'>
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
		</div>



			<motion.div variants={SecMotion}>
				<Hero executeScroll={executeScroll} />
			</motion.div>


			<motion.div variants={SecMotion}>
				
				<Testis />
							<Clients />
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


const Card = ({ title, subtitle, Icon, href }) => {
	return (
		<a
			href={href}
			className='w-full p-4 rounded-2xl border-[1px] border-b3 relative overflow-hidden group shadow-nimble bg-d7'>
			<div className='absolute inset-0 bg-gradient-to-b from-d7 to-rd1 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300' />

			<Icon className='absolute z-10 transition-transform duration-300 -top-1 -right-1 text-7xl md:text-9xl text-d6 group-hover:text-r group-hover:rotate-12' />
			<Icon className='relative z-10 mb-2 text-2xl transition-colors duration-300 md:text-4xl text-r group-hover:text-yw' />
			<h3 className='relative z-10 pt-2 text-lg font-black duration-300 md:text-3xl text-l1 group-hover:text-white'>
				{title}
			</h3>
			<p className='relative z-10 pt-2 font-thin duration-300 text-md md:text-lg text-l3 group-hover:text-l1'>
				{subtitle}
			</p>
		</a>
	);
};