import React from "react";
import { FiSend, FiMessageCircle, FiPhone } from "react-icons/fi";


const Cbuttons = () => {
  return (
    <section className="text-right">
    <span className="relative inline-flex overflow-hidden border rounded-md shadow-sm shadow-d9 border-b3 bg-d7">
      <a href="tel:+18002089693"
        className="inline-block p-3 text-l1 border-e-[.5px] border-b3 focus:relative hover:bg-d6"
        title="Edit Product">
<FiPhone className="w-12 h-12 lg:w-16 lg:h-16"/>
      </a>

      <button
        className="inline-block p-3 text-l1 border-e-[.5px] border-b3 focus:relative hover:bg-d6"
        title="Delete Product">
        <svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className="w-4 h-4 lg:w-6 lg:h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
        </svg>
      </button>

      <button
        className="inline-block p-3 text-l1 focus:relative hover:bg-d6"
        title="Delete Product">
        <svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className="w-4 h-4 lg:w-6 lg:h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
        </svg>
      </button>
    </span>
    </section>
  );
};

export default Cbuttons;
