import React from "react";
import { motion } from "framer-motion";
import { Bbig, Cfa, Ch, Evps, OG, RL, TRH, TCG, USPS } from "./partnerimages";
import { Link } from "react-router-dom";
import {RiCompasses2Line, Ri24HoursLine, RiCheckDoubleLine} from "react-icons/ri";


const ServiceCards = () => {
  return (
    <>
      <div className="flex pt-32 overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
  <section className="relative z-1 max-w-[85rem] px-4 py-24 mx-auto">
		<div className="container px-5 py-12 mx-auto rounded-2xl md:mt-[40vh]">


        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          <Link to="/new-roof">
          <div className="relative w-2/4 p-0 m-auto cursor-pointer lg:p-4 shadow-nimble lg:w-64 bg-d7 rounded-2xl group hover:bg-d6">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between lg:h-full">
                <RiCompasses2Line className="iMain" />
                <h1 className="h2 lg:h1 group-hover:scale-110">Build</h1>
                <p className="py-2 text-base font-thin lg: lg:px-6 text-l1">
                We work with builders & contractors.
                </p>
              </div>
            </div>
          </div>
          </Link>
          <Link to="/repair">
          <div className="relative w-2/4 p-0 m-auto cursor-pointer lg:p-4 shadow-nimble lg:w-64 bg-d7 rounded-2xl group hover:bg-d6">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between lg:h-full">
                <Ri24HoursLine className="iMain" />
                <h1 className="h2 lg:h1 group-hover:scale-110">Repair</h1>
                <p className="py-2 text-base font-thin lg: lg:px-6 text-l1">
                For leaks, cracks, emergency repairs & more.
                </p>
              </div>
            </div>
          </div>
          </Link>
          <Link to="/replacement">
          <div className="relative w-2/4 p-0 m-auto cursor-pointer lg:p-4 shadow-nimble lg:w-64 bg-d7 rounded-2xl group hover:bg-d6">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between lg:h-full">
                <RiCheckDoubleLine className="iMain" />
                <h1 className="h2 lg:h1 group-hover:scale-110">Replace</h1>
                <p className="py-2 text-base font-thin lg: lg:px-6 text-l1">
                We'll help you find the right solution.
                </p>
              </div>
            </div>
          </div>
          </Link>
        </div>

    </div>
    </section>
    </>
  );
};

export default ServiceCards;

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-64"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="flex items-center justify-center max-w-xs md:w-36 md:h-36 saturate-100 opacity-70"
    >
      <Icon className="" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={Bbig} />
    <LogoItem Icon={TRH} />
    <LogoItem Icon={Ch} />
    <LogoItem Icon={USPS} />
    <LogoItem Icon={Cfa} />
    <LogoItem Icon={RL} />
    <LogoItem Icon={OG} />
    <LogoItem Icon={TRH} />
    <LogoItem Icon={TCG} />
    <LogoItem Icon={Evps} />
  </>
);
