import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Cbuttons from "./cbuttons";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
		<>
			<nav className='fixed w-full flex items-center md:px-[5vw] xl:px-[10vw] py-4 z-[99]'>
				<div className='w-1/3 pl-8 z-[99]'>
					<button
						onClick={() => setSidebarOpen(true)}
						className='w-12 h-12 p-2 transition-colors duration-200 border cursor-pointer rounded-xl shadow-nimble text-l1 lg:w-16 lg:h-16 bg-d7 border-b3 hover:bg-d6 hover:text-r'></button>
					<div>
						<button onClick={() => setSidebarOpen(true)} className='relative group'>
							<div className='relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-rd1 ring-0 ring-rd3 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-nimble'>
								<div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden'>
									<div className='bg-d7 h-[2px] w-7 transform transition-all duration-500 group-focus:rotate-45 -translate-x-1' />
									<div className='bg-white h-[2px] w-7 rounded transform transition-all duration-500 ' />
									<div className='bg-white h-[2px] w-7 transform transition-all duration-500 group-focus:-rotate-45 -translate-x-1' />
								</div>
							</div>
						</button>
					</div>
					<SideBar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
				</div>
				<div className='items-center w-1/3 text-center bg-transparent place-content-center'>
					<Link to='/'>
						<img
							className='mx-auto w-2/2 md:w-4/4 lg:w-5/6 xl:w-5/8 max-w-[32rem]'
							src='https://grell.s3.us-east-2.amazonaws.com/grell/W-Tag.svg'
							alt='Logo'
						/>
					</Link>
				</div>
				<div className='items-end justify-end hidden w-1/3 md:block'>
					<Cbuttons className='' />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
