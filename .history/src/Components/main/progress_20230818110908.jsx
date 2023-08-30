import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NameInput = () => {
    const [name, setName] = useState('');

return (
<div className="flex flex-col">

<label
  htmlFor="UserEmail"
  className="block px-3 py-2 overflow-hidden border rounded-md shadow-sm bg-d7 border-w4 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <span className="px-4 py-6 text-xs font-medium text-l1">
    Email
  </span>

  <input
    type="email"
    id="UserEmail"
    placeholder="anthony@rhcp.com"
    className="w-full p-0 mt-1 bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm"
  />
</label>

<label
  htmlFor="Username"
  className="relative m-4 rounded-md w-fit bg-d7 focus-within:border-rA focus-within:ring-1 focus-within:ring-r"
>
  <input
    type="text"
    id="user_name"
    name="user_name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)}
    className="placeholder-transparent bg-transparent border-none peer focus:border-none focus:outline-none focus:ring-0 text-b5"
    placeholder="*Name"
  />
  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-transparent text-xs text-d1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm p-6 font-bold peer-focus:top-0 peer-focus:text-xs"
  >
    *Name
  </span>
</label>
</div>


    );
};



const SteppedProgress = () => {
  const [stepsComplete, setStepsComplete] = useState(0);
  const numSteps = 4;

  const handleSetStep = (num) => {
    if (
      (stepsComplete === 0 && num === -1) ||
      (stepsComplete === numSteps && num === 1)
    ) {
      return;
    }

    setStepsComplete((pv) => pv + num);
  };

  return (
    <div className="px-4 py-14">
      <div className="w-full max-w-2xl p-8 mx-auto rounded-2xl shadow-nimble">
        <Steps numSteps={numSteps} stepsComplete={stepsComplete} />
        <div className="h-48 p-2 my-6 border-2 rounded-lg border-b3">
            {stepsComplete === 0 && <NameInput />}
        </div>
        <div className="flex items-center justify-end gap-2">
          <button onClick={() => handleSetStep(-1)}
            className="px-4 py-1 rounded text-l1 hover:bg-d6">Prev
          </button>
          <button onClick={() => handleSetStep(1)}
            className="px-4 py-1 rounded text-l1 bg-r">Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Steps = ({ numSteps, stepsComplete }) => {
  const stepArray = Array.from(Array(numSteps).keys());

  return (
    <div className="flex items-center justify-between gap-3">
      {stepArray.map((num) => {
        const stepNum = num + 1;
        const isActive = stepNum <= stepsComplete;
        return (
          <React.Fragment key={stepNum}>
            <Step num={stepNum} isActive={isActive} />
            {stepNum !== stepArray.length && (
              <div className="relative w-full h-1 rounded-full bg-rd2">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 rounded-full bg-r"
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ ease: "easeIn", duration: 0.3 }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Step = ({ num, isActive }) => {
  return (
    <div className="relative">
      <div
        className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative z-10 transition-colors duration-300 ${
          isActive
            ? "border-rA text-l1"
            : "border-w4 text-w4"
        }`}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.svg key="icon-marker-check" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </motion.svg>
          ) : (
            <motion.span key="icon-marker-num"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              {num}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isActive && (
        <div className="absolute z-0 -inset-1.5 bg-rd2 rounded-full animate-pulse" />
      )}
    </div>
  );
};

export default SteppedProgress;