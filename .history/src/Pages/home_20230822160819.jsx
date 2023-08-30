import * as React from "react";
import { motion, useTransform } from "framer-motion";

import {Helmet} from 'react-helmet';
import {Parallax} from 'react-scroll-parallax';

import Hero from '../Components/main/Hero.jsx';
import QuickStart from '../Components/main/quickstart.jsx';
import Testis from '../Components/main/testis.jsx';
import Contact from '../Components/main/Contact.jsx';
import Clients from '../Components/main/Clients.jsx';

function Home () {
  const contactRef = useRef(null);
  const executeScroll = () => {contactRef.current.scrollIntoView();};

  return (
    
    <motion.div variants={content} animate='animate' initial='initial'>
<Helmet title="GRELL ROOFING | Home" meta={[{ name: 'description', content: 'Home page for the website.' }, { name: 'keywords', content: 'roofing, construction, home' },]} />

  <video className="hidden bg-vid md:block" autoPlay={true} muted loop={false}>
    <source src="https://grell.s3.us-east-2.amazonaws.com/Smid1.mp4"
      type="video/mp4" loading="lazy" />Your browser does not support the video tag.</video>
      <motion.div style={{scaleY: scrollYProgress}}>
        <Hero /></motion.div>
        <motion.div variants={SecMotion}>
        <Clients /></motion.div>
      <motion.div variants={SecMotion}><Parallax translateX={[0, 0]}>
        <QuickStart executeScroll={executeScroll} /></Parallax></motion.div>
      <motion.div variants={SecMotion}><Parallax translateX={[0, 0]}>
        <Testis /></Parallax></motion.div>
      <div ref={contactRef} className="flex justify-center pt-8 pb-8 text-l1">
        <motion.div variants={SecMotion}><Parallax translateX={[0, 0]}>
        <Contact /></Parallax></motion.div></div></motion.div>
);};
export default Home;

const content = {animate: {transition: {staggerChildren: 0.8},},};
const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
const SecMotion = {initial: {y: -10, scale: 0.7, opacity: 0},
	animate: {y: 0,scale: 1,opacity: 1,transition: {duration: 1.3,delay: 1,},staggerChildren: 0.8,},
	exit: {opacity: 0,transition: {duration: 0.5,ease: [0.6, -0.05, 0.01, 0.99],},},};