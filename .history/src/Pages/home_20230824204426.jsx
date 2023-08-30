import React, {useRef} from 'react';
import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';
import {Parallax} from 'react-scroll-parallax';


import Hero from '../Components/main/Hero.jsx';
import Testis from '../Components/main/testis.jsx';
import Contact from '../Components/main/Contact.jsx';
import Clients from '../Components/main/Clients.jsx';
import Announcement from '../Components/main/announce.jsx';


function Home () {
  const contactRef = useRef(null);
  const executeScroll = () => {contactRef.current.scrollIntoView();};

  return (
		<motion.div variants={content} animate='animate' initial='initial'>
			<Announcement />
			<Helmet
				title='GRELL ROOFING | Home'
				meta={[
					{ name: 'description', content: 'Home page for the website.' },
					{ name: 'keywords', 
						content: 'Arena Roofing, Business Roofing, Church Roofing, Fast Food Roofing, Hospital Roofing, Industrial Roofing, Mall Roofing, Office Building Roofing, Restaurant Roofing, School Roofing, Shopping Center Roofing, Warehouse Roofing, Vinyl Roofing, Commercial Roofing, Prefabricated Roofing, PVC Roofing, Reflective Roofing, Single-Ply Roofing, White Commercial Roofing, Commercial Roof, Commercial Roof Installation, Commercial Roofing Companies, Commercial Roofing Materials, Custom-Fabricated Accessories, Custom-Fabricated Membrane, Custom-Fabricated Roofing System, Flat Roof Materials, Flat Roofing System, Low Slope Roofing System, Prefabricated Roofs, PVC Roofs, PVC Roof Systems, PVC Roofing Material, PVC Roofing Membrane, Single-Ply Membrane, Single-Ply Membrane Roof, Thermoplastic Roof, White Roof Membrane, White Vinyl Roof, Vinyl Roof, Vinyl Roofing Membrane, Vinyl Roofing System, Vinyl Single-Ply Roofing, Vinyl Single-Ply Roofing Membrane, Vinyl Single-Ply Roofing System' 
					},
				]}
			/>
			<img
				src='https://grell.s3.us-east-2.amazonaws.com/pics/finishedroof.jpg'
				alt='customer_avatar'
				class='flex-shrink-0 md:hidden object-fit object-center mx-auto shadow-nimble aboslute'></img>

			<video className='hidden h-full md:block shadow-nimble 3xl:w-screen 5xl:overflow-y-clip 5xl:h-[64rem] 3xl:bg-d7' autoPlay={true} muted loop={false}>
				<source src='https://grell.s3.us-east-2.amazonaws.com/Smid1.mp4' type='video/mp4' loading='lazy' />
				Your browser does not support the video tag.
			</video>


				<Clients />

							<Parallax translateX={[0, 0]}>
			<motion.div variants={SecMotion}>
				<Hero executeScroll={executeScroll} />
			</motion.div>
							</Parallax>


			<motion.div variants={SecMotion}>
				<Parallax translateX={[0, 0]}>
					<Testis />
				</Parallax>
			</motion.div>
			<div ref={contactRef} className='flex justify-center pt-8 pb-8 text-l1'>
				<motion.div variants={SecMotion}>
					<Parallax translateX={[0, 0]}>
						<Contact />
					</Parallax>
				</motion.div>
			</div>
		</motion.div>
	);};
export default Home;

const content = {animate: {transition: {staggerChildren: 0.8},},};

const SecMotion = {initial: {y: -10, scale: 0.7, opacity: 0},
	animate: {y: 0,scale: 1,opacity: 1,transition: {duration: 1.3,delay: 1,},staggerChildren: 0.8,},
	exit: {opacity: 0,transition: {duration: 0.5,ease: [0.6, -0.05, 0.01, 0.99],},},};