import React from "react";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const AccordionS = () => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;
  return (
    <section className="px-8 py-12 page-container">
      <div className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]">
        <div>
          <h3 className="mb-8 text-4xl font-bold text-l1">Solutions</h3>
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
          height: isOpen ? "360px" : "72px",
        }}
        className="p-6 rounded-[7px] bg-d7 flex flex-col justify-between relative z-10 text-l1"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 1)",
            }}
            className="text-xl font-medium w-fit bg-gradient-to-r from-r to-rA bg-clip-text"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 text-l1 bg-gradient-to-r from-r to-rA bg-clip-text"
          >
            {description}
          </motion.p>
        </div>
        <motion.button
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-r to-rA text-l1"
        >
          <span>Learn more</span>
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-1 bg-gradient-to-r from-d9 to-d7"
      />
      <div className="absolute inset-0 z-0 bg-d5" />
    </div>
  );
};

export default AccordionS;

const solutions = [
{
  id: 1,  title: 'What is custom-fabrication?',
	description:'Custom-fabrication is the process of manufacturing a product to meet the specific needs of a project. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance.',
  imgSrc: 'https://media2.giphy.com/media/SsTcO55LJDBsI/giphy.gif?cid=ecf05e47hfid50hu34mzkabzoy46hrftyl6g6656uygzmnpy&ep=v1_gifs_search&rid=giphy.gif&ct=g',

},
{
	id: 2,  title: 'What do Duro-Last® Warranties cover?',
	description:'Duro-Last® leads the roofing industry with comprehensive warranty coverage, including 25- and 30-year options, providing unparalleled protection for commercial roofing applications. With warranty options that include material and labor coverage as well as hail and/or high wind protection, we have a level of coverage right for any job. And as the first manufacturer with a warranty that expressly covers consequential damages on commercial buildings, we continue to work hard and stand by every square foot.',
  imgSrc: 'https://media.giphy.com/media/Ze4BXdrjDjygM9Piq0/giphy.gif',
  },
{
	id: 3,  title: 'Does Duro-Last® offer colored roofing options?',
	description:'Duro-Last® Roofing Systems are available in white, gray, dark gray, tan, and terra cotta colors. Additionally, our Duro-Tuff® and Duro-Fleece® roofing systems are available in a variety of colors including white, light gray, charcoal, patina, dark green, light tan, copper, and blue. Whether you want your roof to stand out or blend in with the surrounding aesthetic, you can count on Duro-Last to protect your building with style.',
  imgSrc: 'https://media.giphy.com/media/fuJjrm6Cv2onpmpPEK/giphy.gif',
  },
{
	id: 4,  title: 'Can Duro-Last® Roofing Systems be installed over an existing roof?',
	description:'Duro-Last® Roofing Systems can be installed over a variety of pre-existing roofing systems, provided the integrity of the current roofing system has not been severely compromised, compatible underlayments are utilized when necessary, and local building codes allow for a recovered roofing system. Contact a Duro-Last Sales Representative today to schedule a roof evaluation, which will determine if your roof is an ideal candidate for an overlay.',
  imgSrc: 'https://media.giphy.com/media/WirhZMBF1AZVK/giphy.gif',
  },
{
	id: 5,  title: 'How do I recycle a Duro-Last® roof?',
	description:'Duro-Last® offers a Roof Take Back program for mechanically attached Duro-Last Roofing Systems that have reached the end of their useful life. Through this program, the roofing system is removed from the roof, fasteners are cut from the material, and it is shipped back to Duro-Last for recycling into new products such as Roof-Trak ® walkway pads, ProFlex ® concrete expansion joints, and Protect-All® flooring.',
  imgSrc: 'https://media.giphy.com/media/EIiJp9cQ3GeEU/giphy.gif',
  },
{
	id: 6,
  title: 'How do I clean a Duro-Last® roof?',
	description:'Incorporating roof washing into your routine maintenance plan can help maintain the appearance of your roofing system as well as solar reflectivity on white membranes. Utilizing Wash Safe Roof Wash from Duro-Last<sup>®</sup> can keep your rooftop free of biological growth, and a non-sudsing, non-abrasive cleanser such as Spic and Span<sup>®<sup> or Simple Green<sup>®</sup> can keep your rooftop clean of dirt and environmental debris. Solvent-based cleaners cannot be used. View the Duro-Last Care and Maintenance Guide, and contact the Duro-Last Quality Assurance Department at 866-284-9424, to learn more about cleaning and maintaining your Duro-Last Roofing System.',
  imgSrc: 'https://media.giphy.com/media/igozOv6z3SlSBHpheK/giphy.gif',
  },
{
	id: 7,
  title: 'How do I become an authorized Duro-Last® installer?',
  description:'To learn more about the advantages of installing Duro-Last ® Roofing Systems, visit our Contractor Information Page or call 888-301-7712 to be connected to a Duro-Last Sales Representative in your region. They will outline the authorization process and share information about upcoming installation training classes in your region.',
  imgSrc: 'https://media.giphy.com/media/BJLcRLl7zFSwFXYsCq/giphy.gif',
  },
{
	id: 8,
  title: 'What do I need to do to maintain a Duro-Last® roof?',
  description:'While Duro-Last® Roofing Systems are designed to withstand the elements and provide long-term protection, general routine maintenance goes a long way in protecting your overall investment. In addition to regular inspections by a roofing professional, as well as any inspections required with your Duro-Last Warranty, owners should plan to check their roof at least twice per year for potential damage and regular clean-up. Download the Duro-Last Roofing System Care and Maintenance Guide & Owner Checklist for detailed information and checklists to help guide the care of your roofing investment.',
  imgSrc: 'https://media.giphy.com/media/gj3ERyIdJXSheyBb8P/giphy.gif',
  },
{
	id: 9,
  title: 'Where can I find specifications and details on Duro-Last® products?',
  description:'System specifications, product data sheets and detail drawings for all Duro-Last® products can be found on the Duro-Last Specifications Library. You can also find information about all codes and approval standards that Duro-Last meets, as well as sample warranty documents.',
  imgSrc: '',
  },
{
	id: 10,
  title: 'Is Duro-Last® available outside of the United States?',
  description:'Duro-Last® is an American company that primarily serves authorized contractors throughout the United States and Canada. To learn more about product availability in your region and potential international opportunities, contact a Duro-Last Sales Representative at 888-301-7712.',
  imgSrc: '',
  },
{
	id: 11,
  title: 'Can a Duro-Last® roof be installed on my house?',
  description:'While intended for flat and low-slope applications, Duro-Last ® Roofing Systems can be installed on any roofing surface with proper design. Additionally, our 15-Year and 20-Year Residential Warranties offer protection for non-commercial applications. Contact a Duro-Last Sales Representative to learn more about roofing solutions from Duro-Last for your home.',
  imgSrc: '',
  },
{
	id: 12,
  title: 'How much does a new roof cost?',
  description:'The cost of a roof largely depends on the condition of the structure and materials being used. The cost to put a roof on a new construction building is much different than the cost to put a roof on an existing structure that requires a full tear-off of existing materials. Duro-Last® Sales Representatives and our network of authorized contractors are available to provide roof evaluations and estimates for your specific building needs, contact us today at 888-301-7712.',
  imgSrc: '',
  },
{
	id: 13,
  title: 'How do I fix a leak in my roof?',
  description:'Roof leaks are tricky and can lead to more serious damage if not addressed quickly by trained professionals. If you have a Duro-Last® Roofing System currently under warranty on your structure and have identified a leak, you must call the Duro-Last Warranty Services Department at 866-284-9424 within 7 to 14 days of discovery to schedule an inspection and repair. If your roof is out of warranty or you do not have a Duro-Last Roofing System but would like assistance in finding a contractor that is qualified to address the immediate issue, contact us today at 888-301-7712.',
  imgSrc: '',
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
{
	id: 16,
  title: 'What is the best roofing material?',
	description:'The best roofing material is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
  imgSrc: '',
  },
{
	id: 17,
  title: 'What is the best commercial roofing system?',
	description:'The best commercial roofing system is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
  imgSrc: '',
  },
{
	id: 18,
  title: 'What is the best commercial roofing material?',
	description:'The best commercial roofing material is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
  imgSrc: '',
  },
{
	id: 19,
  title: 'What is the best flat roof system?',
	description:'The best flat roof system is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
  imgSrc: '',
  },
{
	id: 20,
  title: 'What is the best flat roof material?',
	description:'The best flat roof material is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
  imgSrc: 'https://media.giphy.com/media/f9RGISl9RmNOsWR5NP/giphy.gif',
  },
{
	id: 21,
  title: 'What is the best low-slope roof system?',
	description:'The best low-slope roof system is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
  imgSrc: 'https://media.giphy.com/media/xZsLh7B3KMMyUptD9D/giphy.gif',
  },
{
	id: 22,
  title: 'What is the best low-slope roof material?',
	description:'The best low-slope roof material is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
  imgSrc: '',
  },
{
	id: 23,
  title: 'What is the best single-ply roof system?',
	description:'The best single-ply roof system is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
  imgSrc: '',
  },
{
	id: 24,
  title: 'What is the best single-ply roof material?',
	description:'The best single-ply roof material is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site. To learn more about the benefits of Duro-Last Roofing Systems, check out The Duro-Last Difference.',
  imgSrc: '',
  },
{
	id: 25,
  title: 'What is the best roofing system for a flat roof?',
	description:'The best roofing system for a flat roof is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site.',
  imgSrc: '',
  },
{
	id: 26,
  title: 'What is the best roofing material for a flat roof?',
	description:'The best roofing material for a flat roof is one that is designed to meet the specific needs of your building. At Duro-Last®, we custom-fabricate every roofing system to the exact specifications of each building, eliminating 85% to 95% of rooftop seaming and ensuring an excellent fit and long-term performance. Additionally, our prefabricated roofing systems are lightweight, durable, and easy to install, saving time and money on the job site.',
  imgSrc: 'https://media.giphy.com/media/3o85xoi6nNqJQJ95Qc/giphy.gif',
  },
]