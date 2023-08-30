import React, {useRef} from 'react';
import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';

import Testis from '../Components/main/testis.jsx';
import QuickStart from '../Components/main/quickstart.jsx';

import {Parallax} from 'react-scroll-parallax';
import ServiceCards from '../Components/main/ServiceCards.jsx';
import Contact from '../Components/main/Contact.jsx';
import HoverTabs from '../Layout/HoverTabs.jsx';

/**
 * Home component renders a landing page for a roofing company.
 * It includes a video background, information about services,
 * customer testimonials, and a contact form.
 */
function Home() {
  const contactRef = useRef(null);

  /**
   * Scrolls the page to the contact section.
   */
  const executeScroll = () => {
    contactRef.current.scrollIntoView();
  };

  return (
    
    <div className="video class">

      <video className="hidden bg-vid md:block" autoPlay muted>
        <source
          src="https://grell.s3.us-east-2.amazonaws.com/Edits/AML_Simple.mp4"
          type="video/mp4"
          loading="lazy"
        />
        Your browser does not support the video tag.
      </video>

      <Helmet
        title="GRELL ROOFING | Home"
        meta={[
          { name: 'description', content: 'Home page for the website.' },
          { name: 'keywords', content: 'roofing, construction, home' },
        ]}
      />


        <motion.div variants={content} animate="animate" initial="initial">
          <motion.div variants={SecMotion}>
            <ServiceCards />
            <HoverTabs />
          </motion.div>
          <motion.div variants={SecMotion}>
            <Parallax translateX={[0, 0]}>
              <QuickStart executeScroll={executeScroll} />
            </Parallax>
          </motion.div>
          <motion.div variants={SecMotion}>
            <Parallax translateX={[0, 0]}>
              <Testis />
            </Parallax>
          </motion.div>
          <motion.div variants={SecMotion}>
            <Parallax translateX={[0, 0]}>
              <div ref={contactRef} className="flex justify-center pt-8 pb-8 text-l1">
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
			duration: 6,
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