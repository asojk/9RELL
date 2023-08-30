# menubackup

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
FlashIcon,
ActivityIcon,
UserIcon,
CategoryI,
ToolsI,
NewI,
ReplaceI,
QuestionI,
WarrantyI,
MaintenanceI,
} from "./iconsR.js";
import { Button } from "@nextui-org/react";

const MenuItem = ({ to, onClose, title, description, children, icon }) => (

  <div className="mb-2 w-fit shrink-0 grow-0 basis-auto px-3">
    <div className="flex">
      <div className="shrink-0 p-3">
        {icon}
        <div className="">{children}</div>
      </div>
      <Link
        to={to}
        className="grow rounded-md p-2 md:p-3 lg:p-4 group relative inline-block overflow-hidden bg-transparent px-12 py-3 text-sm font-medium text-white-800 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
        onClick={onClose}
      >
        <div class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 bg-transparent border-t-2 ease border-violet-600"></div>
        <div class="absolute top-0 right-0 w-0 h-0 transition-all duration-200 bg-transparent border-r-2 ease border-violet-600 group-hover:h-full"></div>
        <div class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 bg-transparent border-b-2 ease border-violet-600"></div>
        <div class="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 bg-transparent border-l-2 ease border-violet-600 group-hover:h-full"></div>
        <p className="">{title}</p>
        <p className="text-xs text-neutral-400">{description}</p>
      </Link>
    </div>
  </div>
);

const Menu = ({ isOpen, onClose }) => {
const menuRef = useRef(null);

useEffect(() => {
const handleClickOutside = (event) => {
if (menuRef.current && !menuRef.current.contains(event.target)) {
onClose();
}
};

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

}, [onClose]);

if (!isOpen) return null;

return (
<div
className="fixed flex flex-wrap h-full w-full bg-black bg-opacity-90 items-center justify-center z-20"
style={{ backdropFilter: "blur(25px)", zIndex: "999" }} >
<div
        ref={menuRef}
        className="mb-md-0 mb-1 w-full shrink-0 grow-0 basis-auto px-6 lg:w-8/12 text-gray-100 relative"
      >
<h3 className="w-1/4 text-sm text-neutral-600 mb-4 ml-6 border-b-2 border-neutral-700">
Services
</h3>
<MenuItem
icon={<ToolsI />}
to="/repair"
onClose={onClose}
title="Roof Repair"
description="For leaks, cracks, emergency repairs & more." ></MenuItem>
<MenuItem
icon={<ReplaceI />}
to="/replacement"
onClose={onClose}
title="Roof Replacement"
description="We'll help you find the right solution." ></MenuItem>
<MenuItem
icon={<NewI />}
to="/new-roof"
onClose={onClose}
title="New Construction"
description="We work with builders & contractors." ></MenuItem>
<MenuItem
icon={<WarrantyI />}
to="/warranty"
onClose={onClose}
title="Warranty Information"
description="We stand behind our work." ></MenuItem>
<MenuItem
icon={<MaintenanceI />}
to="/maintenance"
onClose={onClose}
title="Roof Maintenance"
description="Extend the life of your roof." ></MenuItem>
<h3 className="w-1/4 text-sm text-neutral-600 mb-4 ml-6 border-b-2 border-neutral-700">
More
</h3>
<MenuItem
icon={<UserIcon />}
to="/about"
onClose={onClose}
title="About Grell"
description="Proudly roofing for over 30 years." ></MenuItem>
<MenuItem
icon={<ActivityIcon />}
to="/Press"
onClose={onClose}
title="Press"
description="What we've been up to." ></MenuItem>
<MenuItem
icon={<FlashIcon />}
to="/projects"
onClose={onClose}
title="Projects"
description="See some of our recent projects." ></MenuItem>
<MenuItem
icon={<CategoryI />}
to="/duro-last"
onClose={onClose}
title="Products"
description="We use only the highest quality products." ></MenuItem>
<MenuItem
icon={<QuestionI />}
to="/faq"
onClose={onClose}
title="FAQ"
description="Answers to common questions." ></MenuItem>
</div>
<div className="absolute bottom-4 p-0 m-0 columns-2">
<div className="mb-1 col-span-1">
<Link to="/">
<Button>Home</Button>
</Link>
</div>
<div className="mb-1 col-span-1">
<Button onClick={onClose}>Close</Button>
</div>
</div>
</div>
);
};

export default Menu;
