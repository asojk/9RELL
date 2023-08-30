import React from "react";
import { motion } from "framer-motion";
import { Bbig, Cfa, Ch, Evps, OG, RL, TRH, TCG, USPS } from "./partnerimages";
import {BsTools, BsShieldCheck, BsBuildingGear} from 'react-icons/bs';
import {VscNewFile, VscArrowSwap} from 'react-icons/vsc';
import { Link } from "react-router-dom";

const ServiceCards = () => {
  return (
    <>
      <div className="flex pt-32 overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="items-center container mx-auto md:mt-[40vh] mb-16">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">

          <Link to="/new-roof">
          <div className="relative w-32 p-2 m-auto shadow-lg cursor-pointer md:p-4 md:w-64 bg-d7 rounded-2xl group group-hover:bg-d5">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between h-full">

                <VscNewFile className="iMain peer" />

                <p className="h4 peer">Build</p>
                <p className="px-6 py-2 text-base font-thin text-l1">
                We work with builders & contractors.
                </p>
              </div>
            </div>
          </div>
          </Link>
          <Link to="/repair">
          <div className="relative w-64 p-4 m-auto shadow-lg cursor-pointer bg-d7 rounded-2xl group hover:bg-d5">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between h-full">
                <BsTools className="iMain" />
                <p className="head group-hover:text-xl">Repair</p>
                <p className="px-6 py-2 text-base font-thin text-l1">
                For leaks, cracks, emergency repairs & more.
                </p>
              </div>
            </div>
          </div>
          </Link>
          <Link to="/replacement">
          <div className="relative w-64 p-4 m-auto shadow-lg cursor-pointer bg-d7 rounded-2xl group hover:bg-d5">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between h-full">
                <VscArrowSwap className="iMain" />
                <p className="head group-hover:text-xl">Replace</p>
                <p className="px-6 py-2 text-base font-thin text-l1">
                We'll help you find the right solution.
                </p>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
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
