import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  return (
		<>
			<section className='relative z-1 max-w-[85rem] px-4 pb-12 lg:pb-24 -mt-8 mx-auto'>
				<div className='container px-5 mx-auto'>

						<span className='relative z-10 p-4 border head shadow-nimble border-b3 bg-d7 rounded-2xl'>Current & Former Clients</span>
						<div className='flex mt-4 overflow-hidden md:-mt-4'>
							<TranslateWrapper>
								<LogoItemsTop />
							</TranslateWrapper>
						</div>
					</div>

			</section>
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
      className="flex gap-32 md:gap-64"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
		<a className='flex items-center justify-center w-24 h-24 max-w-xs md:w-36 md:h-36 saturate-100 opacity-70'>
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
