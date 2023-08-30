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
				<div className='relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:items-center lg:px-8'>
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

			<section className='relative max-w-screen-xl px-4 py-[10vh] mx-auto sm:px-6 lg:flex lg:items-center lg:px-8'>
				<div className='relative z-1 max-w-[85rem] px-4 mx-auto'>
					<div className='container px-5 mx-auto rounded-2xl'>
						<div className='mb-8 text-center'>
							<header className='header'>
								<span className='head'>Signs that it's time for a repair</span>
								<h1 class='h2'>Notice a leak?</h1>
                  <svg width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >
    <defs>
    <style>
      .vi-primary {
        fill: #FF6E6E;
      }

      .vi-primary, .vi-accent {
        fill-rule: evenodd;
      }

      .vi-accent {
        fill: #0C0058;
      }
    </style>
    </defs>
    <g >
        <path class="vi-primary" d="M28.3661302,34.7363961 C28.6559368,35.2798687 29.0043865,35.8015205 29.4012511,36.2836223 C29.9999574,37.0098434 29.895627,38.0845144 29.1687239,38.6825388 C28.8509595,38.9443875 28.4670511,39.0712205 28.0858702,39.0712205 C27.5942219,39.0712205 27.105983,38.8598322 26.7691255,38.4500116 C26.2276987,37.793344 25.7524159,37.0814427 25.3548695,36.3354465 C25.3337306,36.2945326 24.8400366,35.3610145 24.4977239,34.3218023 C23.9747083,32.7302528 23.9372039,31.1121093 23.9017452,29.5464719 C23.8758331,28.4056569 23.8506029,27.3282583 23.6358051,26.3783747 C23.342589,25.081405 22.6231868,23.8178484 21.4994192,22.625891 C20.853662,21.9405837 20.8857112,20.8618214 21.5703366,20.2160641 C22.2563258,19.5703069 23.3344062,19.6016742 23.9801635,20.2869815 C25.5280715,21.9289914 26.5311432,23.7257922 26.9614207,25.6262414 C27.2519092,26.9088912 27.2812308,28.2099522 27.3105524,29.4680536 C27.3419197,30.8454872 27.3712413,32.1458664 27.7360566,33.255996 C27.9849493,34.0108569 28.3627207,34.7288953 28.3661302,34.7363961 Z M32.4841793,28.7791323 C32.8210368,29.38193 33.2431315,29.9465413 33.7375074,30.4593285 C34.3921293,31.136453 34.3730362,32.2152154 33.6952298,32.8691554 C33.019469,33.5237773 31.9400248,33.5060479 31.2854029,32.8275596 C30.5871396,32.104066 29.9891152,31.3021542 29.5090591,30.4436448 C28.2107257,28.1245104 28.1739032,26.1047291 28.1411721,24.3229301 C28.1138962,22.8268463 28.088666,21.4132721 27.3378965,19.739213 C26.9389863,18.8486545 26.3361886,17.503952 25.0385371,16.8888802 C23.9761403,16.3856396 22.3048087,16.2676712 21.1435368,17.1984618 C19.7736041,18.2969991 19.8799801,20.346784 19.9147569,21.020499 C19.980901,22.2936022 20.4200432,23.022551 21.0276141,24.0303959 C21.4524365,24.7361602 21.9338563,25.5360263 22.3143553,26.5895584 C23.4203936,29.6540072 23.0610334,33.2748846 21.2458214,37.3512697 C20.9628338,37.9861165 20.3395792,38.363206 19.687003,38.363206 C19.4558397,38.363206 19.219903,38.3147913 18.9948768,38.2152342 C18.1350036,37.8313257 17.7476857,36.8241627 18.1309122,35.9636076 C19.5758537,32.7191378 19.9045284,29.955406 19.1073899,27.746739 C18.8407679,27.0082437 18.4841353,26.4163564 18.1070458,25.7896923 C17.4101462,24.6331936 16.6198267,23.3219041 16.5100411,21.1971105 C16.3559322,18.2329007 17.1973941,15.9921845 19.0112423,14.5376965 C21.3283311,12.6802069 24.4418765,12.832952 26.4991622,13.8080658 C28.9335374,14.9618369 29.9195616,17.1623212 30.4493962,18.344732 C31.4845171,20.6543199 31.5192939,22.5704527 31.5499793,24.2601955 C31.5806647,25.9062968 31.6038492,27.205994 32.4841793,28.7791323 Z M36.5269468,21.3464461 C36.7321981,22.7102418 36.7772033,24.0460796 36.6708273,25.3723708 C36.5951366,26.3113441 35.7741316,27.0048342 34.8351584,26.9352806 C33.8961851,26.8589081 33.1965579,26.0372212 33.2722486,25.0989298 C33.3581677,24.0324416 33.3213452,22.9584526 33.1631449,21.9069661 C32.9633489,20.566355 32.3810081,16.6611263 29.1249461,14.0160447 C27.9363982,13.0491136 25.7795554,11.9001158 23.8531941,11.6600877 C21.8443231,11.411195 19.8913678,12.165374 19.3397125,12.4026745 C18.0700188,12.9488746 17.0962687,13.6941889 16.4457382,14.6174785 C14.7859989,16.9713898 15.2149126,20.4170194 15.4760795,21.7889978 C15.7242903,23.0921045 16.0843323,23.9253837 16.4661951,24.8070775 C16.9653443,25.9608486 17.4815409,27.1541698 17.5926903,29.088032 C17.7072491,31.0880383 17.3465252,33.1112291 16.5187012,35.1016888 C16.246624,35.7569926 15.612459,36.1524933 14.9441992,36.1524933 C14.7259919,36.1524933 14.5043751,36.1102157 14.2902592,36.0215689 C13.4208395,35.6601631 13.0089732,34.6625466 13.370379,33.792445 C13.9984069,32.2827232 14.2738936,30.7648187 14.1886564,29.2837367 C14.1122839,27.9526721 13.7870186,27.2005389 13.3369661,26.1606447 C12.9189627,25.1950774 12.4457256,24.1006314 12.1265974,22.4272542 C11.7010932,20.192675 11.3342322,15.9512707 13.6588218,12.6529309 C14.6775771,11.2073076 16.1354747,10.0692201 17.9916005,9.2707178 C18.9537583,8.85680583 21.4883725,7.93010671 24.273925,8.27651079 C27.0601595,8.62359678 29.7870689,10.1599125 31.2756518,11.3695993 C35.55797,14.8493238 36.2869188,19.7398949 36.5269468,21.3464461 Z"></path>
    </g>
</svg>


							</header>
							<p className='pt-4 mx-auto text-base leading-relaxed lg:w-3/4'>
								Whether from faulty installation, storm damage, or simply an outdated roofing system, there are a
								variety of reasons you may need a flat roof repair. Signs of damage are not always obvious, either,
								which is why it is important to get a professional roof inspection to uncover even the smallest of
								damage on your roof. Some common signs you may need a flat roof repair include:
							</p>
						</div>
						<div className='flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2'>
							<RepairSigns RepairSigns='Pooling water on the roof' />
							<RepairSigns RepairSigns='Water stains on the ceiling or around windows' />
							<RepairSigns RepairSigns='Flashing separation' />
							<RepairSigns RepairSigns='Cracks in coating' />
							<RepairSigns RepairSigns='Rips, cracks or bubbles in the roof membrane' />
							<RepairSigns RepairSigns='Loose or missing fasteners, flashing or caulking' />
						</div>
					</div>
				</div>
			</section>

			<section
				ref={EmergencyRef}
				className='relative max-w-screen-xl px-4 py-[10vh] mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
				<div className='text-l1 body-font'>
					<div className='container px-5 mx-auto'>
						<div className='text-center'>
							<header className='header'>
								<h2 className='head'>24/7 Emergency Flat Roof Repair Services</h2>
								<h1 class='h2'>Emergency Repairs</h1>
							</header>

							<p className='pt-4 mx-auto text-base leading-relaxed lg:w-3/4'>
								At Grell, we always strive to serve our customers as quickly and efficiently as possible. We understand,
								though, that some issues can not wait even a day. That is why we offer a 24/7 emergency flat roof repair
								services for situations that are serious safety hazards. If you need immediate assistance, call today.
							</p>
							<div className='gap-4 mt-8 text-center'>
								<a className='w-full px-12 py-3 text-sm font-medium rounded shadow-sm cursor-pointer shadow-rd3 text-l1 bg-r hover:bg-rd2 focus:outline-none focus:ring active:bg-r sm:w-auto'>
									Contact
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<RepairFaq />
		</>
	);
}

export default Repair;
