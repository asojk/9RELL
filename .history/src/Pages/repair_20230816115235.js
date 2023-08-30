import React, {useRef} from 'react';
import { Helmet } from "react-helmet";
import RepairFaq from "../Layout/repairFaq";

const RepairServices = ({RepairServices}) => (
    <div className="w-full px-2 sm:w-1/2">
    <div className="flex items-center h-full">
      <div className="flex items-center w-full">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} className="flex-shrink-0 w-4 h-4 mr-3 text-yw" viewBox="0 0 24 24">
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

function Repair() {
  const EmergencyRef = useRef(null);
  const SignsRef = useRef(null);

  const scrollToEmergency = () => {
  EmergencyRef.current.scrollIntoView({behavior: 'smooth'});
  };
  const scrollToSigns = () => {
  SignsRef.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
  <><Helmet title="GRELL | Flat Roof Repair" meta={[
        {name: "description", content:"As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.",},
        {name: "keywords", content:"roofing, construction, reapir, flat, flat-roof, roof repair",},]}/>


<section className="pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg)] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r"></div>
    <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div className="max-w-xl text-center sm:text-left">
        <span className="title-head">licensed, bonded, insured</span>
        <h1 class="h1">Flat Roof Repair</h1>
        <p className="max-w-lg mt-4 sm:text-xl/relaxed text-l3">A 35-year reputation for high-quality, affordable repairs for buildings of all sizes. <br></br><br></br>We will work with your insurance company to make sure the process goes as smoothly as possible.</p>
        <h3 className="pt-8 lg:pt-24 head">Our Repair Services</h3>
        <div className="flex flex-wrap pb-4">
          <RepairServices RepairServices="Leaks & Holes/Punctures" />
          <RepairServices RepairServices="Metal & Modified Bitumen" />
          <RepairServices RepairServices="TPO, EPDM & PVC" />
          <RepairServices RepairServices="Built-Up & Ballasted" />
          <RepairServices RepairServices="Vent & Insulation " />
          <RepairServices RepairServices="Membrane, Deck, & Sealant" />
          <RepairServices RepairServices="Penetration & Perimeter" />
          <RepairServices RepairServices="Seal-In Seams & Penetrations" />
        </div>
        <div className="flex flex-wrap gap-4 mt-8 text-center">
          <a onClick={scrollToEmergency} className="block w-full px-12 py-3 text-sm font-medium rounded shadow-sm cursor-pointer shadow-rd3 text-l1 bg-r hover:bg-rd2 focus:outline-none focus:ring active:bg-r sm:w-auto">Emergency?</a>
          <a onClick={scrollToSigns} className="block w-full px-12 py-3 text-sm font-medium rounded shadow-sm cursor-pointer shadow-d9 bg-d7 text-r hover:text-rd2 focus:outline-none focus:ring active:text-r sm:w-auto">Signs of Damage</a>
      </div>
    </div>
  </div>
</section>





  <section ref={SignsRef} className="relative z-1 max-w-[85rem] px-4 py-24 mx-auto">
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






  <section ref={EmergencyRef} className="text-l1 body-font">
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




  <RepairFaq />
  </>
  );
}

export default Repair;
