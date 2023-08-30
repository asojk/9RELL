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
		title: 'what type of roof maintenance programs do you offer?',
		description:
			'we offer programs specifically tailored to the customers needs. We offer annual inspections, roof maintenance, cleaning and snow removal. Call today and we can build a program best suited for your specific needs.',
		imgSrc: 'https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg',
	},
	{
		id: 13,
		title: 'what are some of the simple things you can do when a leak is detected? ',
		description:
			'go up on the roof check your drains.. clean out any debris check the gutters and downspouts. do this 2x a year to minimize debris and keep the downspouts and drains clean. if the above are not an issue contact us here at Grell and we will come over and do a free inspection. The inspection will note our suggestions and a price to get these leaks handled. ',
		imgSrc: 'https://media.giphy.com/media/WirhZMBF1AZVK/giphy.gif',
	},
	{
		id: 8,
		title: 'Do you offer coating systems to prolong the life of our existing roof?',
		description:
			'yes we do if we feel your roof is a good candidate we will put together a price to coat the roof. We can offer a spot coating where we address probable roof issues and flashings and we can offer a full roof coating. the full roof coating offers some different warranty options based on budget and what we feel will best suit your building. ',
		imgSrc: 'https://media.giphy.com/media/gj3ERyIdJXSheyBb8P/giphy.gif',
	},
];