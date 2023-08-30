import React, {useRef} from 'react';
import { Helmet } from "react-helmet";
import RepairFaq from "../Layout/repairFaq";

const RepairServices = ({Service}) => (
    <div className="w-full px-2 sm:w-1/2">
    <div className="flex items-center h-full">
      <div className="flex items-center w-full">
      <svg
      viewBox="0 0 24 24" fill="none" stroke="currentColor" 
      strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
      className="flex-shrink-0 w-4 h-4 mr-3 text-yw">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
      <span className="text-l3">
        {Service}</span>
      </div>
    </div>
  </div>
  );

  const RepairSigns = ({RepairSigns}) => (
    <div className="w-full p-2 sm:w-1/2">
    <div className="flex items-center">
      <div className="flex-shrink-0 mr-2 text-2xl text-r">»</div>

      <span className="text-l3">{RepairSigns}</span>
    </div>
  </div>
  );

function Repair() {
  const EmergencyRef = useRef(null);

  const scrollToEmergency = () => {
  EmergencyRef.current.scrollIntoView({behavior: 'smooth'});
  };
  


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

			<section className='pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg)] bg-cover bg-center bg-no-repeat'>
				<div className='absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r'></div>
				<div className='relative max-w-screen-xl px-8 py-32 mx-auto sm:px-10 lg:flex lg:items-center lg:px-12'>
					<div className='max-w-2xl text-center sm:text-left'>
						<span className='title-head'>licensed, bonded, insured</span>
						<h1 class='h1'>Flat Roof Repair</h1>
						<p className='max-w-lg pb-12 mt-4 lg:pb-24 sm:text-xl/relaxed text-l3'>
							We'll work with your insurance company to smooth the process.
						</p>
						<span className='head'>Our services include:</span>
						<div className='flex flex-wrap pt-4 pb-4'>
							<RepairServices Service='Leaks & Holes/Punctures' />
							<RepairServices Service='Metal & Modified Bitumen' />
							<RepairServices Service='TPO, EPDM & PVC' />
							<RepairServices Service='Built-Up & Ballasted' />
							<RepairServices Service='Vent & Insulation ' />
							<RepairServices Service='Membrane, Deck, & Sealant' />
							<RepairServices Service='Penetration & Perimeter' />
							<RepairServices Service='Seal-In Seams & Penetrations' />
						</div>
						<div className='flex flex-wrap gap-4 mt-8 text-center'>
							<a
								onClick={scrollToEmergency}
								className='block w-full px-12 py-3 text-sm font-medium rounded shadow-sm cursor-pointer shadow-rd3 text-l1 bg-r hover:bg-rd2 focus:outline-none focus:ring active:bg-r sm:w-auto'>
								Emergency?
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className='relative max-w-screen-xl px-8 py-16 mx-auto sm:px-16 lg:flex lg:items-center lg:justify-around lg:py-24'>
				<div className='relative z-10 max-w-3xl px-8 pb-8 mx-auto bg-d7 shadow-nimble rounded-2xl'>
					<header className='text-center'>
						<h2 className='my-4 head'>Signs that it's time for a repair</h2>
						<h1 className='mb-8 h2'>Notice a leak?</h1>
					</header>
					<p className='mb-8 text-base leading-relaxed text-l3'>
						Whether from faulty installation, storm damage, or simply an outdated roofing system, there are a variety of
						reasons you may need a flat roof repair. Signs of damage are not always obvious, either, which is why it is
						important to get a professional roof inspection to uncover even the smallest of damage on your roof. Some
						common signs you may need a flat roof repair include:
					</p>
					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
						<RepairSigns RepairSigns='Pooling water on the roof' />
						<RepairSigns RepairSigns='Water stains on the ceiling or around windows' />
						<RepairSigns RepairSigns='Flashing separation' />
						<RepairSigns RepairSigns='Cracks in coating' />
						<RepairSigns RepairSigns='Rips, cracks or bubbles in the roof membrane' />
						<RepairSigns RepairSigns='Loose or missing fasteners, flashing or caulking' />
					</div>
				</div>
			</section>
			<section
				ref={EmergencyRef}
				className='relative max-w-screen-xl px-8 py-16 mx-auto sm:px-16 lg:flex lg:items-center lg:justify-around lg:py-24'>
				<div className='max-w-3xl px-8 mx-auto bg-white shadow-lg rounded-2xl'>
					<div className='text-center'>
						<header className='mb-4 text-xl font-bold text-gray-700'>24/7 Emergency Flat Roof Repair Services</header>
						<h1 class='mb-8 text-3xl font-bold text-gray-800'>Emergency Repairs</h1>
						<p className='mb-8 text-base leading-relaxed text-l3'>
							At Grell, we always strive to serve our customers as quickly and efficiently as possible. We understand,
							though, that some issues can not wait even a day. That is why we offer a 24/7 emergency flat roof repair
							services for situations that are serious safety hazards. If you need immediate assistance, call today.
						</p>
						<div className='flex justify-center gap-8'>
							<a className='px-8 py-3 font-medium text-white rounded-lg shadow bg-r hover:bg-rd2 focus:outline-none focus:ring-2 focus:ring-rd2 active:bg-rl'>
								Contact
							</a>
						</div>
					</div>
				</div>
			</section>

			<RepairFaq />
		</>
	);
}

export default Repair;
