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

const TABS = ["General", "Repair", "Maintenance", "Uncategorized", "Other"];

const QUESTIONS = {
  "General": [
    {
      question: "what forms of payment do u take, etc.,?",
      answer:
        "",
    },
    	{
		question: 'Why choose Grell?',
		answer:
			'Our company stands on the pillars of integrity, customer service, and expertise. Available around the clock, we strive to answer your questions and address your concerns promptly. As a family-run business, we bring over 30 years of experience in the roofing industry. Our certifications extend to various renowned roofing systems. Moreover, we operate as a fully licensed, bonded, and insured entity, ensuring trust and reliability. Our commitment to quality service is recognized by our membership in the Better Business Bureau.',
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
  "Maintenance": [
	{
		quesiton: 'What are some of the simple things you can do when a leak is detected?',
		answer:
			'Some initial steps include checking your roof for debris, ensuring your drains are clear, and inspecting the gutters and downspouts. We recommend performing these checks twice a year to minimize debris and maintain clean downspouts and drains. If these are not the issue, contact Grell and we will conduct a free inspection. The inspection will include our recommendations and a quote to address any leaks.',
	},
	{
		quesiton: 'What type of roof maintenance programs do you offer?',
		answer:
			'We offer programs specifically tailored to the customer\'s needs. These include annual inspections, roof maintenance, cleaning, and snow removal. Contact us so we can develop a program best suited to your specific requirements.',
	},
	{
		quesiton: 'Do you offer coating systems to prolong the life of our existing roof?',
		answer:
			'Yes, we do. If we determine your roof is a suitable candidate, we will provide a quote for a roof coating. We offer both spot coating, where we address potential roof issues and flashings, and a full roof coating. The full roof coating comes with various warranty options based on budget and what we believe will best suit your building.',
	},
  ],
  "Uncategorized": [
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
	{
		question: 'What are some of the simple things you can do when a leak is detected?',
		answer:
			'Some initial steps include checking your roof for debris, ensuring your drains are clear, and inspecting the gutters and downspouts. We recommend performing these checks twice a year to minimize debris and maintain clean downspouts and drains. If these are not the issue, contact Grell and we will conduct a free inspection. The inspection will include our recommendations and a quote to address any leaks.',
	},
	{
		question: 'What type of roof maintenance programs do you offer?',
		answer:
			"We offer programs specifically tailored to the customer's needs. These include annual inspections, roof maintenance, cleaning, and snow removal. Contact us so we can develop a program best suited to your specific requirements.",
	},
	{
		question: 'Do you offer coating systems to prolong the life of our existing roof?',
		answer:
			'Yes, we do. If we determine your roof is a suitable candidate, we will provide a quote for a roof coating. We offer both spot coating, where we address potential roof issues and flashings, and a full roof coating. The full roof coating comes with various warranty options based on budget and what we believe will best suit your building.',
	},

	{
		question: 'What is custom-fabrication?',
		answer:
			'Custom-fabrication is the process of manufacturing a product to meet the specific needs of a project. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance.',
	},
	{
		question: 'What do Duro-Last® Warranties cover?',
		answer:
			'Duro-Last® leads the roofing industry with comprehensive warranty coverage, including 25- and 30-year options, providing unparalleled protection for commercial roofing applications. With warranty options that include material and labor coverage as well as hail and/or high wind protection, we have a level of coverage right for any job. And as the first manufacturer with a warranty that expressly covers consequential damages on commercial buildings, we continue to work hard and stand by every square foot.',
	},
	{
		question: 'Does Duro-Last® offer colored roofing options?',
		answer:
			'Duro-Last® Roofing Systems are available in white, gray, dark gray, tan, and terra cotta colors. Additionally, our Duro-Tuff® and Duro-Fleece® roofing systems are available in a variety of colors including white, light gray, charcoal, patina, dark green, light tan, copper, and blue. Whether you want your roof to stand out or blend in with the surrounding aesthetic, you can count on Duro-Last to protect your building with style.',
	},
	{
		question: 'How do I recycle a Duro-Last® roof?',
		answer:
			'Duro-Last® offers a Roof Take Back program for mechanically attached Duro-Last Roofing Systems that have reached the end of their useful life. Through this program, the roofing system is removed from the roof, fasteners are cut from the material, and it is shipped back to Duro-Last for recycling into new products such as Roof-Trak ® walkway pads, ProFlex ® concrete expansion joints, and Protect-All® flooring.',
	},
	{
		question: 'How do I clean a Duro-Last® roof?',
		answer:
			'Incorporating roof washing into your routine maintenance plan can help maintain the appearance of your roofing system as well as solar reflectivity on white membranes. Utilizing Wash Safe Roof Wash from Duro-Last<sup>®</sup> can keep your rooftop free of biological growth, and a non-sudsing, non-abrasive cleanser such as Spic and Span<sup>®<sup> or Simple Green<sup>®</sup> can keep your rooftop clean of dirt and environmental debris. Solvent-based cleaners cannot be used. View the Duro-Last Care and Maintenance Guide, and contact the Duro-Last Quality Assurance Department at 866-284-9424, to learn more about cleaning and maintaining your Duro-Last Roofing System.',
	},
	{
		question: 'What do I need to do to maintain a Duro-Last® roof?',
		answer:
			'While Duro-Last® Roofing Systems are designed to withstand the elements and provide long-term protection, general routine maintenance goes a long way in protecting your overall investment. In addition to regular inspections by a roofing professional, as well as any inspections required with your Duro-Last Warranty, owners should plan to check their roof at least twice per year for potential damage and regular clean-up. Download the Duro-Last Roofing System Care and Maintenance Guide & Owner Checklist for detailed information and checklists to help guide the care of your roofing investment.',
	},

	{
		question: 'Can a Duro-Last® roof be installed on my house?',
		answer:
			'While intended for flat and low-slope applications, Duro-Last ® Roofing Systems can be installed on any roofing surface with proper design. Additionally, our 15-Year and 20-Year Residential Warranties offer protection for non-commercial applications. Contact a Duro-Last Sales Representative to learn more about roofing solutions from Duro-Last for your home.',
	},
	{
		question: 'How much does a new roof cost?',
		answer:
			'The cost of a roof largely depends on the condition of the structure and materials being used. The cost to put a roof on a new construction building is much different than the cost to put a roof on an existing structure that requires a full tear-off of existing materials. Duro-Last® Sales Representatives and our network of authorized contractors are available to provide roof evaluations and estimates for your specific building needs, contact us today at (800) 208-9693',
	},
	{
		question: 'How do I fix a leak in my roof?',
		answer:
			'Roof leaks are tricky and can lead to more serious damage if not addressed quickly by trained professionals. If you currently have a system which was previously installed by Grell and is under warranty, you should call Grell immediately. If your roof is out of warranty or you do not have a Grell Roofing System but would like assistance from a qualified group to address the immediate issue, contact us today at (800) 208-9693.',
	},
	{
		question: 'What is PVC roofing?',
		answer:
			'Polyvinyl chloride (PVC) roofing, is a single-ply membrane used on flat or low-sloped roof surfaces. PVC roofing systems are typically comprised of two layers of PVC film and a fabric scrim that provides strength and durability. While available in a wide range of colors, white PVC roofs offer superior reflectivity compared to darker roofing systems, and PVC roofs are effective in all climates. Additionally, PVC membranes are flexible, lightweight, resistant to most chemicals, and self-extinguish after fire exposure. To learn more about the benefits of PVC roofing, as well as the enhanced features of Duro-Last® solutions, check out The Duro-Last Difference.',
	},
	{
		question: 'What is the best roofing system?',
		answer:
			'The best roofing system is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
	},
	{
		question: 'What is the best roofing material?',
		answer:
			'The best roofing material is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
	},
	{
		question: 'What is the best commercial roofing system?',
		answer:
			'The best commercial roofing system is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
	},
	{
		question: 'What is the best commercial roofing material?',
		answer:
			'The best commercial roofing material is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
	},
	{
		question: 'What is the best flat roof system?',
		answer:
			'The best flat roof system is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
	},
	{
		question: 'What is the best flat roof material?',
		answer:
			'The best flat roof material is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
	},
	{
		question: 'What is the best low-slope roof system?',
		answer:
			'The best low-slope roof system is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
	},
	{
		question: 'What is the best low-slope roof material?',
		answer:
			'The best low-slope roof material is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
	},
	{
		question: 'What is the best single-ply roof system?',
		answer:
			'The best single-ply roof system is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
	},
	{
		question: 'What is the best single-ply roof material?',
		answer:
			'The best single-ply roof material is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
	},
	{
		question: 'What is the best roofing system for a flat roof?',
		answer:
			'The best roofing system for a flat roof is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site.',
	},
	{
		question: 'What is the best roofing material for a flat roof?',
		answer:
			'The best roofing material for a flat roof is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site.',
	},
  ],
  "Other": [
  {
  },
  ],
};