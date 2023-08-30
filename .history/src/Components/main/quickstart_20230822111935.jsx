import React, {useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="cursor-pointer">
          <motion.div initial={{ scale: 0, rotate: "12.5deg" }} animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }} onClick={(e) => e.stopPropagation()} className="relative p-0 overflow-hidden">
            <div className="relative z-10 h-48 lg:h-80">
              <iframe src="https://api.mapbox.com/styles/v1/grell/clkk0o55v00vq01qf1ze302fe.html?title=false&access_token=pk.eyJ1IjoiZ3JlbGwiLCJhIjoiY2xraXpib3NkMDBibTNybXZnbml5eGMwMyJ9.y69nZBItX012aWE7GWBfyA&zoomwheel=false#4.21/39.56/-94.35" title="GRELL-copy-copy" width="100%" height="100%" loading="lazy" style={{ }}></iframe>
            </div>
          </motion.div>
        </motion.div>
)}</AnimatePresence>);};

function GettingStarted({ executeScroll }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <section className="relative z-1 max-w-[85rem] px-4 py-12 mx-auto">
    <div className="container px-5 mx-auto lg:py-12 rounded-2xl">
      <div className="mb-8 border shadow-nimble border-b3 bg-d7 rounded-2xl ">
        <header className="header">
          <span className="title-head">How can we help you?</span>
          <h1 class="h2">Getting started</h1>
        </header>
        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-8">

    <div className="relative p-4 m-auto w-146">



      <div className="w-full h-full ml-8">
        <div className="flex flex-col justify-between h-full">
          <h3 className="text-lg font-bold align-text-bottom text-l1">
            Does Grell Service my Area?
          </h3>
        </div>
          <p className="px-2 py-2 text-sm text-l3">
            Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod sunt. Esse qui aliquip adipisicing.</p>
          <div className="relative">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.225, ease: "easeIn" }} className="p-2 text-center">
              <a onClick={() => setIsOpen(true)}
                className="inline-flex mt-2 font-black cursor-pointer text-md text-r">Find out
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth={1} className="w-6 h-6 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
            </motion.button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>


      <div className="relative p-4 pb-8 m-auto ml-8 lg:ml-0 w-146">
				<div className="w-full h-full">
					<div className="flex flex-col justify-between h-full">
          <h3 className="text-lg font-bold align-text-bottom text-l1">
              How Soon Can We Start?</h3>
          </div>
          <p className="px-2 py-2 text-sm text-l3">
            Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod sunt. Esse qui aliquip adipisicing ea officia Lorem enim cupidatat Lorem amet tempor sint consequat.</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.225, ease: "easeIn" }} className="m-2">
            <button onClick={executeScroll} className="block w-full px-8 py-3 font-black rounded cursor-pointer text-md shadow-nimble shadow-rd3 text-l1 bg-r hover:bg-rd1 focus:outline-none focus:ring active:bg-r sm:w-auto">Schedule your free estimate</button>
            </motion.button>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  );
}

export default GettingStarted;