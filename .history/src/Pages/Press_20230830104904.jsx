/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import Involvements from '../Components/Press/involvements.jsx';
import Awards from '../Components/Press/awards.jsx';
import Recognition from '../Components/Press/recognition.jsx';



const Press = () => {
	return (
	<><span className='absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-tr from-y9/20 to-y2/20 blur-3xl' /><motion.div variants={SecMotion}>
			<section className='relative z-1 max-w-[85rem] px-4 pt-80 mx-auto'>
				<div className='px-6 m-auto text-l1 xl:container md:px-12 xl:px-6'>
					<h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-l1 md:text-7xl lg:text-5xl'>
						Community Involvement
					</h1>
					<p className='mb-8 text-base leading-relaxed text-left md:mb-24 text-l1'>
						At Grell Roofing, our commitment to community involvement aligns with our corporate values. We are in the
						business of making life easier through our products and services and through our commitment to giving back
						to the communities in which we live, work, and do business.
					</p>

					<h2 class='text-3xl font-bold text-yw md:text-4xl'>Committed to making lives brighter</h2>
					<p className='mt-12 text-base leading-relaxed text-left text-l1'>
						We focus on initiatives that empower people through programs that encourage improving lives, and we partner
						with organizations that align with our corporate values of giving. By ensuring that our employees have a
						voice in the way we give back to our community, we believe that makes for more meaningful fundraising and
						volunteering. Ultimately, everybody wins: the Grell Roofing works with organizations and causes that they’re
						passionate about—and our community grows stronger with every hour volunteered, and every dollar donated.
					</p>
					<p class='text-base mt-8 leading-relaxed text-left text-l1'>
						we work with local communities that we operate in to support on an annual basis from the following areas:
					</p>
				</div>
				<div class='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
					<Involvements
						img='https://grell.s3.us-east-2.amazonaws.com/Press/BikesforTykes.jpg'
						title='Human Services'
						subtitle='including food banks, homeless services, social services, and youth development' />
					<Involvements
						img='https://grell.s3.us-east-2.amazonaws.com/Press/recycle2.jpg'
						title='Environmental'
						subtitle='Grell Roofing has always been dedicated to helping our community, our environment, and reducing our carbon footprint wherever we can. Today we want to share with you the opportunity we couldn’t pass up to honor those beliefs! This picture shows material that will be recycled, repurposed, and manufactured into other roofing products that can be utilized in future projects. This is the first of many loads and we believe by the end of our current job we should have over 30,000 pounds of material successfully transported back to Sigourney, Iowa. Does your local flat roofer believe in reducing landfill waste? We do!' />
					<Involvements
						img='https://grell.s3.us-east-2.amazonaws.com/Press/ice-cream.jpg'
						title='Health & More'
						subtitle='local hospitals ands clinics, medical research, and patient and family support charities' />
				</div>
			</section>
		</motion.div><motion.div variants={SecMotion}>
				<section className='relative z-1 max-w-[85rem] px-4 py-16 pt-32 mx-auto'>
					<div className='px-6 m-auto text-l1 xl:container md:px-12 xl:px-6'>
						<h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-l1 md:text-7xl lg:text-5xl'>
							Awards
						</h1>
						<p className='mb-8 text-base leading-relaxed text-left md:mb-24 text-l1'>
							At Grell Roofing, our commitment to community involvement aligns with our corporate values. We are in the
							business of making life easier through our products and services and through our commitment to giving back
							to the communities in which we live, work, and do business.
						</p>
					</div>
				</section>
			</motion.div><motion.div variants={SecMotion}>
				<div class='pb-16'>
					<div class='container m-auto px-6 text-l1 md:px-12 xl:px-0'>
						<div class='grid gap-6 lg:grid-cols-7'>
							<div class='lg:col-span-3'>
								<Awards
									img='https://grell.s3.us-east-2.amazonaws.com/Press/dl-award.jpg'
									title='Five-time Golden Eagle Award Winer'
									subtitle='' />
							</div>
							<div class='lg:col-span-2'>
								<Awards
									img='https://grell.s3.us-east-2.amazonaws.com/Press/ReadersChoice.jpg'
									title="Repeat Reader's Choice Award"
									subtitle='' />
							</div>
							<div class='lg:col-span-2'>
								<Awards img='https://grell.s3.us-east-2.amazonaws.com/Press/DL2019.jpg' title='xxx' subtitle='' />
							</div>
						</div>
					</div>
				</div>
			</motion.div><motion.div variants={SecMotion}>
				<div class='py-12'>
					<div class='xl-container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
						<div class='mb-12 space-y-2 text-center'>
							<h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-l1 md:text-7xl lg:text-5xl'>
								Recognition
							</h1>
						</div>
						<Recognition img='https://grell.s3.us-east-2.amazonaws.com/Press/messenger.jpg' title='An article by local paper Messenger News' subtitle='https://www.messengernews.net/news/local-business/2019/08/grell-shows-signs-of-growth/' date='Aug 25, 2019' />
					</div>
				</div>
			</motion.div><div className='grid grid-cols-8 grid-rows-8 place-content-center'>
				<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/vets-bows.jpg' className='w1/5'></img>

				<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/dl-award.jpg' className='w1/5'></img>

				<img
					alt='award'
					src='https://grell.s3.us-east-2.amazonaws.com/Press/FootballSponsor.png'
					className='w1/5'></img>
			</div></>
	);
};

export default Press;

const content = { animate: { transition: { staggerChildren: 0.8 } } };

const SecMotion = {
	initial: { y: -10, scale: 0.7, opacity: 0 },
	animate: { y: 0, scale: 1, opacity: 1, transition: { duration: 1.3, delay: 1 }, staggerChildren: 0.8 },
	exit: { opacity: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
};