import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <>
    <div className="absolute left-0 z-10 pl-12 pt-36">
      <div className="w-20 h-16 bg-d7"></div>
    </div>
      <div className="flex pt-32 overflow-hidden z-1">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
    </>
  );
};

export default Clients;

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
		<a className='flex items-center justify-center max-w-xs md:w-36 md:h-36 saturate-100 opacity-70'>
			<img src={Icon} className='' loading='lazy' alt='logo' />
		</a>
	);
};

const LogoItemsTop = () => (
	<>
		<LogoItem Icon={'https://grell.s3.us-east-2.amazonaws.com/partners/bbig.png'} />
		<LogoItem Icon={'https://grell.s3.us-east-2.amazonaws.com/partners/trh.png'} />
		<LogoItem Icon={'https://grell.s3.us-east-2.amazonaws.com/partners/ch.png'} />
		<LogoItem Icon={'https://grell.s3.us-east-2.amazonaws.com/partners/usps.png'} />
		<LogoItem Icon={'https://grell.s3.us-east-2.amazonaws.com/partners/cfa.png'} />
		<LogoItem Icon={'https://grell.s3.us-east-2.amazonaws.com/partners/rl.png'} />
		<LogoItem Icon={'https://grell.s3.us-east-2.amazonaws.com/partners/og.png'} />
		<LogoItem Icon={'https://grell.s3.us-east-2.amazonaws.com/partners/trh.png'} />
		<LogoItem Icon={'https://grell.s3.us-east-2.amazonaws.com/partners/tcg.png'} />
		<LogoItem Icon={'https://grell.s3.us-east-2.amazonaws.com/partners/evps.png'} />
	</>
);
