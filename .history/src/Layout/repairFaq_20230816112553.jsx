import React from "react";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const RepairFaq = () => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;
  return (
    <section className="px-8 py-12 page-container">
      <div className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]">
        <div>
          <h3 className="mb-8 h2">FAQ</h3>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution {...q} key={q.id} open={open} setOpen={setOpen} index={q.id} />
              );
            })}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={imgSrc}
            className="bg-transparent rounded-2xl aspect-[4/3] lg:aspect-auto"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

const Solution = ({ title, description, index, open, setOpen }) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "360px" : "86px",
        }}
        className="p-6 rounded-[7px] bg-d7 flex flex-col justify-between relative z-10 text-l1"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 1)",
            }}
            className="text-lg font-bold w-fit bg-gradient-to-r from-r to-rA bg-clip-text"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 text-base text-l1 bg-gradient-to-r from-r to-rA bg-clip-text"
          >
            {description}
          </motion.p>
        </div>

      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-1 bg-gradient-to-r from-d7 to-d5"
      />
      <div className="absolute inset-0 z-0 bg-d9" />
    </div>
  );
};

export default RepairFaq;

const solutions = [
  {
    id: 13,
    title: 'How do I fix a leak in my roof?',
    description:'Roof leaks are tricky and can lead to more serious damage if not addressed quickly by trained professionals. If you have a Duro-Last® Roofing System currently under warranty on your structure and have identified a leak, you must call the Duro-Last Warranty Services Department at 866-284-9424 within 7 to 14 days of discovery to schedule an inspection and repair. If your roof is out of warranty or you do not have a Duro-Last Roofing System but would like assistance in finding a contractor that is qualified to address the immediate issue, contact us today at 888-301-7712.',
    imgSrc: 'https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg',
    },
{
	id: 4,  title: 'Can Duro-Last® Roofing Systems be installed over an existing roof?',
	description:'Duro-Last® Roofing Systems can be installed over a variety of pre-existing roofing systems, provided the integrity of the current roofing system has not been severely compromised, compatible underlayments are utilized when necessary, and local building codes allow for a recovered roofing system. Contact a Duro-Last Sales Representative today to schedule a roof evaluation, which will determine if your roof is an ideal candidate for an overlay.',
  imgSrc: 'https://media.giphy.com/media/WirhZMBF1AZVK/giphy.gif',
  },
{
	id: 8,
  title: 'What do I need to do to maintain a Duro-Last® roof?',
  description:'While Duro-Last® Roofing Systems are designed to withstand the elements and provide long-term protection, general routine maintenance goes a long way in protecting your overall investment. In addition to regular inspections by a roofing professional, as well as any inspections required with your Duro-Last Warranty, owners should plan to check their roof at least twice per year for potential damage and regular clean-up. Download the Duro-Last Roofing System Care and Maintenance Guide & Owner Checklist for detailed information and checklists to help guide the care of your roofing investment.',
  imgSrc: 'https://media.giphy.com/media/gj3ERyIdJXSheyBb8P/giphy.gif',
  },
{
	id: 14,
  title: 'What is PVC roofing?',
	description:'Polyvinyl chloride (PVC) roofing, is a single-ply membrane used on flat or low-sloped roof surfaces. PVC roofing systems are typically comprised of two layers of PVC film and a fabric scrim that provides strength and durability. While available in a wide range of colors, white PVC roofs offer superior reflectivity compared to darker roofing systems, and PVC roofs are effective in all climates. Additionally, PVC membranes are flexible, lightweight, resistant to most chemicals, and self-extinguish after fire exposure. To learn more about the benefits of PVC roofing, as well as the enhanced features of Duro-Last® solutions, check out The Duro-Last Difference.',
  imgSrc: '',
  },
{
	id: 15,
  title: 'What is the best roofing system?',
	description:'The best roofing system is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
  imgSrc: '',
  },
]