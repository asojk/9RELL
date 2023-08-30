import React from "react";
import { Link } from "react-router-dom";
import {RiCompasses2Line, Ri24HoursLine, RiCheckDoubleLine} from "react-icons/ri";

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <p className="head">Services</p>
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
      className="w-full p-4 rounded-2xl border-[1px] border-b3 relative overflow-hidden group bg-d7"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-d7 to-rd1 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 transition-transform duration-300 -top-1 -right-1 text-7xl text-d6 group-hover:text-r group-hover:rotate-12" />
      <Icon className="relative z-10 mb-2 text-2xl transition-colors duration-300 text-r group-hover:text-yw" />
      <h3 className="relative z-10 pt-2 text-xl font-black duration-300 md:text-2xl text-l1 group-hover:text-white">
        {title}
      </h3>
      <p className="relative z-10 pt-2 text-xs font-thin duration-300 md:text-base text-l3 group-hover:text-l1">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;