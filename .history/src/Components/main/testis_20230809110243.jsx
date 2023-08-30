import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {SiGoogle, SiMinutemailer, SiHomeadvisor, SiFacebook} from 'react-icons/si';

const Quotes = [
	{
		avatar: <SiMinutemailer className='text-2xl' />,
		description:
			"I've used Grell roofing on several occasions. Each time they have been extremely prompt with their bids, on doing the work on schedule, and with no call backs. Their team is on point, always getting the job done right and on time. What I really appreciate is how they keep things clear and straightforward. No fluff, just honest work. They get what we need and they deliver, no fuss. The quality of their work speaks for itself. The roofs they've put up are solid and look great. They've definitely become our go-to for all things roofing. So, if you're looking for a reliable, top-quality roofing service, I'd say check out Grell Commercial Roofing. They've got it down to a T.",
		name: 'Randy Tjaden',
		title: 'Owner - Tjaden Construction',
	},
	{
		avatar: <SiMinutemailer className='text-2xl' />,
		description:
			'I work for a business in which we contract out for things beyond our expertise, so we have used Grell Roofing several times, projects big & small. They recently came out the same day I called, on a rainy day of all days, to check out an issue for a client of ours. Turned out to not even be roofing related and they still temporarily patched it until our guys could get back there. THAT is going above & beyond, with exceptional customer service, especially by the young man who came out, communicated with me the whole time and their office manager, who returns my messages asap and is super friendly! We will continue using Grell Roofing for our business plus I will definitely reach out & recommend them personally!',
		name: 'Theresa H',
		title: '',
	},
	{
		avatar: <SiGoogle className='text-2xl' />,
		description: 'Great company to work with, always on time, I would definitely recommend their service.',
		name: 'Doug R',
		title: '',
	},
	{
		avatar: <SiGoogle className='text-2xl' />,
		description:
			'Called and got a response immediately. Followed up and got a description right away. Good price and they came and knocked out the job on time and communicated throughout. Absolute 5 star. Will recommend and use again. Thanks!',
		name: 'Justin G',
		title: '',
	},
	{
		avatar: <SiHomeadvisor className='text-2xl' />,
		description: 'Family business for as long as I can remember.  Great reputation.',
		name: 'Doug S',
		title: '',
	},

	{
		avatar: <SiFacebook className='text-2xl' />,
		description:
			'There is no other place like Grell Roofing. They stand by there work and there product. As the advertisement says 24 hour service. There is no one you can trust more than Erica Grell.',
		name: 'Sheila F',
		title: '',
	},
	{
		avatar: <SiFacebook className='text-2xl' />,
		description:
			'This is a family owned business that has become very reputable and I know there are quite a few employees that have been there awhile which has to say something.',
		name: 'Nikki M',
		title: '',
	},
];

const Testis = () => {
	return (
<section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div
      className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div
        className="max-w-lg mx-auto text-center lg:mx-0 ltr:lg:text-left"
      >
													<header className='header rounded-2xl bg-w2'>
				<span className='head'>What Others Say</span>
				<h2 className='head3'>Testimonials</h2>
			</header>


      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
			<Swiper
					modules={[Navigation, Autoplay]}
					spaceBetween={10}
					slidesPerView={1}
					navigation={false}
          disableOnInteraction={true}
					autoplay={{delay: 5000}}
					onSwiper={swiper => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}>
					{Quotes.map((quote, index) => (
						<SwiperSlide key={index}>
							<div className='relative items-center justify-center w-full bg-w2 carousel-item'>
								<div className='items-center justify-center max-w-md text-center text-d7'>
									<span className='transition-all duration-700 line-clamp-4 hover:line-clamp-none'>{quote.description}</span>
									<div>
										<h6 className='flex flex-row items-center justify-center gap-4 mt-4 text-lg font-semibold leading-none'>{quote.avatar}{quote.name}</h6>
										<span className='text-xs text-d5'>{quote.title} </span>
									</div>
								</div>
							</div>
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
