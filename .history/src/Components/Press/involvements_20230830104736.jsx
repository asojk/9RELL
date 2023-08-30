import React from 'react'

const Involvements = ({ img, title, subtitle }) => {
	return (
		<div class='group p-6 sm:p-8 rounded-3xl bg-transparent border border-transparent hover:border-d3 hover:bg-d7/70 shadow-transparent hover:shadow-nimbl'>
			<div class='relative overflow-hidden rounded-xl'>
				<img
					src={img}
					alt='involvement'
					loading='lazy'
					width='1000'
					height='667'
					class='h-64 w-full object-cover object-center transition duration-500 group-hover:scale-105'
				/>
			</div>
			<div class='mt-6 relative'>
				<h3 class='text-2xl font-semibold text-white'>{title}</h3>
				<p class='mt-6 mb-8 dark:text-gray-300'>{subtitle}</p>
			</div>
		</div>
	);
};

export default Involvements