const Awards = ({ img, title, subtitle }) => {
	return (
		<div class='space-y-4 rounded-3xl bg-transparent border border-transparent hover:border-d3 hover:bg-d7/70 shadow-transparent hover:shadow-nimble px-8 py-12 sm:px-12 lg:px-8'>
			<img src={img} alt='award' loading='lazy' width='900' height='600' />
			<h3 class='text-2xl font-semibold text-gray-800 dark:text-white'>{title}</h3>
			<p class='mb-6 text-gray-600 dark:text-gray-300'>{subtitle}</p>
		</div>
	);
};

export default Awards;