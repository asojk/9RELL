import React from "react";
import { FiSend, FiMessageCircle, FiPhone } from "react-icons/fi";
import { Tooltip } from "@material-tailwind/react";


const Cbuttons = () => {
  return (
    <section className="text-right">
    <span className="relative inline-flex overflow-hidden border rounded-md shadow-sm shadow-d9 border-b3 bg-d7">
      <Tooltip className="p-2 text-l3 bg-d7" placement="bottom" content="Call 1-800 208-9693"
        animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 }}}>
      <button href="tel:+18002089693"
        className="inline-block p-3 text-l1 border-e-[.5px] border-b3 focus:relative hover:bg-d6"
        title="Edit Product">
          <FiPhone className="w-4 h-4 lg:w-6 lg:h-6"/>
      </button>
      </Tooltip>


      <Tooltip className="p-2 text-l3 bg-d7" placement="bottom" content="Email Roof@Grell.pro"
        animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 }}}>
      <button href="mailto:roof@grell.pro"
        className="inline-block p-3 text-l1 border-e-[.5px] border-b3 focus:relative hover:bg-d6"
        title="Delete Product">
          <FiPhone className="w-4 h-4 lg:w-6 lg:h-6"/>
      </button>
      </Tooltip>

      <Tooltip className="p-2 text-l3 bg-d7" placement="bottom" content="Text (515) 227-6367"
        animate={{mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 }}}>
      <button href="text:5152276367"
        className="inline-block p-3 text-l1 focus:relative hover:bg-d6"
        title="Delete Product">
          <FiPhone className="w-4 h-4 lg:w-6 lg:h-6"/>
      </button>
      </Tooltip>
    </span>
    </section>
  );
};

export default Cbuttons;
