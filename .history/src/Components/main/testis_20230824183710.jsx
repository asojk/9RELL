/** @format */

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { SiGoogle, SiMinutemailer, SiHomeadvisor, SiFacebook } from 'react-icons/si';
import { AvAlt, Nik, NcI, JustinG, Dks, Tjaden } from './avatars';

const Testis = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
	<section className='relative max-w-[85rem] px-2 pt-16 lg:px-12'>
		<div className='p-4'>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-[1fr,2fr]'>
				<h1 className='relative p-4 h1'>What our <span className='text-r'>customers</span> are saying</h1>
				<div className='w-full p-4 rounded-2xl border-[1px] border-b3 relative overflow-hidden group shadow-nimble bg-gradient-to-t from-d7 to-d6'>

				<Swiper
					modules={[Autoplay]}
					spaceBetween={10}
					slidesPerView={2}
					navigation={false}
					disableOnInteraction={true}
					autoplay={{ delay: 5000 }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
					className='w-full h-full px-2 py-8 md:text-center lg:px-6 text-l1'>
					{Quotes.map((quote, index) => (
						<SwiperSlide key={index}>
							{quote.avatar}
							<span
								className={`px-4 pt-4 transition-all duration-500 ${
									isExpanded ? 'line-clamp-none' : 'line-clamp-6 lg:line-clamp-3'
								} text-l2`}>
								{quote.description}
							</span>
							<button
								onClick={() => setIsExpanded(!isExpanded)}
								className='mt-2 text-xs text-right text-d71 hover:text-l3'>
								{isExpanded ? 'Less...' : 'More...'}
							</button>
							<h6 className='flex flex-row items-center justify-center gap-4 mt-4 font-semibold leading-none md:text-lg'>
								{quote.icon}
								{quote.name}
							</h6>
							<span className='text-xs text-l5'>{quote.title} </span>
						</SwiperSlide>
					))}
				</Swiper>
				</div>
			</div>
		</div>
	</section>
	);
};

export default Testis;

const Quotes = [
	{
		avatar: <Tjaden />,
		icon: <SiMinutemailer className='text-xs text-l5 shadow-nimble' />,
		description:
			"I've used Grell roofing on several occasions. Each time they have been extremely prompt with their bids, on doing the work on schedule, and with no call backs. Their team is on point, always getting the job done right and on time. What I really appreciate is how they keep things clear and straightforward. No fluff, just honest work. They get what we need and they deliver, no fuss. The quality of their work speaks for itself. The roofs they've put up are solid and look great. They've definitely become our go-to for all things roofing. So, if you're looking for a reliable, top-quality roofing service, I'd say check out Grell Commercial Roofing. They've got it down to a T.",
		name: 'Randy Tjaden',
		title: 'Owner - Tjaden Construction',
	},
	{
		avatar: <NcI />,
		icon: <SiMinutemailer className='text-xs text-l5 shadow-nimble' />,
		description:
			'I work for a business in which we contract out for things beyond our expertise, so we have used Grell Roofing several times, projects big & small. They recently came out the same day I called, on a rainy day of all days, to check out an issue for a client of ours. Turned out to not even be roofing related and they still temporarily patched it until our guys could get back there. THAT is going above & beyond, with exceptional customer service, especially by the young man who came out, communicated with me the whole time and their office manager, who returns my messages asap and is super friendly! We will continue using Grell Roofing for our business plus I will definitely reach out & recommend them personally!',
		name: 'Theresa H',
		title: '',
	},
	{
		avatar: <AvAlt />,
		icon: <SiGoogle className='text-xs text-l5 shadow-nimble' />,
		description: 'Great company to work with, always on time, I would definitely recommend their service.',
		name: 'Doug R',
		title: '',
	},
	{
		avatar: <JustinG />,
		icon: <SiGoogle className='text-xs text-l5 shadow-nimble' />,
		description:
			'Called and got a response immediately. Followed up and got a description right away. Good price and they came and knocked out the job on time and communicated throughout. Absolute 5 star. Will recommend and use again. Thanks!',
		name: 'Justin G',
		title: '',
	},
	{
		avatar: <Dks />,
		icon: <SiHomeadvisor className='text-xs text-l5 shadow-nimble' />,
		description: 'Family business for as long as I can remember.  Great reputation.',
		name: 'Doug S',
		title: '',
	},

	{
		avatar: <AvAlt />,
		icon: <SiFacebook className='text-xs text-l5 shadow-nimble' />,
		description:
			'There is no other place like Grell Roofing. They stand by there work and there product. As the advertisement says 24 hour service. There is no one you can trust more than Erica Grell.',
		name: 'Sheila F',
		title: '',
	},
	{
		avatar: <Nik />,
		icon: <SiFacebook className='text-xs text-l5 shadow-nimble' />,
		description:
			'This is a family owned business that has become very reputable and I know there are quite a few employees that have been there awhile which has to say something.',
		name: 'Nikki M',
		title: '',
	},
];
