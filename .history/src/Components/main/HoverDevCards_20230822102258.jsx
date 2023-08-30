import React from "react";
import { Link } from "react-router-dom";
import {RiCompasses2Line, Ri24HoursLine, RiCheckDoubleLine} from "react-icons/ri";

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <p className="title-head">Services</p>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        
        <Card title="Build" subtitle="We work with builders & contractors" Icon={RiCompasses2Line} href="/new-roof"/>
        <Card title="Repair" subtitle="For leaks, cracks, emergency repairs & more" Icon={Ri24HoursLine} href="/reapir" />
        <Card title="Replace" subtitle="We'll help you find the right solution" href="/replacement" Icon={RiCheckDoubleLine} />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 transition-transform duration-300 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12" />
      <Icon className="relative z-10 mb-2 text-2xl transition-colors duration-300 text-violet-600 group-hover:text-white" />
      <h3 className="relative z-10 text-lg font-medium duration-300 text-slate-950 group-hover:text-white">
        {title}
      </h3>
      <p className="relative z-10 duration-300 text-slate-400 group-hover:text-violet-200">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;