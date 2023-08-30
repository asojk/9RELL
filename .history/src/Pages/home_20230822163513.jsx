import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Parallax } from 'react-scroll-parallax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '../Components/main/Hero.jsx';
import QuickStart from '../Components/main/quickstart.jsx';
import Testis from '../Components/main/testis.jsx';
import Contact from '../Components/main/Contact.jsx';
import Clients from '../Components/main/Clients.jsx';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const contactRef = useRef(null);
  const executeScroll = () => contactRef.current.scrollIntoView();

  useEffect(() => {
    let panels = gsap.utils.toArray(".panel");
    // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
    let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));
    
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
        pin: true, 
        pinSpacing: false 
      });
    });
    
    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
              snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
          return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
        },
        duration: 0.5
      }
    });
    
  }, []);

  return (

    <><Helmet title="GRELL ROOFING | Home" meta={[{ name: 'description', content: 'Home page for the website.' }, { name: 'keywords', content: 'roofing, construction, home' },]} /><video className="hidden bg-vid md:block" autoPlay={true} muted loop={false}>
      <source src="https://grell.s3.us-east-2.amazonaws.com/Smid1.mp4"
        type="video/mp4" loading="lazy" />Your browser does not support the video tag.</video><div className="scroll-container">
          <section class="panel red">
        <Hero /></section>
        <section class="panel orange">
        <Clients /></section>
        <section class="panel purple">
        <Parallax translateX={[0, 0]}>
          <QuickStart executeScroll={executeScroll} /></Parallax></section>
          <section class="panel green">
        <Parallax translateX={[0, 0]}>
          <Testis /></Parallax></section>
        <div ref={contactRef} className="flex justify-center pt-8 pb-8 text-l1">
          <Parallax translateX={[0, 0]}>
            <Contact /></Parallax>    </div></div></>

);};
export default Home;