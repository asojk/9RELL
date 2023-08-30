import React from 'react';
import {motion} from 'framer-motion';
import {Bbig, Cfa, Ch, Evps, OG, RL, TRH, TCG, USPS} from './partnerimages';
import {ActivityIcon, CategoryI, CgMenuRoundI, FlashIcon, MaintenanceI, NewI, QuestionI, ReplaceI, ToolsI, UserIcon, WarrantyI} from '../hoc/iconsR';
import {Link} from 'react-router-dom';

const Services = () => {
	return (
		<>
			<div className='flex mt-4 overflow-hidden'>
				<TranslateWrapper>
					<LogoItemsTop />
				</TranslateWrapper>
			</div>


					<div className='items-center container mx-auto mt-[40vh] rounded-2xl mb-16'>
							<div className='space-y-8 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 rounded-2xl'>
								<div className='relative group'>
									<div className='relative w-full max-w-3xl px-12 overflow-hidden rounded-lg cursor-pointer h-36 md:h-64'>
										<img
											src='https://grell.s3.us-east-2.amazonaws.com/pics/new-construction.jpg'
											alt='New Construction'
											className='object-cover object-center w-full h-full transition-all transform rounded-2xl group-hover:scale-125'
										/>
										<button className='absolute right-0 bottom-2'>
                    <div className='flex flex-row items-center gap-2 px-2 py-2 -mr-2 rounded-2xl hover:bg-r bg-d9/90'>

													<NewI />

												<span className='px-2 text-lg font-bold align-text-bottom xl:font-extrabold text-l1 xl:text-2xl md:text-lg'>
                          New Construction</span>
											</div>
										</button>
									</div>
								</div>

								<div className='relative group'>
									<div className='relative w-full h-64 max-w-3xl px-12 overflow-hidden rounded-lg cursor-pointer sm:h-36'>
										<img
											src='https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg'
											alt='New Construction'
											className='object-cover object-center w-full h-full transition-all transform rounded-xl group-hover:scale-125'
										/>
										<button className='absolute right-0 bottom-2'>
                    <div className='flex flex-row items-center gap-2 px-2 py-2 -mr-2 rounded-2xl hover:bg-r bg-d9/90'>

													<ToolsI />

												<span className='px-2 text-lg font-bold align-text-bottom xl:font-extrabold text-l1 xl:text-2xl md:text-lg'>
                          Flat Roof Repair</span>
											</div>
										</button>
									</div>
								</div>

								<div className='relative group'>
									<div className='relative w-full h-64 max-w-3xl px-12 overflow-hidden rounded-lg cursor-pointer sm:h-36'>
										<img
											src='https://grell.s3.us-east-2.amazonaws.com/pics/finishedroof.jpg'
											alt='New Construction'
											className='object-cover object-center w-full h-full transition-all transform rounded-xl group-hover:scale-125'
										/>
										<button className='absolute right-0 bottom-2'>
                    <div className='flex flex-row items-center gap-2 px-2 py-2 -mr-2 rounded-2xl hover:bg-r bg-d9/90'>

													<ReplaceI />

												<span className='px-2 text-lg font-bold align-text-bottom xl:font-extrabold text-l1 xl:text-2xl md:text-lg'>
                          Roof Replacement</span>
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
		</>
	);
};

export default Services;

const TranslateWrapper = ({children, reverse}) => {
	return (
		<motion.div
			initial={{translateX: reverse ? '-100%' : '0%'}}
			animate={{translateX: reverse ? '0%' : '-100%'}}
			transition={{duration: 50, repeat: Infinity, ease: 'linear'}}
			className='flex gap-64'>
			{children}
		</motion.div>
	);
};

const LogoItem = ({Icon}) => {
	return (
		<a
			href='/'
			rel='nofollow'
			target='_blank'
			className='flex items-center justify-center max-w-xs md:w-24 md:h-24 saturate-50 opacity-70'>
			<Icon className='' />
		</a>
	);
};

const LogoItemsTop = () => (
	<>
		<LogoItem Icon={Bbig} />
		<LogoItem Icon={TRH} />
		<LogoItem Icon={Ch} />
		<LogoItem Icon={USPS} />
		<LogoItem Icon={Cfa} />
		<LogoItem Icon={RL} />
		<LogoItem Icon={OG} />
		<LogoItem Icon={TRH} />
		<LogoItem Icon={TCG} />
		<LogoItem Icon={Evps} />
	</>
);
