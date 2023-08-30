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

const Repair = () => (
  <><Helmet title="GRELL | Flat Roof Repair" meta={[
        {name: "description", content:"As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.",},
        {name: "keywords", content:"roofing, construction, reapir, flat, flat-roof, roof repair",},]}/>


<section className="text-l1 body-font max-w-[85rem] px-4 py-4 mx-auto">
<img alt="Damaged Roof" src="https://grell.s3.us-east-2.amazonaws.com/pics/repair2.jpg" className="hidden content-image lg:block" />
<div className="relative max-w-2xl mx-auto mt-36 lg:mt-56 lg:max-w-6xl rounded-2xl z-1">
  <div className="relative grid grid-cols-[1fr,2fr] py-12 z-1 rounded-2xl">
    <div className="pl-8 row">
    <span className="hidden head lg:block">licensed, bonded, insured</span>
      <h1 className="h1">Flat Roof Repair</h1>
      
    </div>
      <p className="px-4 py-4 ml-4 text-base text-center rounded-2xl lg:bg-d7">Over the past 30 years, Grell built a reputation throughout the Midwest for quality, affordable flat roof repairs for buildings of all sizes. <br></br><br></br>We will work with your insurance company to make sure the process goes as smoothly as possible.</p>
      </div>

    </div>

  </section>
  <section className="text-l1 body-font max-w-[85rem] px-4 py-4 mx-auto">
    <div className="relative max-w-2xl mx-auto divide-y lg:max-w-6xl z-1 lg:bg-d7 rounded-2xl divide-b2">
      <div className="grid grid-cols-[2fr,4fr] pt-8">
        <h3 className="pb-4 pl-8 lg:pl-12 h3">Our Repair Services</h3>
        <p className="px-2 pt-2 text-center lg:px-0 text-yw">We ensure proper draining and flashings throughout all of our repairs.</p>
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


    <section className="text-l1 body-font max-w-[85rem] px-4 py-4 mx-auto">
    <div className="relative max-w-2xl mx-auto divide-y lg:max-w-6xl z-1 lg:bg-d7 rounded-2xl divide-b2">
      <div className="grid grid-cols-[2fr,4fr] pt-8">
        <h3 className="pb-4 pl-8 lg:pl-12 h3">Signs that it's time for a repair</h3>
        <p className="p-4 pt-2">Whether from faulty installation, storm damage, or simply an outdated roofing system, there are a variety of reasons you may need a flat roof repair. Signs of damage are not always obvious, either, which is why it is important to get a professional roof inspection to uncover even the smallest of damage on your roof. Some common signs you may need a flat roof repair include:</p>
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
            <h2 className="heading">Signs that it's time for a repair</h2>
          </header>

            <p className="pt-4 mx-auto text-base leading-relaxed lg:w-3/4">
            Whether from faulty installation, storm damage, or simply an outdated roofing system, there are a variety of reasons you may need a flat roof repair. Signs of damage are not always obvious, either, which is why it is important to get a professional roof inspection to uncover even the smallest of damage on your roof. Some common signs you may need a flat roof repair include:</p>
      </div>
      <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
        <div className="w-full p-2 sm:w-1/2">
          <div className="flex items-center h-full p-4 bg-gray-100 rounded">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-red-500" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="font-medium title-font">Pooling Water</span>
          </div>
        </div>
        <div className="w-full p-2 sm:w-1/2">
          <div className="flex items-center h-full p-4 bg-gray-100 rounded">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-red-500" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="font-medium title-font">Flashing seperation</span>
          </div>
        </div>
        <div className="w-full p-2 sm:w-1/2">
          <div className="flex items-center h-full p-4 bg-gray-100 rounded">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-red-500" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="font-medium title-font">Membrane rips</span>
          </div>
        </div>
        <div className="w-full p-2 sm:w-1/2">
          <div className="flex items-center h-full p-4 bg-gray-100 rounded">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-red-500" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="font-medium title-font">Coating cracks</span>
          </div>
        </div>
        <div className="w-full p-2 sm:w-1/2">
          <div className="flex items-center h-full p-4 bg-gray-100 rounded">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-red-500" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="font-medium title-font">Loose or missing fasteners</span>
          </div>
        </div>
        <div className="w-full p-2 sm:w-1/2">
          <div className="flex items-center h-full p-4 bg-gray-100 rounded">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-red-500" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="font-medium title-font">Roof or ceiling leaks</span>
          </div>
        </div>
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
