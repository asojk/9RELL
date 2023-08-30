import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Contact from '../Components/hoc/contact.js';
import Testis from '../Components/main/testis.jsx';
import Services from '../Components/main/services.jsx';
import QuickStart from '../Components/main/quickstart.jsx';

import { Parallax } from 'react-scroll-parallax';


const outVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};

function Home() {
  const contactRef = useRef(null);
  const executeScroll = () => contactRef.current.scrollIntoView();

  

  return (
    
    <div className='relative px-4 pt-28 md:px-10 md:pt-36'>
      <Helmet
        title='GRELL ROOFING | Home'
        meta={[
          { name: 'description', content: 'Home page for the website.' },
          { name: 'keywords', content: 'roofing, construction, home' },
        ]}
      />

      <motion.div variants={content} animate='animate' initial='initial'>

      <motion.div variants={SecMotion}>
      <Parallax translateY={[-20, 20]}>
      <Services />
      </Parallax>
        </motion.div>

        <motion.div variants={SecMotion}>
        <Parallax translateY={[-20, 20]}>
          <QuickStart executeScroll={executeScroll} />
          </Parallax>
        </motion.div>
        <motion.div variants={SecMotion}>
          <Parallax translateY={[-20, 20]}>
          <Testis />
          </Parallax>
        </motion.div>
        <motion.div variants={SecMotion}>
          <Parallax translateY={[-20, 20]}>
          <div ref={contactRef} className='flex justify-center pt-8 pb-8 text-l1'>
            <Contact />
          </div>
          </Parallax>
        </motion.div>
      </motion.div>

    </div>
  );
}

export default Home;

const content = {
	animate: {
		transition: {staggerChildren: 0.4},
	},
};

const SecMotion = {
	initial: {y: -10, scale: 0.7, opacity: 0},
	animate: {
		y: 0,
		scale: 1,
		opacity: 1,
		transition: {
			duration: 2,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
		staggerChildren: 0.8,
	},
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};