import React from "react";
import { FiSend, FiMessageCircle, FiPhone } from "react-icons/fi";
import { Tooltip } from "@material-tailwind/react";


const Cbuttons = () => {
  return (
    <section className="text-center md:text-right">
    <span className="relative inline-flex overflow-hidden border rounded-md shadow-nimble border-b3 bg-d7">
      <Tooltip className="p-2 text-l3 bg-d7" placement="bottom" content="Call 1-800 208-9693"
        animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 }}}>
      <a href="tel:+18002089693"
        className="inline-blotext-r md:ck p-3 text-l1 border-e-[.5px] border-b3 focus:relative hover:bg-d6">
          <FiPhone className="w-4 h-4 lg:w-6 lg:h-6"/>
      </a>
      </Tooltip>


      <Tooltip className="p-2 text-l3 bg-d7" placement="bottom" content="Email Roof@Grell.pro"
        animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 }}}>
      <a href="mailto:roof@grell.pro"
        className="inline-block p-3 text-r md:text-l1 border-e-[.5px] border-b3 focus:relative hover:bg-d6">
          <FiSend className="w-4 h-4 lg:w-6 lg:h-6"/>
      </a>
      </Tooltip>

      <Tooltip className="p-2 text-l3 bg-d7" placement="bottom" content="Text (515) 227-6367"
        animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 }}}>
      <a href="sms:+15152276367"
        className="inline-block p-3 text-r md:text-l1 focus:relative hover:bg-d6">
          <FiMessageCircle className="w-4 h-4 lg:w-6 lg:h-6"/>
      </a>
      </Tooltip>
    </span>
    </section>
  );
};

export default Cbuttons;
