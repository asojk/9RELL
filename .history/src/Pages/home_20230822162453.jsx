import React, {useRef} from 'react';
import {Helmet} from 'react-helmet';
import {Parallax} from 'react-scroll-parallax';
import { gsap } from "gsap";

import Hero from '../Components/main/Hero.jsx';
import QuickStart from '../Components/main/quickstart.jsx';
import Testis from '../Components/main/testis.jsx';
import Contact from '../Components/main/Contact.jsx';
import Clients from '../Components/main/Clients.jsx';

gsap.registerPlugin(ScrollTrigger);

function Home () {
  const contactRef = useRef(null);
  const executeScroll = () => {contactRef.current.scrollIntoView();};

  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".scroll-container"
  });
  
  gsap.to("Hero", {
    scrollTrigger: ".Hero", 
    duration: 2, 
    rotation: 360
  });
  
  gsap.to("QuickStart", {
    scrollTrigger: {
      trigger: ".QuickStart",
      toggleActions: "restart pause reverse pause"
    }, 
    duration: 1, 
    backgroundColor: "#FFA500", 
    ease: "none"
  });
  
  gsap.to("Testis", {
    scrollTrigger: ".Testis", 
    scale: 2, 
    repeat: -1, 
    yoyo: true, 
    ease: "power2"
  });

  return (

    <><Helmet title="GRELL ROOFING | Home" meta={[{ name: 'description', content: 'Home page for the website.' }, { name: 'keywords', content: 'roofing, construction, home' },]} /><video className="hidden bg-vid md:block" autoPlay={true} muted loop={false}>
      <source src="https://grell.s3.us-east-2.amazonaws.com/Smid1.mp4"
        type="video/mp4" loading="lazy" />Your browser does not support the video tag.</video><div className="scroll-container">

        <Hero className="Hero panel" />
        <Clients />
        <Parallax translateX={[0, 0]}>
          <QuickStart className="QuickStart panel" executeScroll={executeScroll} /></Parallax>
        <Parallax translateX={[0, 0]}>
          <Testis /></Parallax>
        <div ref={contactRef} className="flex justify-center pt-8 pb-8 text-l1">
          <Parallax translateX={[0, 0]}>
            <Contact /></Parallax>    </div></div></>

);};
export default Home;