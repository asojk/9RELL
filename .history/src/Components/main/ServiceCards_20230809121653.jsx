import React from "react";
import { motion } from "framer-motion";
import { Bbig, Cfa, Ch, Evps, OG, RL, TRH, TCG, USPS } from "./partnerimages";
import { VscNewFile } from "react-icons/vsc";
import { VscChecklist } from "react-icons/vsc";
import { VscNewFolder } from "react-icons/vsc";

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
          <div className="relative w-64 p-4 m-auto shadow-lg bg-d7 rounded-2xl">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between h-full">

                <VscNewFile className="iMain" />

                <p className="head">Build</p>
                <p className="px-6 py-2 text-xs font-thin text-l1">
                  Your package was delivered in 1 day and 4 hours by our postal
                  partner
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-64 p-4 m-auto shadow-lg bg-d7 rounded-2xl">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between h-full">
                <VscChecklist className="iMain" />
                <p className="head>Repair</p>
                <p className="px-6 py-2 text-xs font-thin text-l1">
                  Your package was delivered in 1 day and 4 hours by our postal
                  partner
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-64 p-4 m-auto shadow-lg bg-d7 rounded-2xl">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between h-full">
                <VscNewFolder className="iMain" />
                <p className="head">Replace</p>
                <p className="px-6 py-2 text-xs font-thin text-l1">
                  Your package was delivered in 1 day and 4 hours by our postal
                  partner
                </p>
              </div>
            </div>
          </div>
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
