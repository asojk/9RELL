import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MaintFaq = () => {
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
        className="p-4 rounded-[7px] bg-d7 flex flex-col justify-between relative z-10 text-l1"
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
        className="absolute inset-0 z-1 bg-gradient-to-r from-d7 to-d5"
      />
      <div className="absolute inset-0 z-0 bg-b3" />
    </div>
  );
};

export default MaintFaq;

const faqs = [
	{
		id: 4,
		title: 'What type of roof maintenance programs do you offer?',
		description:
			'We offer programs specifically tailored to the customer\'s needs. These include annual inspections, roof maintenance, cleaning, and snow removal. Contact us today and we can develop a program best suited to your specific requirements.',
		imgSrc: 'https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg',
	},
	{
		id: 13,
		title: 'What are some of the simple things you can do when a leak is detected?',
		description:
			'Some initial steps include checking your roof for debris, ensuring your drains are clear, and inspecting the gutters and downspouts. We recommend performing these checks twice a year to minimize debris and maintain clean downspouts and drains. If these are not the issue, contact us at Grell Roofing and we will conduct a free inspection. The inspection will include our recommendations and a quote to address any leaks.',
		imgSrc: 'https://media.giphy.com/media/WirhZMBF1AZVK/giphy.gif',
	},
	{
		id: 8,
		title: 'Do you offer coating systems to prolong the life of our existing roof?',
		description:
			'Yes, we do. If we determine your roof is a suitable candidate, we will provide a quote for a roof coating. We offer both spot coating, where we address potential roof issues and flashings, and a full roof coating. The full roof coating comes with various warranty options based on budget and what we believe will best suit your building.',
		imgSrc: 'https://media.giphy.com/media/gj3ERyIdJXSheyBb8P/giphy.gif',
	},
];