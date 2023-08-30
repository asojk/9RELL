import * as React from "react";
import WarrantyCards from "../Layout/WarrantyCards";
import Steps from "../Components/main/steps.jsx";

export default function WarrantyGrid() {
  return (
    <><section className="pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r"></div>
      <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-2xl text-center sm:text-left">
          <span className="title-head">Protect Your Investment</span>
          <h1 class="h1">Warranty Information</h1>
          <p className="max-w-lg pb-12 mt-4 lg:pb-24 sm:text-xl/relaxed text-l3">We'll work with your insurance company to smooth the process.</p>
        </div>
      </div>
    </section>
    
    <section className="">

        <div className="section-container">
          <WarrantyCards />
        </div>
      </section></>
  );
}
