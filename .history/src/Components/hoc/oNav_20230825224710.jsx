import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Cbuttons from "./cbuttons";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
		<>
			<nav className='fixed w-full flex items-center md:px-[5vw] xl:px-[10vw] py-4 z-[99]'>
				<div className='w-1/4 md:w-1/3 pl-8 z-[99]'>
					<div>
						<button onClick={() => setSidebarOpen(true)} className='relative group'>
							<div className='relative inline-flex overflow-hidden border rounded-md shadow-nimble bg-d7  p-4 text-l1 md:text-l1 border-e-[.5px] border-b3 focus:relative hover:bg-d6'>
								<div className='flex flex-col justify-between w-[20px] h-[20px] md:w-[31px] md:h-[31px] transform transition-all duration-400 origin-center overflow-hidden'>
									<div className='transition-all transform -translate-x-1 bg-white h-sm w-sm md:h-md md:md duration-400 group-focus:rotate-45' />
									<div className='bg-white h-[2px] w-7 md:h-[4px] md:w-9 rounded transform transition-all duration-400 ' />
									<div className='bg-white h-[2px] w-7 md:h-[4px] md:w-9 transform transition-all duration-400 group-focus:-rotate-45 -translate-x-1' />
								</div>
							</div>
						</button>
					</div>
					<SideBar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
				</div>
				<div className='items-center w-2/4 text-center bg-transparent md:w-1/3 place-content-center'>
					<Link to='/'>
						<img
							className='mx-auto w-2/2 md:w-4/4 lg:w-5/6 xl:w-5/8 max-w-[32rem]'
							src='https://grell.s3.us-east-2.amazonaws.com/grell/W-Tag.svg'
							alt='Logo'
						/>
					</Link>
				</div>
				<div className='items-end justify-end hidden w-1/4 md:w-1/3 md:block'>
					<Cbuttons className='' />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
