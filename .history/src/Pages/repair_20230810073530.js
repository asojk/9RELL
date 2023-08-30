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

const Repair = () => (

  <><section className='container w-full px-4 pt-64 mb-16 lg:w-3/4'>

    <div className='flex flex-wrap justify-center rounded-xl'>


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


    </div>

  </section><div className="relative page-container">

      <Helmet title="GRELL | Flat Roof Repair" meta={[
        { name: 'description', content: 'As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.' },
        { name: 'keywords', content: 'roofing, construction, reapir, flat, flat-roof, roof repair' },
      ]} />



      <SplitContentImage />
      <FootSection />




      <div className="replace-replace">
        <div className="replace-heading">
          <span className="replace-heading">Flat Roof Repair</span>
        </div>
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
    </div></>
);

export default Repair;
