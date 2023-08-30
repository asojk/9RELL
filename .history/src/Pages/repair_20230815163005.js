import React from "react";
import { Helmet } from "react-helmet";
import RepairFaq from "../Layout/repairFaq";

const RepairServices = ({RepairCheck}) => (
    <div className="w-full px-2 sm:w-1/2">
    <div className="flex items-center h-full">
      <div className="flex items-center w-full p-4">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-r" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
      <span className="font-medium title-font">
        {RepairCheck}</span>
      </div>
    </div>
  </div>
  );

  const RepairSigns = ({RepairSigns}) => (
    <div className="w-full p-2 sm:w-1/2">
    <div className="flex items-center">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-r" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
      <span className="font-medium title-font">{RepairSigns}</span>
    </div>
  </div>
  );

const Repair = () => (
  <><Helmet title="GRELL | Flat Roof Repair" meta={[
        {name: "description", content:"As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.",},
        {name: "keywords", content:"roofing, construction, reapir, flat, flat-roof, roof repair",},]}/>

<section>
  <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div class="flex flex-col w-full mb-12 text-center pt-46">
      <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
        Long headline
      </h1>
      <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
    </div>
  </div>
</section>


<section className="max-w-[85rem] px-4 py-4 mx-auto">
<div className="relative max-w-2xl mx-auto mt-36 lg:mt-56 lg:max-w-6xl rounded-2xl z-1">
<div className="absolute bg-black opacity-25 inset-10 rounded-2xl">
  <img className="object-cover object-center w-full rounded-2xl" alt="hero" src="https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg" />
  </div>
  <div className="relative grid grid-cols-[1fr,2fr] py-12 z-1 rounded-2xl">
    <div className="pl-8 row">
    <span className="hidden head lg:block">licensed, bonded, insured</span>
      <h1 className="h1">Flat Roof Repair</h1>
    </div>
      <p className="px-4 py-4 ml-4 text-base text-center rounded-2xl">Over the past 30 years, Grell built a reputation throughout the Midwest for quality, affordable flat roof repairs for buildings of all sizes. <br></br><br></br>We will work with your insurance company to make sure the process goes as smoothly as possible.</p>
      </div>
    </div>
  </section>


  <section className="relative z-1 max-w-[85rem] px-4 py-4 mx-auto">
    <div className="container px-5 py-8 mx-auto rounded-2xl">
      <div className="mb-20 text-center">
        <header className="header">
          <h2 className="head">Signs that it's time for a repair</h2>
        </header>
          <p className="pt-4 mx-auto text-base leading-relaxed lg:w-3/4">
          Whether from faulty installation, storm damage, or simply an outdated roofing system, there are a variety of reasons you may need a flat roof repair. Signs of damage are not always obvious, either, which is why it is important to get a professional roof inspection to uncover even the smallest of damage on your roof. Some common signs you may need a flat roof repair include:</p>
      </div>
      <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
        <RepairSigns RepairSigns="Pooling water on the roof"/>
        <RepairSigns RepairSigns="Water stains on the ceiling or around windows"/>
        <RepairSigns RepairSigns="Flashing separation"/>
        <RepairSigns RepairSigns="Cracks in coating"/>
        <RepairSigns RepairSigns="Rips, cracks or bubbles in the roof membrane"/>
        <RepairSigns RepairSigns="Loose or missing fasteners, flashing or caulking"/>
      </div>
    </div>
  </section>


  <section className="text-l1 max-w-[85rem] px-4 py-4 mx-auto">
    <div className="relative max-w-2xl mx-auto lg:max-w-6xl z-1 rounded-2xl">
      <div className="grid grid-cols-[2fr,4fr] py-6 border-y-[1px] border-b2">
        <h3 className="pl-8 lg:pl-12 head">Our Repair Services</h3>
        <p className="px-2 pt-1 text-center lg:px-0 text-l1">We ensure proper draining and flashings throughout all of our repairs.</p>
        </div>
        <div className="flex flex-wrap px-12 pt-4 pb-8">
          <RepairServices RepairCheck="Leaks & Holes/Punctures" />
          <RepairServices RepairCheck="Duro-Last, Metal & Modified Bitumen" />
          <RepairServices RepairCheck="TPO, EPDM & PVC" />
          <RepairServices RepairCheck="Built-Up & Ballasted" />
          <RepairServices RepairCheck="Coating, Deck, Vent & Insulation " />
          <RepairServices RepairCheck="Membrane, Sealant & Tape" />
          <RepairServices RepairCheck="Penetration & Perimeter" />
          <RepairServices RepairCheck="Seal-In Seams & Penetrations" />
        </div>
      </div>
    </section>



    <section className="text-l1 body-font">
  <div className="container px-5 py-24 mx-auto">
      <div className="mb-20 text-center">
      <header className="header">
            <h2 className="heading">Emergency flat roof repairs</h2>
          </header>

            <p className="pt-4 mx-auto text-base leading-relaxed lg:w-3/4">
            At Grell, we always strive to serve our customers as quickly and efficiently as possible. We understand, though, that some issues can not wait even a day. That is why we offer a 24/7 emergency flat roof repair services for situations that are serious safety hazards. If you need immediate assistance, call today.
            </p>
      </div>
    </div>
  </section>




  <RepairFaq />
  </>
);

export default Repair;
