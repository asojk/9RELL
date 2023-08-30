import React from "react";

const WeDo = ({ Do }) => (
  <div className="w-full px-2 sm:w-1/2">
    <div className="flex items-center h-full">
      <div className="flex items-center w-full">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          className="flex-shrink-0 w-4 h-4 mr-3 text-r"
          viewBox="0 0 24 24"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
        <span className="text-l3">{Do}</span>
      </div>
    </div>
  </div>
);

const About = () => (
	<>
		<section className='relative z-1 max-w-[85rem] px-4 mx-auto'>
			<div className='container px-6 py-10 pt-32 mx-auto md:pt-44'>
				<span className='title-head'>Title-head</span>
				<h1 className='relative p-4 h1'>Getting Started</h1>
				<span className='head'>Head</span>
				<h2 className='relative p-4 h2'>Getting Started</h2>
				<h3 className='relative p-4 h3'>Getting Started</h3>
				<h4 className='relative p-4 h4'>Getting Started</h4>
				<div className='flex flex-wrap mb-64'>
					<div className='px-4 text-xs text-white'>text-xs</div>
					<div className='px-4 text-sm text-white'>text-sm</div>
					<div className='px-4 text-white text-md'>text-md</div>
					<div className='px-4 text-lg text-white'>text-lg</div>
					<div className='px-4 text-xl text-white'>text-xl</div>
					<div className='px-4 text-2xl text-white'>text-2xl</div>
					<div className='px-4 text-3xl text-white'>text-3xl</div>
					<div className='px-4 text-4xl text-white'>text-4xl</div>
					<div className='px-4 text-5xl text-white'>text-5xl</div>
				</div>
				<div className='mb-8 text-center'>
					<header className='header'>
						<span className='title-head'>Commercial Roofing Pros</span>
						<h1 className='h2'>About Grell</h1>
					</header>
					<p className='pt-4 pb-12 mx-auto text-base leading-relaxed text-left text-l1 lg:w-3/4'>
						For 30 years and more than 12 million square feet of roofing application, Grell Roofing has served the
						commercial and industrial roofing needs of Iowa and the Upper Midwest. We are a family-owned firm with an
						outstanding reputation for workmanship, quality, and customer support. Additionally, all Duro-Last roofing
						is manufactured and created in the state of Iowa. Grell Roofing LLC is fully licensed, bonded and insured.
						We take the responsibility of safety and quality seriously. We are proud to say we have been a Duro-Last
						Elite Contractor for over 15 years.
					</p>
					<span className='head'>What we do</span>
					<div className='flex flex-wrap pt-4 pb-4 lg:px-44'>
						<WeDo Do='New Construction' />
						<WeDo Do='Preventive Maintenance' />
						<WeDo Do='Metal Retrofit Roofing' />
						<WeDo Do='Thermal Imaging' />
						<WeDo Do='Metal Retrofits' />
						<WeDo Do='Insulation' />
						<WeDo Do='24/7 Emergency Repair' />
						<WeDo Do='Disaster Storm Damage Response' />
						<WeDo Do='National & Regional Accounts' />
						<WeDo Do='Consultation, Inspection, Expertise' />
					</div>
				</div>
			</div>
		</section>

		<section className=''>
			<div className='container px-6 py-10 mx-auto'>
				<h1 className='text-center h1'>Our Team</h1>

				<p className='max-w-2xl mx-auto my-6 text-center text-l1'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias,
					adipisci rem similique, at omnis eligendi optio eos harum.
				</p>

				<div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4'>
					<div className='flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-d7 rounded-xl'>
						<img
							className='object-cover w-32 h-32 rounded-full ring-2 ring-r'
							src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
							alt=''
						/>

						<h1 className='mt-4 text-2xl font-semibold capitalize text-l1 group-hover:text-l1'>arthur melo</h1>

						<p className='mt-2 capitalize text-l3 group-hover:text-r'>design director</p>
					</div>

					<div className='flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-d7 rounded-xl'>
						<img
							className='object-cover w-32 h-32 rounded-full ring-2 ring-r'
							src='https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
							alt=''
						/>

						<h1 className='mt-4 text-2xl font-semibold capitalize text-l1 group-hover:text-l1'>Amelia. Anderson</h1>

						<p className='mt-2 capitalize text-l3 group-hover:text-r'>Lead Developer</p>
					</div>

					<div className='flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-d7 rounded-xl'>
						<img
							className='object-cover w-32 h-32 rounded-full ring-2 ring-r'
							src='https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
							alt=''
						/>

						<h1 className='mt-4 text-2xl font-semibold capitalize text-l1 group-hover:text-l1'>Olivia Wathan</h1>

						<p className='mt-2 capitalize text-l3 group-hover:text-r'>Lead designer</p>
					</div>

					<div className='flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-d7 rounded-xl'>
						<img
							className='object-cover w-32 h-32 rounded-full ring-2 ring-r'
							src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
							alt=''
						/>

						<h1 className='mt-4 text-2xl font-semibold capitalize text-l1 group-hover:text-l1'>John Doe</h1>

						<p className='mt-2 capitalize text-l3 group-hover:text-r'>Full stack developer</p>
					</div>
				</div>
			</div>
		</section>
		<section className='home-container'>
			<iframe
				style={{ zIndex: '999', padding: '0', margin: '0' }}
				width='100%'
				height='100%'
				id='i72hyt'
				title='map'
				src='https://maps.google.com/maps?width=100%25&height=600&hl=en&q=cyprus&ie=UTF8&t=&z=14&iwloc=B&output=embed'
			/>
		</section>
	</>
);

export default About;
