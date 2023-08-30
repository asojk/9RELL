import React, {useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceArea from "./servicearea";
import HowSoon from "./howsoon";

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="p-4 overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[90vw] p-0 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="px-2 py-2 text-lg text-center text-white bg-black">
              </div>
              <iframe
              src="https://api.mapbox.com/styles/v1/grell/clkk0o55v00vq01qf1ze302fe.html?title=false&access_token=pk.eyJ1IjoiZ3JlbGwiLCJhIjoiY2xraXpib3NkMDBibTNybXZnbml5eGMwMyJ9.y69nZBItX012aWE7GWBfyA&zoomwheel=false#4.21/39.56/-94.35" title="GRELL-copy-copy" loading="lazy" style={{ height: "50vh", borderRadius: ".5rem", border: "5px solid black", borderTopLeftRadius: "20rem", borderBottomLeftRadius: "20rem", borderBottomRightRadius: "20rem"}}></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function GettingStarted({ executeScroll }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
<section>

<div className="grid grid-cols-2 grid-rows-2 gap-4 px-12 py-12 max-w-[100rem] items-center justify-center bg-d7 rounded-2xl">
        <div className="row-span-2">
          <header className="header">
            <span className="head">Your Questions Answered</span>
            <h2 className="heading">Getting started</h2>
          </header>
        </div>
    <div >
    <div className="relative p-4 m-auto w-128">
      <div className="w-full h-full">
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-lg font-bold align-text-bottom head4 xl:font-extrabold text-l1 xl:text-2xl md:text-lg">
            Does Grell Service my Area?
          </h2>
        </div>
        <div className="">
          <p className="pb-6 text-lg leading-relaxed text-l3">
            Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod
            sunt. Esse qui aliquip adipisicing.
          </p>
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.225, ease: "easeIn" }}
              className="p-2 text-center"
            >
              <a
                onClick={() => setIsOpen(true)}
                className="inline-flex mt-5 cursor-pointer text-r"
              >
                Find out
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="col-start-2">
    <div className="grid col-start-2 row-span-1">
      <div className="relative p-4 m-auto w-128">
				<div className="w-full h-full">
					<div className="flex flex-col justify-between h-full">
            <h2 className="text-lg font-bold align-text-bottom head4 xl:font-extrabold xl:text-2xl md:text-lg">
              How Soon Can We Start?</h2>
          </div>
          <p className="pb-6 text-lg leading-relaxed text-l3">
            Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod
            sunt. Esse qui aliquip adipisicing ea officia Lorem enim cupidatat
            Lorem amet tempor sint consequat.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.225, ease: "easeIn" }}
            className=""><button onClick={executeScroll} className="relative inline-flex items-center justify-center m-1 mt-6 text-center cursor-pointer lg:text-lg lg:px-2 lg:py-3 btn bg-r border-l1 hover:bg-r text-l1">Schedule your free estimate</button></motion.button>
        </div>
        </div>
      </div>
    </div>
</div>
    
<div className="container items-center mx-auto mb-16">
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 shadow-lg gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-4 bg-d7 text-l1 rounded-2xl">
      <div className="max-w-lg mx-auto text-center lg:mx-0">









    </div>
    </div>
  </div>
  </div>
</section>




  );
}

export default GettingStarted;