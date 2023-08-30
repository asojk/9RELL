import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import FootSection from "../Layout/FootSection";
import TailContent from "../Layout/TailContent";
import { DrawerWithNavigation } from "../Layout/Drawer99";
import RepairFaq from "../Layout/repairFaq";

const Repair = () => (
  <>
    <Helmet
      title="GRELL | Flat Roof Repair"
      meta={[
        {
          name: "description",
          content:
            "As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.",
        },
        {
          name: "keywords",
          content:
            "roofing, construction, reapir, flat, flat-roof, roof repair",
        },
      ]}
    />
    <section className="pt-64">
      <div className="lg:py-12">
        <header className="header">
          <span className="head">Services</span>
          <h2 className="heading">Flat Roof Repair</h2>
        </header>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Party"
              src="https://grell.s3.us-east-2.amazonaws.com/pics/repair2.jpg"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>

          <div className="lg:py-12">
            <p className="px-12 py-12 text-lg text-l1">
              When you are having issues with your commercial roof, let Grell
              Roofing take care of your flat roof repairs. Over the past 30
              years, we have built a reputation throughout the Midwest for
              quality, affordable flat roof repairs for buildings of all sizes.
              We are licensed, bonded, insured, and stand behind our work. We
              will also work with your insurance company to make sure the
              process goes as smoothly as possible. Contact us today for flat
              roof repairs available throughout Iowa and the surrounding states.
            </p>

            <a
              href="#"
              className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div class="w-full mx-auto">
            <h2>A small headline to switch your visitors into users.</h2>
            <p>
              Right. Say that again. No, no, George, look, it's just an act,
              right? Okay, so 9:00 you're strolling through the parking.
            </p>

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

            <p>
              If you are experiencing a flat roofing issue not listed above,
              still contact us today. We are confident that we can provide the
              flat roof repairs you need.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div class="w-full mx-auto">
            <h2>signs that it is time for a repair</h2>
            <p>
              Whether from faulty installation, storm damage, or simply an
              outdated roofing system, there are a variety of reasons you may
              need a flat roof repair. Signs of damage are not always obvious,
              either, which is why it is important to get a professional roof
              inspection to uncover even the smallest of damage on your roof.
              Some common signs you may need a flat roof repair include:
            </p>

            <li>Pooling water</li>
            <li>Flashing separation</li>
            <li>Membrane rips</li>
            <li>Coating cracks</li>
            <li>Loose or missing fasteners</li>
            <li>Roof or ceiling leaks</li>

            <p>
              If you are experiencing any of the issues above or even another
              type of problem with your flat roof, contact us today for a free
              inspection.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div class="w-full mx-auto">
            <h2>Emergency Flat Roof Repairs</h2>
            <p>
              At Grell, we always strive to serve our customers as quickly and
              efficiently as possible. We understand, though, that some issues
              can not wait even a day. That is why we offer a 24/7 emergency
              flat roof repair services for situations that are serious safety
              hazards. If you need immediate assistance, call today.
            </p>
          </div>
        </div>
      </div>
    </section>
    <RepairFaq />
  </>
);

export default Repair;
