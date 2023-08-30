import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {SiGoogle, SiMinutemailer, SiHomeadvisor, SiFacebook} from 'react-icons/si';
import { Avs } from './avatars';

const Testis = () => {
	return (
	<section className="relative z-1 max-w-[85rem] px-4 py-24 mx-auto">
		<div className="container px-5 py-12 mx-auto rounded-2xl">
		  <div className="mb-8 bg-d7 rounded-2xl">
			<header className="header">
			  <span className="title-head">What others have to say</span>
			  <h1 class="h2">Testimonials</h1>
			</header>
			<Swiper
				modules={[Autoplay]} spaceBetween={10} slidesPerView={2} navigation={false}
				disableOnInteraction={true} autoplay={{delay: 5000}}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
				className='w-full h-full px-2 pb-2 text-center lg:px-6 text-l1'>
			{Quotes.map((quote, index) => (
			<SwiperSlide key={index}>
				        <img alt="team" class="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-8 rounded-full shadow-xl aboslute">{quote.avatar}</img>
				<span className='px-4 pt-8 transition-all duration-500 line-clamp-6 lg:line-clamp-3 hover:line-clamp-none text-l2'>{quote.description}</span>
				<h6 className='flex flex-row items-center justify-center gap-4 mt-4 text-lg font-semibold leading-none'>{quote.icon}{quote.name}</h6>
				<span className='text-xs text-l3'>{quote.title} </span>
			</SwiperSlide>
			))}
			</Swiper>
			</div>
		</div>
	</section>
	);
};

export default Testis;


const Quotes = [
	{
		avatar: <Avs />,
		icon: <SiMinutemailer className='text-2xl' />,
		description:
			"I've used Grell roofing on several occasions. Each time they have been extremely prompt with their bids, on doing the work on schedule, and with no call backs. Their team is on point, always getting the job done right and on time. What I really appreciate is how they keep things clear and straightforward. No fluff, just honest work. They get what we need and they deliver, no fuss. The quality of their work speaks for itself. The roofs they've put up are solid and look great. They've definitely become our go-to for all things roofing. So, if you're looking for a reliable, top-quality roofing service, I'd say check out Grell Commercial Roofing. They've got it down to a T.",
		name: 'Randy Tjaden',
		title: 'Owner - Tjaden Construction',
	},
	{
		avatar: '',
		icon: <SiMinutemailer className='text-2xl' />,
		description:
			'I work for a business in which we contract out for things beyond our expertise, so we have used Grell Roofing several times, projects big & small. They recently came out the same day I called, on a rainy day of all days, to check out an issue for a client of ours. Turned out to not even be roofing related and they still temporarily patched it until our guys could get back there. THAT is going above & beyond, with exceptional customer service, especially by the young man who came out, communicated with me the whole time and their office manager, who returns my messages asap and is super friendly! We will continue using Grell Roofing for our business plus I will definitely reach out & recommend them personally!',
		name: 'Theresa H',
		title: '',
	},
	{
		avatar: '',
		icon: <SiGoogle className='text-2xl' />,
		description: 'Great company to work with, always on time, I would definitely recommend their service.',
		name: 'Doug R',
		title: '',
	},
	{
		avatar: '',
		icon: <SiGoogle className='text-2xl' />,
		description:
			'Called and got a response immediately. Followed up and got a description right away. Good price and they came and knocked out the job on time and communicated throughout. Absolute 5 star. Will recommend and use again. Thanks!',
		name: 'Justin G',
		title: '',
	},
	{
		avatar: '',
		icon: <SiHomeadvisor className='text-2xl' />,
		description: 'Family business for as long as I can remember.  Great reputation.',
		name: 'Doug S',
		title: '',
	},

	{
		avatar: '',
		icon: <SiFacebook className='text-2xl' />,
		description:
			'There is no other place like Grell Roofing. They stand by there work and there product. As the advertisement says 24 hour service. There is no one you can trust more than Erica Grell.',
		name: 'Sheila F',
		title: '',
	},
	{
		avatar: '',
		icon: <SiFacebook className='text-2xl' />,
		description:
			'This is a family owned business that has become very reputable and I know there are quite a few employees that have been there awhile which has to say something.',
		name: 'Nikki M',
		title: '',
	},
];