/** @format */

import React from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import { motion } from 'framer-motion';
import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px } from '@mantine/core';

const content = { animate: { transition: { staggerChildren: 0.8 } } };

const SecMotion = {
	initial: { y: -10, scale: 0.7, opacity: 0 },
	animate: { y: 0, scale: 1, opacity: 1, transition: { duration: 1.3, delay: 1 }, staggerChildren: 0.8 },
	exit: { opacity: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
};

const Press = () => {

	const theme = useMantineTheme();
	return (
		<motion.div variants={SecMotion}>
			<span className='absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-tr from-y9/20 to-y2/20 blur-3xl' />

			<section className='relative z-1 max-w-[85rem] px-4 pt-64 mx-auto'>
				<div className='px-6 m-auto text-l1 xl:container md:px-12 xl:px-6'>
					<h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-l1 md:text-7xl lg:text-5xl'>
						Community Involvement
					</h1>
					<p className='mb-8 text-base leading-relaxed text-left md:mb-24 text-l1'>
						At Grell Roofing, our commitment to community involvement aligns with our corporate values. We are in the
						business of making life easier through our products and services and through our commitment to giving back
						to the communities in which we live, work, and do business.
					</p>
				</div>
			</section>
			<div class='pb-12'>
				<div class='xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
					<div class='mb-12 space-y-2'>
						<h2 class='text-3xl font-bold text-yw md:text-4xl'>Committed to making lives brighter,</h2>
						<p class='text-base leading-relaxed text-left text-l1'>
							we work with local communities that we operate in to support on an annual basis from the following areas:
						</p>
					</div>
					<div class='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						<div class='group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
							<div class='relative overflow-hidden rounded-xl'>
								<img
									src='https://grell.s3.us-east-2.amazonaws.com/Press/BikesforTykes.jpg'
									alt='art cover'
									loading='lazy'
									width='1000'
									height='667'
									class='h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105'
								/>
							</div>
							<div class='mt-6 relative'>
								<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>Human Services</h3>
								<p class='mt-6 mb-8 text-gray-600 dark:text-gray-300'>
									including food banks, homeless services, social services, and youth development
								</p>
							</div>
						</div>
						<div class='group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
							<div class='relative overflow-hidden rounded-xl'>
								<img
									src='https://grell.s3.us-east-2.amazonaws.com/Press/ice cream.jpg''
									alt='art cover'
									loading='lazy'
									width='1000'
									height='667'
									class='h-64 w-full object-cover overflow-x-clip object-top transition duration-500 group-hover:scale-105'
								/>
							</div>
							<div class='mt-6 relative'>
								<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>
									De fuga fugiat lorem ispum laboriosam expedita.
								</h3>
								<p class='mt-6 mb-8 text-gray-600 dark:text-gray-300'>
									Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
								</p>
								<a class='inline-block' href='#'>
									<span class='text-primary'>Read more</span>
								</a>
							</div>
						</div>
						<div class='group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
							<div class='relative overflow-hidden rounded-xl'>
								<img
									src='https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
									alt='art cover'
									loading='lazy'
									width='1000'
									height='667'
									class='h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105'
								/>
							</div>
							<div class='mt-6 relative'>
								<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>
									De fuga fugiat lorem ispum laboriosam expedita.
								</h3>
								<p class='mt-6 mb-8 text-gray-600 dark:text-gray-300'>
									<li>Non-Government Organizations (NGO): includes disaster relief, peace, and human rights</li>
									<li>
										Education: includes support for students, teachers, and parents, as well as scholarships and
										financial aid services
									</li>
									<li>Environmental: includes parks/nature centers and environmental conservation</li>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class='pb-12'>
				<div class='container m-auto px-6 text-l1 md:px-12 xl:px-0'>
					<div class='grid gap-6 lg:grid-cols-7'>
						<div class='lg:col-span-3'>
							<div class='space-y-4 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8'>
								<img
									src='https://grell.s3.us-east-2.amazonaws.com/Press/BikesforTykes.jpg'
									alt='illustration'
									loading='lazy'
									width='616'
									height='400'
								/>
								<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>Human Services</h3>
								<p class='text-gray-600 dark:text-gray-300'>
									including food banks, homeless services, social services, and youth development
								</p>
							</div>
						</div>
						<div class='lg:col-span-2'>
							<div class='flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8'>
								<div class='mb-6 space-y-4'>
									<img
										src='https://grell.s3.us-east-2.amazonaws.com/Press/ice cream.jpg'
										alt='illustration'
										loading='lazy'
										width='900'
										height='600'
									/>
									<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>Health</h3>
									<p class='mb-6 text-gray-600 dark:text-gray-300'>
										includes local hospitals ands clinics, medical research, and patient and family support charities
									</p>
								</div>
							</div>
						</div>
						<div class='lg:col-span-2'>
							<div class='flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8'>
								<div class='mb-6 space-y-4'>
									<img
										src='https://grell.s3.us-east-2.amazonaws.com/Press/SIDSSponsor.png'
										alt='illustration'
										loading='lazy'
										width='675'
										height='450'
									/>
									<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>xxx</h3>
									<p class='text-gray-600 dark:text-gray-300'></p>
									<p className='mb-8 text-base leading-relaxed text-left md:mb-24 text-l1'>
										We also work to support the communities we operate in in these areas:
										<li>Education: scholarships for students, support for teachers and parents</li>
										<li>Environmental conservation</li>
										<li>NGO's: disaster relief, peace, and human rights</li>
									</p>
								</div>
							</div>
						</div>
					</div>
					<p className='mt-12 mb-8 text-base leading-relaxed text-left md:mb-24 text-l1'>
						We focus on initiatives that empower people through programs that encourage improving lives, and we partner
						with organizations that align with our corporate values of giving. By ensuring that our employees have a
						voice in the way we give back to our community, we believe that makes for more meaningful fundraising and
						volunteering. Ultimately, everybody wins: the Grell Roofing works with organizations and causes that they’re
						passionate about—and our community grows stronger with every hour volunteered, and every dollar donated.
					</p>
					<section className='relative z-1 max-w-[85rem] px-4 py-16 pt-32 mx-auto'>
						<div className='px-6 m-auto text-l1 xl:container md:px-12 xl:px-6'>
							<h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-l1 md:text-7xl lg:text-5xl'>
								Awards
							</h1>
							<p className='mb-8 text-base leading-relaxed text-left md:mb-24 text-l1'>
								At Grell Roofing, our commitment to community involvement aligns with our corporate values. We are in
								the business of making life easier through our products and services and through our commitment to
								giving back to the communities in which we live, work, and do business.
							</p>
						</div>
					</section>
					<div class='pb-16'>
						<div class='container m-auto px-6 text-l1 md:px-12 xl:px-0'>
							<div class='grid gap-6 lg:grid-cols-7'>
								<div class='lg:col-span-3'>
									<div class='space-y-4 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8'>
										<img
											src='https://grell.s3.us-east-2.amazonaws.com/Press/Award2023.jpg'
											alt='illustration'
											loading='lazy'
											width='900'
											height='600'
										/>
										<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>xxx</h3>
										<p class='mb-6 text-gray-600 dark:text-gray-300'>
											includes local hospitals ands clinics, medical research, and patient and family support charities
										</p>
									</div>
								</div>
								<div class='lg:col-span-2'>
									<div class='flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8'>
										<div class='mb-6 space-y-4'>
											<img
												src='https://grell.s3.us-east-2.amazonaws.com/Press/ReadersChoice.jpg'
												alt='illustration'
												loading='lazy'
												width='616'
												height='400'
											/>
											<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>xxx</h3>
											<p class='text-gray-600 dark:text-gray-300'>
												includes food banks, homeless services, social services, and youth development
											</p>
										</div>
									</div>
								</div>
								<div class='lg:col-span-2'>
									<div class='flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8'>
										<div class='mb-6 space-y-4'>
											<img
												src='https://grell.s3.us-east-2.amazonaws.com/Press/DL2019.jpg'
												alt='illustration'
												loading='lazy'
												width='675'
												height='450'
											/>
											<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>xxx</h3>
											<p class='text-gray-600 dark:text-gray-300'>
												Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora
												ipsa iste officia sed officiis! Incidunt ea animi officiis.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class='py-12'>
				<div class='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
					<div class='mb-12 space-y-2 text-center'>
						<h2 class='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>Sharing is Caring</h2>
						<p class='text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12'>
							Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid
							explicabo? Excepturi, voluptate?
						</p>
					</div>

					<div class='lg:w-3/4 xl:w-2/4 lg:mx-auto'>
						<div class='group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10'>
							<div class='sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl'>
								<img
									src='https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
									alt='art cover'
									loading='lazy'
									width='1000'
									height='667'
									class='h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105'
								/>
							</div>

							<div class='sm:p-2 sm:pl-0 sm:w-4/6'>
								<span class='mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-l1 sm:mt-0'>Jul 27 2022</span>
								<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>
									Provident de illo eveniet commodi fuga fugiat laboriosam expedita.
								</h3>
								<p class='my-6 text-gray-600 dark:text-gray-300'>
									Laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque...
								</p>

								<div class='flex gap-4'>
									<a
										href='#'
										class='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
										Tailwindcss
									</a>
									<a
										href='#'
										class='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
										VueJS
									</a>
								</div>
							</div>
						</div>

						<div class='group relative hover:z-10 -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300'>
							<div class='sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl'>
								<img
									src='https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
									alt='art cover'
									loading='lazy'
									width='1000'
									height='667'
									class='h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105'
								/>
							</div>

							<div class='sm:p-2 sm:pl-0 sm:w-4/6'>
								<span class='mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-l1 sm:mt-0'>Jul 27 2022</span>
								<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>
									Provident de illo eveniet commodi fuga fugiat laboriosam expedita.
								</h3>
								<p class='my-6 text-gray-600 dark:text-gray-300'>
									Laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque...
								</p>

								<div class='flex gap-4'>
									<a
										href='#'
										class='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
										Tailwindcss
									</a>
									<a
										href='#'
										class='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
										VueJS
									</a>
								</div>
							</div>
						</div>

						<div class='group relative hover:z-10 -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300'>
							<div class='sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl'>
								<img
									src='https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
									alt='art cover'
									loading='lazy'
									width='1000'
									height='667'
									class='h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105'
								/>
							</div>

							<div class='sm:p-2 sm:pl-0 sm:w-4/6'>
								<span class='mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-l1 sm:mt-0'>Jul 27 2022</span>
								<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>
									Provident de illo eveniet commodi fuga fugiat laboriosam expedita.
								</h3>
								<p class='my-6 text-gray-600 dark:text-gray-300'>
									Laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque...
								</p>

								<div class='flex gap-4'>
									<a
										href='#'
										class='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
										Tailwindcss
									</a>
									<a
										href='#'
										class='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
										VueJS
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-2 grid-rows-2 place-content-center'>
				<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/BowDonation.jpg' className='w1/5' />
				<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/BowDonation2.jpg' className='w1/5'></img>

				<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/DinnerSponsor.jpg' className='w1/5'></img>
				<img
					alt='award'
					src='https://grell.s3.us-east-2.amazonaws.com/Press/FootballSponsor.jpg'
					className='w1/5'></img>

				<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/ReadersChoice.pdf' className='w1/5'></img>
			</div>
		</motion.div>
	);
};

export default Press;
