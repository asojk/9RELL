import React, {useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer">
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative p-0 overflow-hidden">
            <div className="relative z-10 h-48 lg:h-80">
              <iframe
              src="https://api.mapbox.com/styles/v1/grell/clkk0o55v00vq01qf1ze302fe.html?title=false&access_token=pk.eyJ1IjoiZ3JlbGwiLCJhIjoiY2xraXpib3NkMDBibTNybXZnbml5eGMwMyJ9.y69nZBItX012aWE7GWBfyA&zoomwheel=false#4.21/39.56/-94.35" title="GRELL-copy-copy" width="100%" height="100%" loading="lazy" style={{ }}></iframe>
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
<section className="max-w-[85rem] lg:px-8 mx-auto">
<div className="max-w-2xl mx-auto lg:max-w-6xl">
<div className="grid grid-cols-2 grid-rows-2 gap-4 px-4 py-12 lg:bg-d7 rounded-2xl">
        <div className="row-span-2">
          <header className="header">
            <span className="head">Your Questions Answered</span>
            <h1 className="h1">Getting started</h1>
          </header>
        </div>
    <div >
    <div className="relative p-4 m-auto w-146">
      <div className="w-full h-full">
        <div className="flex flex-col justify-between h-full">
          <h3 className="mb-2 align-text-bottom h3">
            Does Grell Service my Area?
          </h3>
        </div>
        <div className="">
          <p className="pb-2 text-base leading-relaxed text-l3">
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
                className="inline-flex mt-2 text-lg font-black cursor-pointer text-r"
              >
                Find out
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  className="w-6 h-6 ml-2"
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
            <h2 className="text-lg font-bold align-text-bottom head4">
              How Soon Can We Start?</h2>
          </div>
          <p className="pb-4 text-base leading-relaxed text-l3">
            Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod
            sunt. Esse qui aliquip adipisicing ea officia Lorem enim cupidatat
            Lorem amet tempor sint consequat.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.225, ease: "easeIn" }}
            className=""><button onClick={executeScroll} className="relative inline-flex items-center justify-center m-1 mt-2 text-center cursor-pointer lg:text-lg lg:px-2 lg:py-3 btn bg-r border-l1 hover:bg-r text-l1">Schedule your free estimate</button></motion.button>
        </div>
        </div>
      </div>
    </div>
</div>
    

  </div>
</section>




  );
}

export default GettingStarted;