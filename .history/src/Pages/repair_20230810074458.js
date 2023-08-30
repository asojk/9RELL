import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion"
import SplitContentGridCTA from '../Layout/SplitContentGridCTA';
import TemplateOne from '../Layout/TemplateOne';
import SplitContentGrid from '../Layout/SplitContentGrid';
import SplitContentImage from '../Layout/SplitContentImage';
import TwobyOne from '../Layout/TwobyOne';
import OnebyTwo from '../Layout/OnebyTwo';
import OnebyOne from '../Layout/OnebyOne';
import OnebyOnebyOne from '../Layout/OnebyOnebyOne';
import OnebyOnebyOnebyOne from '../Layout/OnebyOnebyOnebyOne';
import DescIconCard from '../Layout/DescIconCard';
import ContactSection from '../Layout/ContactSection';
import ContactSection2 from '../Layout/ContactSection2';
import InfoCard from '../Layout/InfoCard';
import FootSection from '../Layout/FootSection';
import TailContent from '../Layout/TailContent';
import { DrawerWithNavigation } from '../Layout/Drawer99';

const Repair = () => (

  <>      <Helmet title="GRELL | Flat Roof Repair" meta={[
        { name: 'description', content: 'As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.' },
        { name: 'keywords', content: 'roofing, construction, reapir, flat, flat-roof, roof repair' },
      ]} />
      
  <section className='container w-full px-4 pt-64 mb-16 lg:w-3/4'>

    
    <div className='flex flex-wrap justify-center rounded-xl'>





      <section>
  <div
    className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <div className="lg:py-24">
      <header className="header">
        <span className="head">Services</span>
        <h2 className="heading">Flat Roof Repair</h2>
      </header>

        <p className="px-12 py-12 text-lg text-l1">
        When you are having issues with your commercial roof, let Grell Roofing
        take care of your flat roof repairs. Over the past 30 years, we have
        built a reputation throughout the Midwest for quality, affordable flat
        roof repairs for buildings of all sizes. We are licensed, bonded,
        insured, and stand behind our work. We will also work with your
        insurance company to make sure the process goes as smoothly as possible.
        Contact us today for flat roof repairs available throughout Iowa and the
        surrounding states.
        </p>

        <a
          href="#"
          className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>
      <SplitContentImage />
      <p className="replace-text">
          When you are having issues with your commercial roof, let Grell Roofing
          take care of your flat roof repairs. Over the past 30 years, we have
          built a reputation throughout the Midwest for quality, affordable flat
          roof repairs for buildings of all sizes. We are licensed, bonded,
          insured, and stand behind our work. We will also work with your
          insurance company to make sure the process goes as smoothly as possible.
          Contact us today for flat roof repairs available throughout Iowa and the
          surrounding states.
        </p>
        <span className="replace-head">Our Commercial Roof Repair Services</span>
        <p className="replace-text">
          As a midwestern company, we fully understand how harsh winters
          and humid summers can take a toll on even the sturdiest of roofs. That is
          why we offer comprehensive flat roof repair services to cover just about
          any situation you may face. These include:
          <br />
          <br />
          <ul>
            <li>Roof Leaks</li>
            <li>Holes/Punctures in Roof</li>
            <li>Duro-Last Repairs</li>
            <li>EPDM Repairs</li>
            <li>Metal Roof Repairs</li>
            <li>Ballasted Roof Repairs</li>
            <li>TPO Repairs</li>
            <li>Seal in Seams &amp; Penetrations</li>
            <li>Ensure Proper Flashings</li>
            <li>Ensure Roof is Draining Properly</li>
            <li>Wind &amp; Hail Damage Repairs</li>
          </ul>
          <br />
          If you are experiencing a flat roofing issue not listed above, still
          contact us today. We are confident that we can provide the flat roof
          repairs you need.
        </p>
        <span className="replace-head">signs that it is time for a repair</span>
        <p className="replace-text">
          Whether from faulty installation, storm damage, or simply an outdated
          roofing system, there are a variety of reasons you may need a flat roof
          repair. Signs of damage are not always obvious, either, which is why
          it is important to get a professional roof inspection to uncover even the
          smallest of damage on your roof. Some common signs you may need a flat
          roof repair include:
          <ul>
            <li>Pooling water</li>
            <li>Flashing separation</li>
            <li>Membrane rips</li>
            <li>Coating cracks</li>
            <li>Loose or missing fasteners</li>
            <li>Roof or ceiling leaks</li>
          </ul>
          <br />
          If you are experiencing any of the issues above or even another type of
          problem with your flat roof, contact us today for a free inspection.
        </p>
        <span className="replace-head">Emergency Flat Roof Repairs</span>
        <p className="replace-text">
          At Grell, we always strive to serve our customers as quickly and
          efficiently as possible. We understand, though, that some issues can not
          wait even a day. That is why we offer a 24/7 emergency flat roof repair
          services for situations that are serious safety hazards. If you need
          immediate assistance, call today.
        </p>
      </div>
    <FootSection />
  </section>
  </>
)

export default Repair
