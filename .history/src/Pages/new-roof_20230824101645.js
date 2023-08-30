import React from "react";
import { Helmet } from "react-helmet";
import { CategoryI, ToolsI, NewI } from '../Components/hoc/iconsR.js';


const NewRoof = () => {
  return (
		<>
			<Helmet
				title='GRELL | Flat Roof Repair'
				meta={[
					{
						name: 'description',
						content:
							'As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.',
					},
					{ name: 'keywords', content: 'roofing, construction, reapir, flat, flat-roof, roof repair' },
				]}
			/>
			<section className='pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/finishedroof.jpg)] bg-cover bg-center bg-no-repeat'>
				<div className='absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r'></div>
				<div className='relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
					<div className='max-w-2xl text-center sm:text-left'>
						<span className='title-head'>Installation you can trust</span>
						<h1 className='h1'>New Construction</h1>
						<p className='max-w-lg pb-12 mt-4 lg:pb-24 sm:text-xl/relaxed text-l3'>
							We have over 30 years of experience in flat and low-slope installations throughout the Midwest and will
							ensure the entire process goes as smoothly as possible.
						</p>
						<div className='flex flex-wrap gap-4 mt-8 text-center'>
							<a className='px-8 py-3 mb-4 font-medium rounded-lg cursor-pointer text-l1 shadow-nimble bg-r hover:bg-rd2 focus:outline-none focus:ring-2 focus:ring-rd2 active:bg-rl'>
								x?
							</a>
						</div>
					</div>
				</div>
			</section>
			<div className='relative max-w-screen-xl px-4 py-[10vh] mx-auto sm:px-6 lg:flex lg:items-center lg:px-8'>
				<section className='relative z-1 max-w-[85rem] px-4 mx-auto'>
					<div className='container px-5 mx-auto rounded-2xl'>
						<div className='mb-8 text-center'>
							<header className='header'>
								<span className='head'>When to replace</span>
								<h1 class='h2'>Signs it's time for a replacement</h1>
							</header>

							<div
								className='absolute inset-0 h-32 max-w-lg m-auto sm:h-28 sm:max-w-7x'
								style={{
									background:
										'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
									filter: 'blur(118px)',
								}}></div>
							<div className='absolute inset-0 overflow-hidden -z-10'>
								<svg
									className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
									aria-hidden='true'>
									<defs>
										<pattern
											id='e813992c-7d03-4cc4-a2bd-151760b470a0'
											width={200}
											height={200}
											x='50%'
											y={-1}
											patternUnits='userSpaceOnUse'>
											<path d='M100 200V.5M.5 .5H200' fill='none' />
										</pattern>
									</defs>
									<svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
										<path
											d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
											strokeWidth={0}
										/>
									</svg>
									<rect width='100%' height='100%' strokeWidth={0} fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)' />
								</svg>
							</div>
							<div className='grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
								<div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
									<div className='lg:pr-4'>
										<div className='lg:max-w-lg'>
											<p className='text-base font-semibold leading-7 text-yellow-300'>Deploy faster</p>
											<h1 className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
												A better workflow
											</h1>
											<p className='mt-6 text-xl leading-8 text-white-700'>
												Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui,
												diam eget aliquam. Quisque id at vitae feugiat egestas.
											</p>
										</div>
									</div>
								</div>
								<div className='p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
									<img
										className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
										src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
										alt=''
									/>
								</div>
								<div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
									<div className='lg:pr-4'>
										<div className='max-w-xl text-base leading-7 text-white-100 lg:max-w-lg'>
											<p>
												Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
												sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
												varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
												enim. Mattis mauris semper sed amet vitae sed turpis id.
											</p>
											<ul role='list' className='mt-8 space-y-8 text-white-600'>
												<li className='flex gap-x-3'>
													<NewI className='flex-none w-5 h-5 mt-1 text-indigo-600' aria-hidden='true' />
													<span>
														<strong className='font-semibold text-white-900'>Push to deploy.</strong> Lorem ipsum, dolor
														sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
														dolor cupiditate blanditiis ratione.
													</span>
												</li>
												<li className='flex gap-x-3'>
													<CategoryI className='flex-none w-5 h-5 mt-1 text-indigo-600' aria-hidden='true' />
													<span>
														<strong className='font-semibold text-white-900'>SSL certificates.</strong> Anim aute id
														magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
													</span>
												</li>
												<li className='flex gap-x-3'>
													<ToolsI className='flex-none w-5 h-5 mt-1 text-indigo-600' aria-hidden='true' />
													<span>
														<strong className='font-semibold text-white-900'>Database backups.</strong> Ac tincidunt
														sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
													</span>
												</li>
											</ul>
											<p className='mt-8'>
												Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
												auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et
												ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
											</p>
											<h2 className='mt-16 text-2xl font-bold tracking-tight text-white'>No server? No problem.</h2>
											<p className='mt-6'>
												Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum
												urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas
												pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
												Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);};export default NewRoof;
