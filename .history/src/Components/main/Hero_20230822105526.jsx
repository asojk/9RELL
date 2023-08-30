import React from "react";
import { motion } from "framer-motion";
import { Bbig, Cfa, Ch, Evps, OG, RL, TRH, TCG, USPS } from "./partnerimages";
import HoverDevCards from "./HoverDevCards.jsx";


const Hero = () => {
  return (
    <>
  <section className="relative z-1 max-w-[85rem] px-2 pb-12 mx-auto md:mt-[40vh]">
		<div className="container px-2 mx-auto lg:px-12 lg:py-12">
      <HoverDevCards />
    </div>
    </section>
    </>
  );
};

export default Hero;

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
