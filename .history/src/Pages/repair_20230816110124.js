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





<section className="pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg)] bg-cover bg-center bg-no-repeat">
<div className="absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r"></div>
<div
    className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
    <span className="title-head">licensed, bonded, insured</span>
    <h1 class="h1">
        Flat Roof Repair
      </h1>
      <p className="max-w-lg mt-4 sm:text-xl/relaxed text-l3">A 35-year reputation for high-quality, affordable repairs for buildings of all sizes. <br></br><br></br>We will work with your insurance company to make sure the process goes as smoothly as possible.</p>
    </div>
  </div>
</section>



<section
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"
  ></div>

  <div
    className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-rose-700">
          Forever Home.
        </strong>
      </h1>

      <p className="max-w-lg mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="flex flex-wrap gap-4 mt-8 text-center">
        <a
          href="#"
          className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
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
