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
			<section className='relative z-1 max-w-[85rem] px-4 mx-auto'>
				<div className='container px-6 py-10 pt-32 mx-auto md:pt-44'>
					<div className='mb-8 text-center'>
						<header className='header'>
							<span className='title-head'></span>
							<h1 className='h2'>Community Involvement</h1>
						</header>
						<p className='pt-4 pb-12 mx-auto text-base leading-relaxed text-left text-l1 lg:w-3/4'>
							At Grell Roofing, our commitment to community involvement aligns with our corporate values. We are in the
							business of making life easier through our products and services and through our commitment to giving back
							to the communities in which we live, work, and do business.
						</p>
						<span className='head'>Committed to making lives brighter</span>
						<p className='pt-4 pb-12 mx-auto text-base leading-relaxed text-left text-l1 lg:w-3/4'>
							We work with local communities that we operate in to support on an annual basis from the following
							categories:
							<li>
								Health: includes local hospitals ands clinics, medical research, and patient and family support
								charities
							</li>
							<li>Non-Government Organizations (NGO): includes disaster relief, peace, and human rights</li>
							<li>Human Services: includes food banks, homeless services, social services, and youth development</li>
							<li>
								Education: includes support for students, teachers, and parents, as well as scholarships and financial
								aid services
							</li>
							<li>Environmental: includes parks/nature centers and environmental conservation</li>
							We focus on initiatives that empower people through programs that encourage improving lives, and we
							partner with organizations that align with our corporate values of giving. By ensuring that our employees
							have a voice in the way we give back to our community, we believe that makes for more meaningful
							fundraising and volunteering. Ultimately, everybody wins: the Grell Roofing works with organizations and
							causes that they’re passionate about—and our community grows stronger with every hour volunteered, and
							every dollar donated.
						</p>
					</div>
					<Container my='md'>
						<SimpleGrid cols={4} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}></SimpleGrid>
					</Container>
					<div class='py-16'>
						<div class='container m-auto px-6 text-gray-500 md:px-12 xl:px-0'>
							<div class='grid gap-6 lg:grid-cols-7'>
								<div class='lg:col-span-3'>
									<div class='space-y-4 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8'>
										<img src='images/service.webp' alt='illustration' loading='lazy' width='900' height='600' />
										<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>Web development</h3>
										<p class='mb-6 text-gray-600 dark:text-gray-300'>
											Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora
											ipsa iste officia sed officiis! Incidunt ea animi officiis.
										</p>
										<a href='#' class='block font-medium text-primary'>
											Know more
										</a>
									</div>
								</div>
								<div class='lg:col-span-2'>
									<div class='flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8'>
										<div class='mb-6 space-y-4'>
											<img src='images/service2.webp' alt='illustration' loading='lazy' width='616' height='400' />
											<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>Web development mentoring.</h3>
											<p class='text-gray-600 dark:text-gray-300'>
												Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora
												ipsa iste officia sed officiis! Incidunt ea animi officiis.
											</p>
										</div>
										<a href='#' class='block font-medium text-primary'>
											Know more
										</a>
									</div>
								</div>
								<div class='lg:col-span-2'>
									<div class='flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8'>
										<div class='mb-6 space-y-4'>
											<img src='images/service3.webp' alt='illustration' loading='lazy' width='675' height='450' />
											<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>Web development training</h3>
											<p class='text-gray-600 dark:text-gray-300'>
												Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora
												ipsa iste officia sed officiis! Incidunt ea animi officiis.
											</p>
										</div>
										<a href='#' class='block font-medium text-primary'>
											Know more
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class='bg-gradient-to-br from-gray-800 to-gray-400 py-16'>
						<div class='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
							<h2 class='mb-12 text-center text-2xl font-bold text-white md:text-4xl'>
								A technology-first approach to payments <br class='sm:block' hidden />
								and finance
							</h2>
							<div class='grid gap-6 lg:grid-cols-2'>
								<div class='rounded-3xl border border-opacity-10 bg-gray-300 p-8 shadow-xl'>
									<div class='space-y-4 sm:flex sm:space-y-0 sm:space-x-8'>
										<div class='sm:w-5/12'>
											<img
												src='images/smiling.webp'
												class='h-56 w-full rounded-xl object-cover object-top sm:h-full'
												alt=''
											/>
										</div>
										<div class='space-y-4 py-4 sm:w-7/12'>
											<h3 class='text-2xl font-semibold text-gray-800'>Web applications development</h3>
											<p>
												Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora
												ipsa iste officia sed officiis! Incidunt ea animi officiis.
											</p>

											<ul class='ml-5 list-outside list-disc space-y-2'>
												<li>Search Engine Optimization</li>
												<li>Responsive Design</li>
												<li>User friendly</li>
											</ul>
										</div>
									</div>
								</div>
								<div class='rounded-3xl border border-opacity-10 bg-gray-300 p-8 shadow-xl'>
									<div class='space-y-4 sm:flex sm:space-y-0 sm:space-x-8'>
										<div class='sm:w-5/12'>
											<img src='images/bg.webp' class='h-56 w-full rounded-xl object-cover sm:h-full' alt='' />
										</div>
										<div class='space-y-4 py-4 sm:w-7/12'>
											<h3 class='text-2xl font-semibold text-gray-800'>Web development training...</h3>
											<p>
												Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora
												ipsa iste officia sed officiis! Incidunt ea animi officiis.
											</p>

											<ul class='ml-5 list-outside list-disc space-y-2'>
												<li>Search Engine Optimization</li>
												<li>Responsive Design</li>
												<li>User friendly</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class='py-16'>
						<div class='container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20'>
							<div class='flex items-center justify-center -space-x-2'>
								<img
									loading='lazy'
									width='220'
									height='220'
									src='images/avatars/second_user.webp'
									alt='member photo'
									class='h-8 w-8 rounded-full object-cover'
								/>
								<img
									loading='lazy'
									width='220'
									height='220'
									src='images/avatars/first_user.webp'
									alt='member photo'
									class='h-12 w-12 rounded-full object-cover'
								/>
								<img
									loading='lazy'
									width='220'
									height='220'
									src='images/avatars/third_user.webp'
									alt='member photo'
									class='z-10 h-16 w-16 rounded-full object-cover'
								/>
								<img
									loading='lazy'
									width='220'
									height='220'
									src='images/avatars/first_user.webp'
									alt='member photo'
									class='relative h-12 w-12 rounded-full object-cover'
								/>
								<img
									loading='lazy'
									width='220'
									height='220'
									src='images/avatars/second_user.webp'
									alt='member photo'
									class='h-8 w-8 rounded-full object-cover'
								/>
							</div>
							<div class='m-auto space-y-6 md:w-8/12 lg:w-7/12'>
								<h1 class='text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl'>
									Get Started now
								</h1>
								<p class='text-center text-xl text-gray-600 dark:text-gray-300'>
									Be part of millions people around the world using tailus in modern User Interfaces.
								</p>
								<div class='flex flex-wrap justify-center gap-6'>
									<a
										href='#'
										class='relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'>
										<span class='relative text-base font-semibold text-white dark:text-dark'>Get Started</span>
									</a>
									<a
										href='#'
										class='relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max'>
										<span class='relative text-base font-semibold text-primary dark:text-white'>More about</span>
									</a>
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
										<span class='mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0'>
											Jul 27 2022
										</span>
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
										<span class='mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0'>
											Jul 27 2022
										</span>
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
										<span class='mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0'>
											Jul 27 2022
										</span>
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

					<div class='py-12'>
						<div class='xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
							<div class='mb-12 space-y-2 text-center'>
								<h2 class='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>Sharing is Caring</h2>
								<p class='lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300'>
									Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid
									explicabo? Excepturi, voluptate?
								</p>
							</div>
							<div class='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
								<div class='group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
									<div class='relative overflow-hidden rounded-xl'>
										<img
											src='https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
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
											src='https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
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
											Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
										</p>
										<a class='inline-block' href='#'>
											<span class='text-primary'>Read more</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class='py-16'>
						<div class='xl:container m-auto px-6 text-gray-500 md:px-12'>
							<div>
								<h2 class='mt-4 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl'>
									A technology-first approach to payments <br class='lg:block' hidden />
									and finance
								</h2>
							</div>
							<div class='mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4'>
								<div class='group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
									<div class='relative space-y-8 py-12 p-8'>
										<img
											src='https://cdn-icons-png.flaticon.com/512/4341/4341139.png'
											class='w-12'
											width='512'
											height='512'
											alt='burger illustration'
										/>

										<div class='space-y-2'>
											<h5 class='text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary'>
												First feature
											</h5>
											<p class='text-sm text-gray-600 dark:text-gray-300'>
												Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
											</p>
										</div>
										<a href='#' class='flex items-center justify-between group-hover:text-primary'>
											<span class='text-sm'>Read more</span>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												fill='currentColor'
												class='w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
												<path
													fill-rule='evenodd'
													d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
													clip-rule='evenodd'
												/>
											</svg>
										</a>
									</div>
								</div>
								<div class='group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
									<div class='relative space-y-8 py-12 p-8'>
										<img
											src='https://cdn-icons-png.flaticon.com/512/4341/4341134.png'
											class='w-12'
											width='512'
											height='512'
											alt='burger illustration'
										/>

										<div class='space-y-2'>
											<h5 class='text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary'>
												Second feature
											</h5>
											<p class='text-sm text-gray-600 dark:text-gray-300'>
												Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
											</p>
										</div>
										<a href='#' class='flex items-center justify-between group-hover:text-primary'>
											<span class='text-sm'>Read more</span>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												fill='currentColor'
												class='w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
												<path
													fill-rule='evenodd'
													d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
													clip-rule='evenodd'
												/>
											</svg>
										</a>
									</div>
								</div>
								<div class='group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
									<div class='relative space-y-8 py-12 p-8'>
										<img
											src='https://cdn-icons-png.flaticon.com/512/4341/4341160.png'
											class='w-12'
											width='512'
											height='512'
											alt='burger illustration'
										/>

										<div class='space-y-2'>
											<h5 class='text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary'>
												Third feature
											</h5>
											<p class='text-sm text-gray-600 dark:text-gray-300'>
												Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
											</p>
										</div>
										<a href='#' class='flex items-center justify-between group-hover:text-primary'>
											<span class='text-sm'>Read more</span>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												fill='currentColor'
												class='w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
												<path
													fill-rule='evenodd'
													d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
													clip-rule='evenodd'
												/>
											</svg>
										</a>
									</div>
								</div>
								<div class='group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
									<div class='relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800'>
										<img
											src='https://cdn-icons-png.flaticon.com/512/4341/4341025.png'
											class='w-12'
											width='512'
											height='512'
											alt='burger illustration'
										/>

										<div class='space-y-2'>
											<h5 class='text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary'>
												More features
											</h5>
											<p class='text-sm text-gray-600 dark:text-gray-300'>
												Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
											</p>
										</div>
										<a href='#' class='flex items-center justify-between group-hover:text-primary'>
											<span class='text-sm'>Read more</span>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												fill='currentColor'
												class='w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
												<path
													fill-rule='evenodd'
													d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
													clip-rule='evenodd'
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/Award2023.jpg' className='w-full' />
					<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/BikesforTykes.jpg' className='w-full' />
					<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/BowDonation.jpg' className='w-full' />
					<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/BowDonation2.jpg' className='w-full' />
					<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/DL2019.jpg' className='w-full' />
					<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/DinnerSponsor.jpg' className='w-full' />
					<img
						alt='award'
						src='https://grell.s3.us-east-2.amazonaws.com/Press/FootballSponsor.jpg'
						className='w-full'
					/>
					<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/ReadersChoice.jpg' className='w-full' />
					<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/ReadersChoice.pdf' className='w-full' />
					<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/SIDSSponsor.png' className='w-full' />
					<img alt='award' src='https://grell.s3.us-east-2.amazonaws.com/Press/ice cream.jpg' className='w-full' />
				</div>
			</section>

			<div className='section-container'>
				<SectionWrapper className='pb-0'>
					<div className='container mx-auto my-24 md:px-6'>
						<section className='mb-32'>
							<h2 className='mb-16 text-2xl font-bold text-center text-l1'>Latest articles</h2>
							<div className='flex flex-wrap mb-16'>
								<div className='w-full mb-6 shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6'>
									<div
										className='ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-nimble'
										data-te-ripple-init=''
										data-te-ripple-color='dark'>
										<img src='https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg' className='w-full' alt='Louvre' />
										<a href='#!'>
											<div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
										</a>
									</div>
								</div>
								<div className='w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6'>
									<h3 className='mb-4 text-2xl font-bold text-l1'>That's the news!</h3>
									<div className='flex items-center mb-4 text-sm font-medium text-[var(--yellow)]'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={2}
											stroke='white'
											className='w-5 h-5 mr-2'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25'
											/>
										</svg>
										Travels
									</div>
									<p className='mb-6 text-sm text-neutral-400'>
										Published <u>14.01.2022</u> by
										<a href='#!'>Lisa McCartney</a>
									</p>
									<p className='mb-6 text-neutral-300'>
										Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non
										quam dignissim elementum. Donec a ullamcorper diam.
									</p>
									<p className='text-neutral-300'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio
										amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat
										rem dignissimos?
									</p>
								</div>
							</div>
							<div className='flex flex-wrap mb-16 lg:flex-row-reverse'>
								<div className='w-full mb-6 shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6'>
									<div
										className='ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-nimble'
										data-te-ripple-init=''
										data-te-ripple-color='light'>
										<img
											src='https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg'
											className='revealing-image'
											alt='Louvre'
										/>
										<a href='#!'>
											<div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
										</a>
									</div>
								</div>
								<div className='w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6 animate-fade-in'>
									<h3 className='mb-4 text-2xl font-bold text-l1'>Exhibition in Paris</h3>
									<div className='flex items-center mb-4 text-sm font-medium text-[var(--yellow)]'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={2}
											stroke='white'
											className='w-4 h-4 mr-2'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42'
											/>
										</svg>
										Art
									</div>
									<p className='mb-6 text-sm text-neutral-400'>
										Published <u>12.01.2022</u> by
										<a href='#!'>Anna Doe</a>
									</p>
									<p className='text-neutral-300'>
										Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum enim massa in
										ante. Curabitur in
									</p>
								</div>
							</div>
							<div className='flex flex-wrap'>
								<div className='w-full mb-6 shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6'>
									<div
										className='ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-nimble'
										data-te-ripple-init=''
										data-te-ripple-color='light'>
										<img src='https://mdbcdn.b-cdn.net/img/new/standard/city/079.jpg' className='w-full' alt='Louvre' />
										<a href='#!'>
											<div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
										</a>
									</div>
								</div>
								<div className='w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6'>
									<h3 className='mb-4 text-2xl font-bold text-l1'>Stock market boom</h3>
									<div className='flex items-center mb-4 text-sm font-medium text-[var(--yellow)]'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={2}
											stroke='white'
											className='w-5 h-5 mr-2'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
											/>
										</svg>
										Business
									</div>
									<p className='mb-6 text-sm text-neutral-400'>
										Published <u>10.01.2022</u> by
										<a href='#!'>Joe Svan</a>
									</p>
									<p className='text-neutral-300'>
										Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean tincidunt vulputate libero, nec
										imperdiet sapien pulvinar id. Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
									</p>
								</div>
							</div>
						</section>
					</div>
				</SectionWrapper>
			</div>
		</motion.div>
	);
};

export default Press;
