import React from "react";
import { motion } from "framer-motion";

function GettingStarted({ executeScroll }) {
  return (
		<div className="items-center container mx-auto md:mt-[40vh] mb-16">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

			
			<div className="relative p-4 m-auto shadow-lg w-128 bg-w2 rounded-2xl">
				<div className="w-full h-full text-center">
					<div className="flex flex-col justify-between h-full">
					<h2 className="text-lg font-bold align-text-bottom xl:font-extrabold text-d9 xl:text-2xl md:text-lg">
            How Soon Can We Start?
          </h2>
        </div>
        <div className="">
          <p className="pb-6 text-lg leading-relaxed text-d7">
            Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod
            sunt. Esse qui aliquip adipisicing ea officia Lorem enim cupidatat
            Lorem amet tempor sint consequat.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.225, ease: "easeIn" }}
            className=""
          >
            <button
              onClick={executeScroll}
              className="relative inline-flex items-center justify-center m-1 mt-6 cursor-pointer lg:text-lg lg:px-2 lg:py-3 btn bg-r border-l1 hover:bg-r text-l1"
            >
              Schedule your free estimate
            </button>
          </motion.button>
					</div>
				</div>
			</div>
			<div className="relative p-4 m-auto shadow-lg w-128 bg-w2 rounded-2xl">
				<div className="w-full h-full text-center">
					<div className="flex flex-col justify-between h-full">
					<h2 className="text-lg font-bold align-text-bottom xl:font-extrabold text-d9 xl:text-2xl md:text-lg">
            Does Grell Service my Area?
          </h2>
        </div>
        <div className="">
          <p className="pb-6 text-lg leading-relaxed text-d7">
            Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod
            sunt. Esse qui aliquip adipisicing.
          </p>
					<motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.225, ease: "easeIn" }}
            className=""
          >
            <button
              onClick={}
              className="relative inline-flex items-center justify-center m-1 mt-6 cursor-pointer lg:text-lg lg:px-2 lg:py-3 btn bg-r border-l1 hover:bg-r text-l1"
            >
              Check the Map
            </button>
          </motion.button>
					</div>
				</div>
			</div>
			
		</div>
	</div>




  );
}

export default GettingStarted;
