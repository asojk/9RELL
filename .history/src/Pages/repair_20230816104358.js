import React from "react";
import { Helmet } from "react-helmet";
import RepairFaq from "../Layout/repairFaq";

const RepairServices = ({RepairServices}) => (
    <div className="w-full px-2 sm:w-1/2">
    <div className="flex items-center h-full">
      <div className="flex items-center w-full py-3">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} className="flex-shrink-0 w-6 h-6 mr-3 text-r" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
      <span className="text-l3">
        {RepairServices}</span>
      </div>
    </div>
  </div>
  );

  const RepairSigns = ({RepairSigns}) => (
    <div className="w-full p-2 sm:w-1/2">
    <div className="flex items-center">
      <div className="flex-shrink-0 mr-2 text-2xl text-r">»</div>

      <span className="text-l3">{RepairSigns}</span>
    </div>
  </div>
  );

const Repair = () => (
  <><Helmet title="GRELL | Flat Roof Repair" meta={[
        {name: "description", content:"As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.",},
        {name: "keywords", content:"roofing, construction, reapir, flat, flat-roof, roof repair",},]}/>

<section>
<div className="absolute bg-black opacity-25 inset-10 rounded-2xl">
  <img className="object-cover object-center w-1/2 rounded-2xl" alt="hero" src="https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg" />
  </div>
  <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div class="flex flex-col w-full mb-12 text-center mt-32 lg:mt-48">
    <span className="title-head">licensed, bonded, insured</span>
    <h1 class="h1">
        Flat Roof Repair
      </h1>
      <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-l3">A 35-year reputation for high-quality, affordable repairs for buildings of all sizes. <br></br><br></br>We will work with your insurance company to make sure the process goes as smoothly as possible.</p>
    </div>
  </div>
</section>




  <section className="text-l1 max-w-[85rem] px-4 py-4 mx-auto">
    <div className="relative max-w-2xl mx-auto lg:max-w-6xl z-1 rounded-2xl py-6 border-y-[1px] border-b2">
      

        <h3 className="pt-8 pl-8 lg:pl-12 head">Our Repair Services</h3>

        <div className="flex flex-wrap px-12 pt-8 pb-4">

          <RepairServices RepairServices="Leaks & Holes/Punctures" />
          <RepairServices RepairServices="Duro-Last, Metal & Modified Bitumen" />
          <RepairServices RepairServices="TPO, EPDM & PVC" />
          <RepairServices RepairServices="Built-Up & Ballasted" />
          <RepairServices RepairServices="Coating, Deck, Vent & Insulation " />
          <RepairServices RepairServices="Membrane, Sealant & Tape" />
          <RepairServices RepairServices="Penetration & Perimeter" />
          <RepairServices RepairServices="Seal-In Seams & Penetrations" />
        </div>
        <p className="px-8 pt-4 pb-8 lg:px-0 text-l3">We ensure proper draining and flashings throughout all of our repairs.</p>
      </div>
    </section>



    <section className="text-l1 body-font">
  <div className="container px-5 py-24 mx-auto">
      <div className="mb-20 text-center">
      <header className="header">

        <h2 className="head">24/7 Emergency Flat Roof Repair Services</h2>
        <h1 class="h2">Emergency Repairs</h1>
          </header>

            <p className="pt-4 mx-auto text-base leading-relaxed lg:w-3/4">
            At Grell, we always strive to serve our customers as quickly and efficiently as possible. We understand, though, that some issues can not wait even a day. That is why we offer a 24/7 emergency flat roof repair services for situations that are serious safety hazards. If you need immediate assistance, call today.
            </p>
      </div>
    </div>
  </section>


  <section className="relative z-1 max-w-[85rem] px-4 py-4 mx-auto">
    <div className="container px-5 py-8 mx-auto rounded-2xl">
      <div className="mb-8 text-center">
        <header className="header">
        <span className="head">Signs that it's time for a repair</span>
        <h1 class="h2">Notice a leak?</h1>
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




  <RepairFaq />
  </>
);

export default Repair;
