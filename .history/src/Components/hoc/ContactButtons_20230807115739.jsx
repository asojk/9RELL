import React from 'react'
import { FiSend, FiMessageCircle, FiPhone } from "react-icons/fi";

const ContactButtons = () => {
  return (
    <div className="relative grid items-center justify-center grid-rows-1">
      <div className="items-center row-start-2 border-0 btn hover:border-transparent">
        <a href="tel:+18002089693"
        className="relative flex items-center justify-center p-1 m-1 cursor-pointer lg:p-3 btn bg-l1 border-l1 hover:border-y2 text-m3 hover:bg-l5 tooltip">
          <FiPhone style={{ width: "24px", height: "24px" }} />
          <span className="normal-case tooltiptext">call<br></br> 1-800 208-9693</span> 
        </a>

        <a href="mailto:roof@grell.pro"
        className="relative flex items-center justify-center p-1 m-1 cursor-pointer lg:p-3 btn bg-l1 border-l1 hover:border-y2 text-m3 hover:bg-l5 tooltip">
          <FiSend style={{ width: "24px", height: "24px" }} />
          <span className="normal-case tooltiptext">email<br></br>roof@grell.pro</span> 
        </a>

        <a href="text:5152276367"
        className="relative flex items-center justify-center p-1 m-1 cursor-pointer lg:p-3 btn bg-l1 border-l1 hover:border-y2 text-m3 hover:bg-l5 tooltip">
          <FiMessageCircle style={{ width: "24px", height: "24px" }} />
          <span className="normal-case tooltiptext">text message<br></br>(515) 227-6367</span> 
        </a>
      </div>
    </div>
  )
}

export default ContactButtons