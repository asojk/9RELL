import React from 'react';

const BgTwo = () => {
	return (
        <div className="relative">
			<div className='fixed max-h-screen max-w-screen @apply bg-[linear-gradient(115deg,#111,#45423b)]'>
      <video className="absolute rounded-lg w-70vw" autoPlay muted>
  <source src="https://grell.s3.us-east-2.amazonaws.com/Edits/AML_Simple.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
				<svg className='absolute -top-10 -z-10 opacity-20 ' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
					<defs>
						<pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'>
							<rect x='0' y='0' width='100%' height='100%' fill='none' />
							<path d='M3.25 10h13.5M10 3.25v13.5' strokeLinecap='square' strokeWidth='0.05' stroke='#ccc' fill='none' />
						</pattern>
					</defs>
					<rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)' />
				</svg>
				<svg
					viewBox="0 0 2400 2400"
					width="2400"
					height="2400"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="miter"
					stroke="#45423b"
					strokeWidth="40">
					<path d="M0 1549L133.3 1607.8C266.7 1666.7 533.3 1784.3 800 1819.7C1066.7 1855 1333.3 1808 1600 1816.7C1866.7 1825.3 2133.3 1889.7 2266.7 1921.8L2400 1954"/>
				</svg>
			</div>
        </div>
    );
};

export default BgTwo;