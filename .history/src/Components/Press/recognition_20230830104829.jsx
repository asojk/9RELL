/** @format */

const Recognition = ({ img, title, subtitle, date }) => {
	return (
		<div class='lg:w-3/4 xl:w-2/4 lg:mx-auto'>
			<div class='group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-transparent border border-transparent hover:border-d3 hover:bg-d7/70 shadow-transparent hover:shadow-nimble sm:gap-8 sm:flex transition duration-300 hover:z-10'>
				<div class='sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl'>
					<img
						src={img}
						alt='recognition'
						loading='lazy'
						width='1000'
						height='667'
						class='h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105'
					/>
				</div>

				<div class='sm:p-2 sm:pl-0 sm:w-4/6'>
					<span class='mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-l1 sm:mt-0'>{date}</span>
					<h3 class='text-2xl font-semibold text-white'>{title}</h3>
					<p class='my-6 text-gray-600 dark:text-gray-300'>{subtitle}</p>

					<div class='flex gap-4'>
						<a
							href='#'
							class='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
							Tailwindcss
						</a>
						<a
							href='#'
							class='px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300'>
							VueJS
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recognition;