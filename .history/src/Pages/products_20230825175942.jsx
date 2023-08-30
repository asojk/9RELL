import * as React from 'react';
import {motion} from 'framer-motion';

const textVariants = {
	initial: {maxHeight: '3.6em'}, // 1.8em (line-height) * 2 lines
	animate: {maxHeight: 'fit-content'},
};

const Products = () => {
	return (
		<div className='page-container'>
			<section className='text-gray-400 body-font bg-custom-color'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap w-full mb-20'>
						<div className='w-full mb-6 lg:mb-0 lg:w-1/2'>
							<h1 className='mb-2 text-2xl font-medium title-font text-l1 sm:text-3xl'>For New and Replacement Roofs</h1>
							<div className='w-20 h-1 bg-red-500 rounded' />
						</div>
						<p className='w-full leading-relaxed text-gray-400 text-opacity-90 lg:w-1/2'>
							Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia. Ipsum adipisicing voluptate labore. Magna sint aliqua minim
							mollit aute aute dolor pariatur enim.
						</p>
					</div>

					<div className='flex flex-wrap -m-4'>
						<div className='p-4 sm:w-full lg:w-2/5'>
							<div className='p-6 rounded-lg bg-custom bg-opacity-40'>
								<img className='object-cover object-center w-full h-40 mb-6 rounded' src='https://dummyimage.com/721x401' alt='content' />
								<h3 className='text-sm font-medium tracking-widest title-font text-l1'>Thermoplastic Membrane</h3>
								<h2 className='title-font mb-4 text-lg font-medium text-[var(--red)]'>TPO</h2>
								<p className='leading-relaxed text-l1'>Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.</p>
							</div>
						</div>
						<div className='p-2 md:w-1/3 lg:w-1/5'>
							<div className='p-6 rounded-lg bg-custom bg-opacity-40'>
								<h3 className='title-font text-sm font-medium tracking-widest text-[var(--red)]'>SUBTITLE</h3>
								<h2 className='mb-4 text-lg font-medium title-font text-l1'>Chichen Itza</h2>
								<p className='leading-relaxed text-l1'>Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.</p>
							</div>
						</div>
						<div className='p-2 md:w-1/3 lg:w-1/5'>
							<div className='p-6 rounded-lg bg-custom bg-opacity-40'>
								<h3 className='title-font text-sm font-medium tracking-widest text-[var(--red)]'>SUBTITLE</h3>
								<h2 className='mb-4 text-lg font-medium title-font text-l1'>Colosseum Roma</h2>
								<p className='leading-relaxed text-l1'>Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.</p>
							</div>
						</div>
						<div className='p-2 md:w-1/3 lg:w-1/5'>
							<div className='p-6 rounded-lg bg-custom bg-opacity-40'>
								<h3 className='title-font text-sm font-medium tracking-widest text-[var(--red)]'>SUBTITLE</h3>
								<h2 className='mb-4 text-lg font-medium title-font text-l1'>Great Pyramid of Giza</h2>
								<p className='leading-relaxed text-l1'>Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.</p>
							</div>
						</div>
					</div>

					<div className='flex flex-wrap -m-4'>
						<div className='p-4 sm:w-full lg:w-2/5'>
							<div className='p-6 rounded-lg bg-custom bg-opacity-40'>
								<img className='object-cover object-center w-full h-40 mb-6 rounded' src='https://dummyimage.com/721x401' alt='content' />
								<h3 className='text-sm font-medium tracking-widest title-font text-l1'>Thermoplastic Membrane</h3>
								<h2 className='mb-4 text-lg font-medium title-font text-y'>PVC</h2>
								<p className='leading-relaxed text-l1'>Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.</p>
							</div>
						</div>
						<div className='p-2 md:w-1/3 lg:w-1/5'>
							<div className='p-6 rounded-lg bg-custom bg-opacity-40'>
								<h3 className='text-sm font-medium tracking-widest title-font text-y'>SUBTITLE</h3>
								<h2 className='mb-4 text-lg font-medium title-font text-l1'>Chichen Itza</h2>
								<p className='leading-relaxed text-l1'>Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.</p>
							</div>
						</div>
						<div className='p-2 md:w-1/3 lg:w-1/5'>
							<div className='p-6 rounded-lg bg-custom bg-opacity-40'>
								<h3 className='text-sm font-medium tracking-widest title-font text-y'>SUBTITLE</h3>
								<h2 className='mb-4 text-lg font-medium title-font text-l1'>Colosseum Roma</h2>
								<p className='leading-relaxed text-l1'>Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.</p>
							</div>
						</div>
						<div className='p-2 md:w-1/3 lg:w-1/5'>
							<div className='p-6 rounded-lg bg-custom bg-opacity-40'>
								<h3 className='text-sm font-medium tracking-widest title-font text-y'>SUBTITLE</h3>
								<h2 className='mb-4 text-lg font-medium title-font text-l1'>Great Pyramid of Giza</h2>
								<p className='leading-relaxed text-l1'>Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.</p>
							</div>
						</div>
					</div>

					<div className='flex flex-wrap -m-4'>
						<div className='p-4 sm:w-full lg:w-2/5'>
							<div className='p-6 rounded-lg bg-custom bg-opacity-40'>
								<img className='object-cover object-center w-full h-40 mb-6 rounded' src='https://dummyimage.com/721x401' alt='content' />
								<h3 className='title-font text-sm font-medium tracking-widest text-[var(--blue)]'>Rubber Membrane</h3>
								<h2 className='mb-4 text-lg font-medium title-font text-l1'>EPDM</h2>
								<p className='leading-relaxed text-l1'>Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.</p>
							</div>
						</div>
						<div className='p-2 pt-6 md:w-1/3 lg:w-1/5'>
							<div className='divide-y-2 divide-[var(--blue)] rounded-lg  bg-custom bg-opacity-40 p-4'>
								<h2 className='mb-2 text-lg font-bold tracking-tight uppercase title-font text-l1'>Rubber Replacement</h2>
								<p className='pt-2 leading-tight text-l1'>Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.</p>
							</div>
						</div>
						<div className='p-2 pt-6 md:w-1/3 lg:w-1/5'>
							<div className='divide-y-2 divide-[var(--blue)] rounded-lg  bg-custom bg-opacity-40 p-4'>
								<h2 className='mb-2 text-lg font-bold tracking-tight uppercase title-font text-l1'>COMMERCIAL SHINGLE</h2>
								<motion.p
									className='pt-2 overflow-hidden leading-tight text-l1'
									style={{transition: 'all 0.7s ease-in-out'}}
									variants={textVariants}
									initial='initial'
									whileHover='animate'>
									Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.
								</motion.p>
							</div>
						</div>
						<div className='p-2 pt-6 md:w-1/3 lg:w-1/5'>
							<div className='divide-y-2 divide-[var(--blue)] rounded-lg  bg-custom bg-opacity-40 p-4'>
								<h2 className='mb-2 text-lg font-bold tracking-tight uppercase title-font text-l1'>xx</h2>
								<p className='pt-2 leading-tight line-clamp-2 text-l1 hover:line-clamp-none'>
									Id amet excepteur est voluptate. Fugiat deserunt qui sit excepteur nostrud id officia.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<iframe
				width='560'
				height='315'
				src='https://www.youtube.com/embed/dFxkGoFoyQY'
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen
			/>
			<div>
				<p>
					Duro-Last Elite Roofing Contractors Grell Roofing is your Duro-Last Elite Roofing Contractor located in Iowa and serving commercial clients throughout
					the Midwest. We have held this status for over 15 years,consistently meeting strict standards in every installation we complete. If you are looking
					for a great investment for your property,choose Duro-Last roofing from Grell. Why Duro-Last Roofing? Duro-Last truly is the gold standard in the flat
					roofing industry. It’s a worthwhile investment to protect your building. Check out some of the key benefits of Duro-Last roofing below and contact us
					today for a free estimate. Custom Prefabricated For Every Building Every Duro-Last project is prefabricated to fit every building roof precisely. By
					performing 80-85% of membrane seaming in our controlled factory environment,Duro-Last reduces the potential for rooftop installation errors and leaks
					that can occur with other systems. Also,custom fabricated stacks and curb flashings eliminate nearly 100% of rooftop labor from the most critical roof
					areas – transitions and changes of plane. The Duro-Last roofing system is perfect for any new or retrofit project,on building with flat roofs or
					low-sloped roofs. Durable The Duro-Last single-ply roofing system is resistant to fire,chemicals,grease,high winds and punctures,and easily
					accommodates wide temperature extremes. Duro-Last’s custom flashing resists ponding water and helps solve roof problems before they happen. Once
					installed,a Duro-Last roof is watertight and virtually maintenance-free. Installation Without Disrupting Building Operations Installation is quiet and
					safe,without loud machinery,hazardous materials,noxious fumes,hot tar,or mess. A new Duro-Last single-ply roof system can often be installed over an
					existing roof without an expensive tear-off,virtually eliminating debris that could disrupt building activities or damage sensitive equipment.
					Environmentally Responsible Duro-Last is proud to be a charter partner in the EPA ENERGY STAR® Roof Products Program. Duro-Last is also a charter
					member of the Cool Roof Rating Council and a member of the US Green Building Council. Our white cool roof membrane starts out with 87% reflectivity
					and is highly-reflective throughout its life span on the roof,saving significant energy and money for building owners and managers all over North
					America. Backed By Industry’s Best Warranties Duro-Last protects building with a comprehensive 15-year No Dollar Limit (NDL) warranty that clearly
					states our coverage of consequential damages that result from defects in the Duro-Last material and/or installation workmanship. Duro-Last also has
					20-year warranties available. Code Compliant Duro-Last has met or exceeded all major fire and wind code requirements,as well as regional approvals
					throughout the country,reinforcing Duro-Last’s leadership in providing the consistent watertight integrity that building owners expect. The Duro-Last
					single-ply roofing system has been approved by the International Building Code (IBC) and meets Miami-Dade building codes. Professional Installations
					The “World’s Best Roof®” is installed by authorized contractors who can draw on the expertise of Duro-Last’s designers,engineers and quality control
					technicians to ensure that every building roof is installed to specification. Delivers Long-Term Value For Flat & Low-Sloped Roofs Custom
					prefabrication. Energy savings. Durable,leak-proof,virtually maintenance-free performance. Industry leading warranty. Installed by authorized
					professional contractors. The Duro-Last roofing system is the best long-term investment for your building.
				</p>
			</div>
			<div></div>
		</div>
	);
};

export default Products;
