import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";

export const TabsFAQ = () => {
  const [selected, setSelected] = useState(TABS[0]);

  return (
    <section className="px-4 -mt-12 overflow-hidden text-l1">
      <Heading />
      <Tabs selected={selected} setSelected={setSelected} />
      <Questions selected={selected} />
    </section>
  );
};

const Heading = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="mb-8 font-medium text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">
          Let's answer some questions
        </span>
        <span className="mb-8 text-5xl font-bold">FAQs</span>
      </div>

      <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-tr from-y9/20 to-y2/20 blur-3xl" />
    </>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab)}
          className={`relative overflow-hidden whitespace-nowrap rounded-md border px-3 py-1.5 text-sm font-medium transition-colors duration-500 ${
            selected === tab
              ? "border-l1 text-l1"
              : "border-l5 bg-transparent text-l5"
          }`}
          key={tab}
        >
          <span className="relative z-10">{tab}</span>
          <AnimatePresence>
            {selected === tab && (
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: "backIn",
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-r to-rd2"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
};

const Questions = ({ selected }) => {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <AnimatePresence mode="wait">
        {Object.entries(QUESTIONS).map(([tab, questions]) => {
          return selected === tab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: "backIn",
              }}
              className="space-y-4"
              key={tab}
            >
              {questions.map((q, idx) => (
                <Question key={idx} {...q} />
              ))}
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};

const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className={`border-l  border-w3 px-4 transition-colors ${
        open ? "bg-d7" : "bg-none"
      }`}
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center justify-between w-full gap-4 py-4"
      >
        <span
          className={`text-left text-lg font-medium transition-colors ${
            open ? "text-l1" : "text-l5"
          }`}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: {
              rotate: "45deg",
            },
            closed: { 
              rotate: "0deg",
            },
          }}
        >
          <FiPlus
            className={`text-2xl transition-colors ${
              open ? "text-l1" : "text-l5"
            }`}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-l5"
      >
        <p>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const TABS = ["General", "Mobile dev", "UI/UX", "Uncategorized"];

const QUESTIONS = {
  "General": [
    {
      question: "what forms of payment do u take, etc.,?",
      answer:
        "",
    },
  ],
  "Repair": [
	{
		question: 'Why choose Grell?',
		answer:
			'Our company stands on the pillars of integrity, customer service, and expertise. Available around the clock, we strive to answer your questions and address your concerns promptly. As a family-run business, we bring over 30 years of experience in the roofing industry. Our certifications extend to various renowned roofing systems. Moreover, we operate as a fully licensed, bonded, and insured entity, ensuring trust and reliability. Our commitment to quality service is recognized by our membership in the Better Business Bureau.',
	},
	{
		question: 'What is PVC roofing?',
		answer:
			'Polyvinyl chloride (PVC) roofing, is a single-ply membrane used on flat or low-sloped roof surfaces. PVC roofing systems are typically comprised of two layers of PVC film and a fabric scrim that provides strength and durability. While available in a wide range of colors, white PVC roofs offer superior reflectivity compared to darker roofing systems, and PVC roofs are effective in all climates. Additionally, PVC membranes are flexible, lightweight, resistant to most chemicals, and self-extinguish after fire exposure. To learn more about the benefits of PVC roofing, as well as the enhanced features of Duro-Last® solutions, check out The Duro-Last Difference.',
	},
	{
		question: 'Can Grell install roofing systems over an existing roof?',
		answer:
			"Grell Roofing can install various roofing systems over a range of pre-existing roofs. The viability of this depends on the current roof's integrity, appropriate underlayments used, and local building code permissions. Contact a Grell representative today to schedule a roof evaluation, which will determine if your roof is an ideal candidate for an overlay.",
	},
	{
		question: 'What maintenance does a roof installed by Grell require?',
		answer:
			'While the roofing systems installed by Grell are designed to withstand the elements and provide long-term protection, general routine maintenance is crucial for protecting your overall investment. In addition to regular inspections by a roofing professional and any inspections required by your warranty, owners should plan to check their roof at least twice per year for potential damage and regular clean-up. Contact us for a comprehensive Roofing System Care and Maintenance Guide & Owner Checklist.',
	},
	{
		question: 'What is the best roofing system?',
		answer:
			'The best roofing system is one that meets the specific needs of your building. At Grell, we customize every roofing system to the exact specifications of each building, ensuring an excellent fit and long-term performance. Our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of roofing systems installed by Grell, contact us today.',
	},
  ],
  "UI/UX": [
    {
      question: "What is UI/UX?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Can you audit my existing site?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "How do you perform research?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Does it make sense for my company?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
  ],
  "Uncategorized": [
    {
      question: "What is copywriting?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Can you write my blog?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Can you also help with ad design?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "How much does it cost?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
  ],
};