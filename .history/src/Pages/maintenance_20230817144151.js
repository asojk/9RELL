import React from "react";
import { Helmet } from "react-helmet";
import MaintFaq from "../Layout/maintFaq.jsx";

const MaintServices = ({Service}) => (
  <div className="w-full px-2 sm:w-1/2">
  <div className="flex items-center h-full">
    <div className="flex items-center w-full">
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} className="flex-shrink-0 w-4 h-4 mr-3 text-yw" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
    <span className="text-l3">
      {Service}</span>
    </div>
  </div>
</div>
);

const MaintSigns = ({Sign}) => (
  <div className="w-full p-2 sm:w-1/2">
  <div className="flex items-center">
    <div className="flex-shrink-0 mr-2 text-2xl text-r">»</div>

    <span className="text-l3">{Sign}</span>
  </div>
</div>
);

function Maintenance() {

return (
<><Helmet title="GRELL | Flat Roof Repair" meta={[
      {name: "description", content:"As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.",},
      {name: "keywords", content:"roofing, construction, reapir, flat, flat-roof, roof repair",},]}/>

<section className="pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg)] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r"></div>
    <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div className="max-w-2xl text-center sm:text-left">
        <span className="title-head">xxxxxxx</span>
        <h1 class="h1">Flat Roof Maintenance Program</h1>
        <p className="max-w-lg pb-12 mt-4 lg:pb-24 sm:text-xl/relaxed text-l3">As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs. That is why we offer comprehensive flat roof repair services to cover just about any situation you may face. These include:</p>
        <div className="flex flex-wrap pt-4 pb-4">
        <p className="replace-text">
            If you’ve never considered a maintenance plan for your commercial
            roof, you may not recognize the compounding benefits. Some of the
            benefits of Grell’s commercial roofing maintenance plan include:
            <ul>
              <li>Free yearly inspection & cleaning service</li>
              <li>Protects your capital investment</li>
              <li>Prevents leaks</li>
              <li>Protects the inside of your facility</li>
              <li>Prevents productions delays</li>
              <li>Prevents loss of inventory</li>
              <li>Prevents employee accidents</li>
              <li>No hassle or work for you</li>
              <li>Peace of mind</li>
            </ul>
          </p>
          <MaintServices Service="Inspect critical areas of your roof" />
          <MaintServices Service="Clean environmental debris from waterways to promote drainage" />
          <MaintServices Service="Report any damages or maintenance issues that need to be addressed" />
        </div>
        <p className="max-w-lg pb-12 mt-4 lg:pb-24 sm:text-xl/relaxed text-l3">Keep your building protected and contact us today to learn more or sign up for one of our flat roof maintenance contracts.</p>
        <div className="flex flex-wrap gap-4 mt-8 text-center">
          <a className="block w-full px-12 py-3 text-sm font-medium rounded shadow-sm cursor-pointer shadow-rd3 text-l1 bg-r hover:bg-rd2 focus:outline-none focus:ring active:bg-r sm:w-auto">x?</a>
      </div>
    </div>
  </div>
</section>

<div className="replace-replace">

            As a commercial property owner, we understand that you don’t have
            time to constantly keep up with your roof maintenance. You may not
            even know how to. Leave that up to us and sign up for one of our
            flat roof maintenance contracts. Among other benefits, we inspect
            your roof every year, report any problems, and also provide
            solutions on how to best address them. This way, you have one less
            thing to worry about, and you’re positioned to save time and money.
            We offer flat roof maintenance contracts to clients throughout Iowa
            and the surrounding states, so contact us to sign up today.

          <span className="replace-head">
            What Is Included In The Yearly Flat Roof Inspection?
          </span>

          <span className="replace-head">
            Why Grell’s Commercial Roof Maintenance Plan?
          </span>

        </div>


<div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
<section className="relative z-1 max-w-[85rem] px-4 mx-auto">
  <div className="container px-5 mx-auto rounded-2xl">
    <div className="mb-8 text-center">
      <header className="header">
      <span className="head">Signs that it's time for a repair</span>
      <h1 class="h2">Commercial repair services</h1>
      </header>
            <p className="max-w-lg pb-12 mt-4 lg:pb-24 sm:text-xl/relaxed text-l3">As part of our maintenance program, you will receive a free basic preventative maintenance inspection every year to ensure your roof is performing as it should. When one of our technicians arrives at your property for an inspection, you can expect them to do the following:</p>
        <div className="flex flex-wrap pt-4 pb-4">
          <MaintServices Service="Inspect critical areas of your roof" />
          <MaintServices Service="Clean environmental debris from waterways to promote drainage" />
          <MaintServices Service="Report any damages or maintenance issues that need to be addressed" />
        </div>
        <p className="max-w-lg pb-12 mt-4 lg:pb-24 sm:text-xl/relaxed text-l3">Without any effort on your end, a yearly flat roof inspection will allow you to be proactive instead of reactive when it comes to protecting your business.</p>
        </div>
  </div>
</section>
</div>





<div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
<section className="text-l1 body-font">
<div className="container px-5 mx-auto">
    <div className="text-center">
    <header className="header">

      <h2 className="head">24/7 Emergency Flat Roof Repair Services</h2>
      <h1 class="h2">Emergency Flat Roof Repairs</h1>
        </header>

          <p className="pt-4 mx-auto text-base leading-relaxed lg:w-3/4">
          At Grell, we always strive to serve our customers as quickly and
            efficiently as possible. We understand, though, that some issues can
            not wait even a day. That is why we offer a 24/7 emergency flat roof
            repair services for situations that are serious safety hazards. If
            you need immediate assistance, call today.
          </p>
          <div className="gap-4 mt-8 text-center">
        <a className="w-full px-12 py-3 text-sm font-medium rounded shadow-sm cursor-pointer shadow-rd3 text-l1 bg-r hover:bg-rd2 focus:outline-none focus:ring active:bg-r sm:w-auto">Contact</a>
        </div>
    </div>
  </div>
</section>
</div>
<MaintFaq />
</>
);
}

export default Maintenance;
