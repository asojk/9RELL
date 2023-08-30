import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion"

const Repair = () => (

  <div className="page-container">

    <Helmet title="GRELL | Flat Roof Repair" meta={[
    { name: 'description', content: 'As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.' },
    { name: 'keywords', content: 'roofing, construction, reapir, flat, flat-roof, roof repair' },]} />

{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div
      className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div
        className="max-w-lg mx-auto text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">Find your career path</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
          aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
          Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
          Obcaecati, autem.
        </p>

        <a
          href="#"
          className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span className="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Accountant</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
<section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
	</div>
</section>

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
  </div>
);

export default Repair;
