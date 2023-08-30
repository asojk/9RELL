import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const RepairFaq = () => {
  const [open, setOpen] = useState(faqs[0].id);
  const imgSrc = faqs.find((s) => s.id === open)?.imgSrc;
  return (
    <section className="px-8 py-12 page-container">
      <div className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]">
        <div>
          <h3 className="mb-8 h2">FAQ</h3>
          <div className="flex flex-col gap-4">
            {faqs.map((q) => {
              return (
                <FAQ {...q} key={q.id} open={open} setOpen={setOpen} index={q.id} />
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

const FAQ = ({ title, description, index, open, setOpen }) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "fit-content" : "76px",
        }}
        className="p-4 rounded-[7px] bg-d7/50 flex flex-col justify-between relative z-10 text-l1"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(243 243 241, 1)",
            }}
            className="text-base w-fit bg-gradient-to-b from-r to-rA bg-clip-text"
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
        className="absolute inset-0 z-1 bg-d7"
      />
      <div className="absolute inset-0 z-0" />
    </div>
  );
};

export default RepairFaq;

const faqs = [
	{
		id: 16,
		title: 'Why choose Grell?',
		description:
			'Our company stands on the pillars of integrity, customer service, and expertise. Available around the clock, we strive to answer your questions and address your concerns promptly. As a family-run business, we bring over 30 years of experience in the roofing industry. Our certifications extend to various renowned roofing systems. Moreover, we operate as a fully licensed, bonded, and insured entity, ensuring trust and reliability. Our commitment to quality service is recognized by our membership in the Better Business Bureau.',
		imgSrc: '',
	},
	{
		id: 14,
		title: 'What is PVC roofing?',
		description:
			'Polyvinyl chloride (PVC) roofing, is a single-ply membrane used on flat or low-sloped roof surfaces. PVC roofing systems are typically comprised of two layers of PVC film and a fabric scrim that provides strength and durability. While available in a wide range of colors, white PVC roofs offer superior reflectivity compared to darker roofing systems, and PVC roofs are effective in all climates. Additionally, PVC membranes are flexible, lightweight, resistant to most chemicals, and self-extinguish after fire exposure. To learn more about the benefits of PVC roofing, as well as the enhanced features of Duro-Last® solutions, check out The Duro-Last Difference.',
		imgSrc: '',
	},
	{
		id: 4,
		title: 'Can Grell install roofing systems over an existing roof?',
		description:
			"Grell Roofing can install various roofing systems over a range of pre-existing roofs. The viability of this depends on the current roof's integrity, appropriate underlayments used, and local building code permissions. Contact a Grell representative today to schedule a roof evaluation, which will determine if your roof is an ideal candidate for an overlay.",
		imgSrc: 'https://media.giphy.com/media/WirhZMBF1AZVK/giphy.gif',
	},
	{
		id: 8,
		title: 'What maintenance does a roof installed by Grell require?',
		description:
			'While the roofing systems installed by Grell are designed to withstand the elements and provide long-term protection, general routine maintenance is crucial for protecting your overall investment. In addition to regular inspections by a roofing professional and any inspections required by your warranty, owners should plan to check their roof at least twice per year for potential damage and regular clean-up. Contact us for a comprehensive Roofing System Care and Maintenance Guide & Owner Checklist.',
		imgSrc: 'https://media.giphy.com/media/gj3ERyIdJXSheyBb8P/giphy.gif',
	},
	{
		id: 15,
		title: 'What is the best roofing system?',
		description:
			'The best roofing system is one that meets the specific needs of your building. At Grell, we customize every roofing system to the exact specifications of each building, ensuring an excellent fit and long-term performance. Our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of roofing systems installed by Grell, contact us today.',
		imgSrc: '',
	},
];