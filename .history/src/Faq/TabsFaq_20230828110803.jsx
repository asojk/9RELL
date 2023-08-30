import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";

export const TabsFAQ = () => {
  const [selected, setSelected] = useState(TABS[0]);
    const [open, setOpen] = useState(faqs[0].id);

  return (
    <section className="px-4 -mt-12 overflow-hidden text-l1">
      <Heading />
      <Tabs selected={selected} setSelected={setSelected} />
<div className="flex flex-col gap-4">
            {faqs.map((q) => {
              return (
                <FAQ {...q} key={q.id} open={open} setOpen={setOpen} index={q.id} />
              );
            })}
          </div>
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
const FAQ = ({selected, title, description, index, open, setOpen }) => {
  const isOpen = index === open;

  return (
          <AnimatePresence mode="wait">
        {Object.entries(FAQ).map(([tab, faqs]) => {
          return selected === tab ? (
                    <div onClick={() => setOpen(index)}
            className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer">
      <motion.div
        initial={false}
        animate={{height: isOpen ? "fit-content" : "76px"}}
        className="p-4 rounded-[7px] bg-d7/50 flex flex-col justify-between relative z-10 text-l1">
        <div>
          <motion.p
            initial={false}
            animate={{color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(243 243 241, 1)"}}
            className="text-base w-fit bg-gradient-to-b from-r to-rA bg-clip-text">
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{opacity: isOpen ? 1 : 0}}
            className="mt-4 text-base text-l1 bg-gradient-to-r from-r to-rA bg-clip-text">
            {description}
          </motion.p>
        </div>

      </motion.div>
      <motion.div
        initial={false}
        animate={{opacity: isOpen ? 1 : 0}}
        className="absolute inset-0 z-1 bg-d7"/>
      <div className="absolute inset-0 z-0" />
    </div>
          ) : undefined;
        })}
      </AnimatePresence>
  );
};

export default FAQ;

const faqs = [
	{
    id: 1,
    title: "What is web development?",
    description:
      "Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.",
  },
];

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

const TABS = ["Web dev", "Mobile dev", "UI/UX", "Copywriting"];

const QUESTIONS = {
  "Web dev": [
    {
      question: "What is web development?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "How do I know if I need it?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "What does it cost?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "What about SEO?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
  ],
  "Mobile dev": [
    {
      question: "What is mobile development?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Can you do both iOS and Android?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "Can you help with app store optimization?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "How long does it take?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
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
  Copywriting: [
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