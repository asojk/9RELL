import React from "react";
import { motion } from "framer-motion";

function GettingStarted({ executeScroll }) {
  return (
		<div className="items-center container mx-auto md:mt-[40vh] mb-16">
		<div className="grid grid-cols-1 gap-4 shadow-lg lg:grid-cols-2 lg:gap-8 bg-w2 rounded-2xl">

			
			<div className="relative p-4 m-auto w-128">
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
			<div className="relative p-4 m-auto shadow-lg w-128 rounded-2xl">
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
          <iframe
            width="100%"
            height="400px"
            src="https://api.mapbox.com/styles/v1/grell/clkk0o55v00vq01qf1ze302fe.html?title=false&access_token=pk.eyJ1IjoiZ3JlbGwiLCJhIjoiY2xraXpib3NkMDBibTNybXZnbml5eGMwMyJ9.y69nZBItX012aWE7GWBfyA&zoomwheel=true#4.21/39.56/-94.35"
            title="GRELL-copy-copy"
            style={{ borderRadius: "2rem", marginBottom: "2rem" }}
          ></iframe>
					</div>
				</div>
			</div>
			
		</div>
	</div>




  );
}

export default GettingStarted;
