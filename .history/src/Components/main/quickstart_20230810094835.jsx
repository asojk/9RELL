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
<div className="container items-center mx-auto mb-16">
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 shadow-lg gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-4 bg-d7 text-l1 rounded-2xl">
      <div className="max-w-lg mx-auto text-center lg:mx-0">

      <header className="header">
            <span className="head">Your Questions Answered</span>
            <h2 className="heading">Getting started</h2>
          </header>







    </div>
    </div>
  </div>
  </div>
</section>




  );
}

export default GettingStarted;