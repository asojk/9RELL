import React from 'react';
import { Helmet } from 'react-helmet';

const ReplaceSigns = ({Signs}) => (
  <div className="w-full p-2 sm:w-1/2">
  <div className="flex items-center">
    <div className="flex-shrink-0 mr-2 text-2xl text-r">»</div>

    <span className="text-l3">{Signs}</span>
  </div>
</div>
);
const Replacement = () => (
  <>
    <Helmet title="GRELL | Flat Roof Repair" meta={[
        {name: "description", content:"As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.",},
        {name: "keywords", content:"roofing, construction, reapir, flat, flat-roof, roof repair",},]}/>
<section className="pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/finishedroof.jpg)] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r"></div>
    <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div className="max-w-2xl text-center sm:text-left">
        <span className="title-head">Installation you can trust</span>
        <h1 class="h1">Commercial Roof Replacement</h1>
        <p className="max-w-lg pb-12 mt-4 lg:pb-24 sm:text-xl/relaxed text-l3">We have over 30 years of experience in flat and low-slope installations throughout the Midwest and will ensure the entire process goes as smoothly as possible.</p>
        <div className="flex flex-wrap gap-4 mt-8 text-center">
          <a className="block w-full px-12 py-3 text-sm font-medium rounded shadow-sm cursor-pointer shadow-rd3 text-l1 bg-r hover:bg-rd2 focus:outline-none focus:ring active:bg-r sm:w-auto">x?</a>
      </div>
    </div>
  </div>
</section>


<div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
  <section className="relative z-1 max-w-[85rem] px-4 mx-auto">
    <div className="container px-5 mx-auto rounded-2xl">
      <div className="mb-8 text-center">
        <header className="header">
        <span className="head">We only install the best</span>
        <h1 class="h2">Duro-Last Elite Contractor</h1>
        </header>
          <p className="pt-4 mx-auto text-base leading-relaxed lg:w-3/4">
          As a Duro-Last Elite Contractor, you can rest assured that you are not only getting the highest quality flat roofing but also excellent service and reliable installation that will last for years to come. Our team is based out of Iowa, but we proudly provide flat roof replacements throughout the surrounding states, as well. Contact us today for your free estimate.<br></br><br></br>
          We only install the best flat roofing on the market, Duro-Last. They have built a reputation for manufacturing precision-fabricated roofing systems, which come with endless benefits including:</p>
      </div>
      <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
        <ReplaceSigns Signs="Less on-site seaming during installation, which minimizes problems and enables us to install quicker, saving you time and money"/>
        <ReplaceSigns Signs="A significant reduction in the potential for installation issues and future leak problems"/>
        <ReplaceSigns Signs="A reduction in waste, both during manufacturing and during installation"/>
        <ReplaceSigns Signs="More secure installation at critical roof transitions"/>
      </div>
      <p class="leading-relaxed text-base">No matter which type of Duro-Last product you select for your flat roof, we can guarantee you will be satisfied with the end result. Contact us today to get a free estimate on your flat roof installation.</p>
    </div>
  </section>
</div>





          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <p class="leading-relaxed text-base">No matter which type of Duro-Last product you select for your flat roof, we can guarantee you will be satisfied with the end result. Contact us today to get a free estimate on your flat roof installation.</p>
        <a class="mt-3 text-red-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>

            <h2 className="heading">Signs it's time for a replacement</h2>

          <p className="mx-auto text-base leading-relaxed lg:w-3/4">It can be hard to know when it is time to get a new flat roof, and certainly, it can be quite an investment. What is even more costly, though, is not replacing a damaged roof which can lead to further issues and even more expenses. If you experience any of the signs below, it may be time to schedule your flat roof replacement:</p>
          <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
            <div className="w-full p-2 sm:w-1/2">
              <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-red-500" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="font-medium title-font">Multiple roof holes</span>
              </div>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-red-500" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="font-medium title-font">Leaking ceiling</span>
              </div>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-red-500" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="font-medium title-font">Torn vapor barrier</span>
              </div>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-red-500" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="font-medium title-font">Missing pieces of roof</span>
              </div>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="flex-shrink-0 w-6 h-6 mr-4 text-red-500" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="font-medium title-font">Pooling water</span>
              </div>
            </div>
            <p className="mx-auto text-base leading-relaxed lg:w-3/4">The only way to be sure if your roof is still in good shape is to hire a professional. Contact Grell today for a free roofing inspection to see if a roof replacement is the next step for maintaining your building.</p>
            </div>


  </>
);

export default Replacement;
