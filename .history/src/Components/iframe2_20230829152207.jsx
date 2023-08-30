import React, { useEffect } from 'react';

function Hero() {
	useEffect(() => {
		const frameRef = React.createRef();
		const handleLoad = () => {
			const frame = frameRef.current;
		};
	}, []);
	
	
	return (
		<div className='relative justify-center w-full overflow-hidden rounded-2xl group'>
			<img
				alt='moto'
				src='https://grell.s3.us-east-2.amazonaws.com/earth-line.svg'
				className='absolute w-40 h-40 mb-4 -left-16 -bottom-16'
			/>
			<div className='w-full'>
				<h2 className='mb-4 text-2xl font-bold text-white md:text-4xl'>Does Grell service my area?</h2>
				<p className='mb-4 text-md text-l3'>
					Grell is available to work in most of North America. Check our map of projects, and consider helping us cover
					the whole map in red.
				</p>
			</div>
			<iframe
				ref={frameRef}
				onLoad={handleLoad}
				src='https://api.mapbox.com/styles/v1/grell/clkk0o55v00vq01qf1ze302fe.html?title=false&access_token=pk.eyJ1IjoiZ3JlbGwiLCJhIjoiY2xraXpib3NkMDBibTNybXZnbml5eGMwMyJ9.y69nZBItX012aWE7GWBfyA&zoomwheel=false#4.21/39.56/-94.35'
				title='GRELL-copy-copy'
				width='100%'
				height='400px'
				loading='lazy'
				className='flex p-0 rounded-2xl border-b3'></iframe>
		</div>
	);
}