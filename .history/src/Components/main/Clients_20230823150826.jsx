import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  return (
		<>

			<div className='flex pt-24 overflow-hidden z-1'>
				<div className='z-10 w-64 pl-12 h-36 rounded-2xl bg-d7'>
					<header className='header'>
						<span className='head'>Signs that it's time for a repair</span>
						<h1 class='h2'>Notice a leak?</h1>
					</header>
				</div>
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
