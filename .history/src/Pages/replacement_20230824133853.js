import React from 'react';
import { Helmet } from 'react-helmet';
import ReplaceFaq from '../Layout/ReplaceFaq.jsx';

const ReplacePoints = ({Point}) => (
  <div className="w-full p-2 sm:w-1/2">
  <div className="flex items-center">
    <div className="flex-shrink-0 mr-2 text-2xl text-r">»</div>

    <span className="text-l3">{Point}</span>
  </div>
</div>
);

const ReplaceSigns = ({Sign}) => (
  <div className="w-full p-2 sm:w-1/2">
  <div className="flex items-center">
    <div className="flex-shrink-0 mr-2 text-2xl text-r">»</div>

    <span className="text-l3">{Sign}</span>
  </div>
</div>
);
const Replacement = () => (
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
					<h1 class='h1'>Commercial Roof Replacement</h1>
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
						<p class='leading-relaxed text-left text-l3 text-base'>
							It can be hard to know when it is time to get a new flat roof, and certainly, it can be quite an
							investment. What is even more costly, though, is not replacing a damaged roof which can lead to further
							issues and even more expenses. If you experience any of the signs below, it may be time to schedule your
							flat roof replacement:
						</p>
					</div>
					<div className='flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2'>
						<ReplaceSigns Sign='Water stains on the ceiling' />
						<ReplaceSigns Sign='Multiple roof holes' />
						<ReplaceSigns Sign='Leaking ceiling' />
						<ReplaceSigns Sign='Torn vapor barrier' />
						<ReplaceSigns Sign='Missing pieces of roof' />
						<ReplaceSigns Sign='Pooling water' />
						<ReplaceSigns Sign='Cracked roof membrane' />
						<ReplaceSigns Sign='Bubbling roof membrane' />
						<ReplaceSigns Sign='Sagging roof' />
						<ReplaceSigns Sign='Mold or mildew' />
						<ReplaceSigns Sign='Rusted flashing' />
						<ReplaceSigns Sign='Damaged roof insulation' />
						<ReplaceSigns Sign='Damaged roof deck' />
						<ReplaceSigns Sign='Damaged roof membrane' />
					</div>
					<p class='leading-relaxed text-base text-l3'>
						The only way to be sure if your roof is still in good shape is to hire a professional. Contact Grell today
						for a free roofing inspection to see if a roof replacement is the next step for maintaining your building.
					</p>
				</div>
			</section>
		</div>

		<div className='relative max-w-screen-xl px-4 py-[10vh] mx-auto sm:px-6 lg:flex lg:items-center lg:px-8'>
			<section className='relative z-1 max-w-[85rem] px-4 mx-auto'>
				<div className='container px-5 mx-auto rounded-2xl'>
					<div className='mb-8 text-center'>
						<header className='header'>
							<span className='head'>We only install the best</span>
							<h1 class='h2'>Duro-Last Elite Contractor</h1>
						</header>
						<p class='leading-relaxed text-left text-base text-l3'>
							As a Duro-Last Elite Contractor, you can rest assured that you are not only getting the highest quality
							flat roofing but also excellent service and reliable installation that will last for years to come.{' '}
						</p>
						<p className='pt-12 mx-auto text-base leading-relaxed text-l3 lg:w-3/4'>
							We only install the best flat roofing on the market, Duro-Last. They have built a reputation for
							manufacturing precision-fabricated roofing systems, which come with endless benefits including:
						</p>
					</div>
					<div className='flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2'>
						<ReplacePoints Point='Less on-site seaming during installation, which minimizes problems and enables us to install quicker, saving you time and money' />
						<ReplacePoints Point='A significant reduction in the potential for installation issues and future leak problems' />
						<ReplacePoints Point='A reduction in waste, both during manufacturing and during installation' />
						<ReplacePoints Point='More secure installation at critical roof transitions' />
					</div>
					<p class='leading-relaxed text-base text-l3'>
						No matter which type of Duro-Last product you select for your flat roof, we can guarantee you will be
						satisfied with the end result. Contact us today to get a free estimate on your flat roof installation.
					</p>
					<a class='mt-3 text-r inline-flex items-center'>
						Learn More
						<svg
							fill='none'
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							class='w-4 h-4 ml-2'
							viewBox='0 0 24 24'>
							<path d='M5 12h14M12 5l7 7-7 7'></path>
						</svg>
					</a>
				</div>
			</section>
		</div>

		<ReplaceFaq />
	</>
);

export default Replacement;
