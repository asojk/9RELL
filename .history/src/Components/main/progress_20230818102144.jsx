import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      <div className="w-full max-w-2xl p-8 mx-auto rounded-2xl shadow-nimble bg-d7">
        <Steps numSteps={numSteps} stepsComplete={stepsComplete} />
        <div className="h-48 p-2 my-6 border-2 rounded-lg border-b3 bg-d7">
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
            ? "border-r text-l1"
            : "border-gray-300 text-gray-300"
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
        <div className="absolute z-0 -inset-1.5 bg-y rounded-full animate-pulse" />
      )}
    </div>
  );
};

export default SteppedProgress;