import React from 'react'

const categories = [
	{ label: "All", value: "", isActive: false },
	{ label: "Branding", value: "Branding", isActive: true },
	{ label: "Code", value: "Code", isActive: false },
	{ label: "Marketing", value: "Marketing", isActive: false },
	{ label: "Photography", value: "Photography", isActive: false },
	{ label: "Development", value: "Development", isActive: false },
];

const Development = [
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio1.jpg",
		title: "Web Portal Dev",
		categories: ["Development"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio2.jpg",
		title: "Web Portal Dev",
		categories: ["Development"],
	},
];

const portfolioList = [
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio12.jpg",
		title: "Photography",
		categories: ["Cinematography"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio13.jpg",
		title: "Web Portal Dev",
		categories: ["Product Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio14.jpg",
		title: "Marketing",
		categories: ["Digital Marketing"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio15.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16.jpg",
		title: "VS Code Editor",
		categories: ["Specialist"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio17.jpg",
		title: "Management",
		categories: ["Project Manager"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio18.jpg",
		title: "Logo Design",
		categories: ["Branding"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio19.jpg",
		title: "Full Stack Dev",
		categories: ["Wordpress"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio20.jpg",
		title: "Designing",
		categories: ["Product Design"],
	},
];
const TabTest = () => {
  return (
		<section className="ezy__portfolio3 dark py-14 md:py-24 bg-white dark:bg-[#0b1727] text-[#373572] dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="grid justify-center grid-cols-12 mb-6 md:mb-12">
					<div className="col-span-12 text-center lg:col-span-6 lg:col-start-4">
						<p className="mb-2">THIS IS WHAT WE DO</p>
						<h2 className="text-3xl md:text-[45px] font-bold mb-6">
							My Latest Works
						</h2>
					</div>
					<div className="col-span-12 mt-6 text-center">
						{categories.map((category, i) => (
							<button
								onClick={() => (category.isActive = !category.isActive)}
								className={`btn m-1 py-2 px-5 hover:bg-blue-600 hover:text-white rounded-md ${
									category.isActive && "bg-blue-600 text-white"
								}`}
								key={i}
							>
								{category.label}
							</button>
						))}
					</div>
				</div>
				<div className="grid grid-cols-6 gap-6 text-center md:gap-y-12">
					{portfolioList.map((portfolio, i) => (
						<div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
							<div className="overflow-hidden rounded-xl">
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="max-w-[250px] h-auto rounded-xl mx-auto"
								/>
								<div className="mt-6">
									<h5 className="mb-1 text-xl font-medium">
										{portfolio.title}
									</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TabTest