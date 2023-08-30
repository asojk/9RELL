import React from 'react'

const HowSoon = () => {
  return (
    <div className="grid col-start-2 row-span-1">
      <div className="relative p-4 m-auto w-128">
				<div className="w-full h-full">
					<div className="flex flex-col justify-between h-full">
            <h2 className="text-lg font-bold align-text-bottom head4 xl:font-extrabold xl:text-2xl md:text-lg">
              How Soon Can We Start?</h2>
          </div>
          <p className="pb-6 text-lg leading-relaxed text-l3">
            Tempor reprehenderit excepteur nostrud quis labore et mollit eiusmod
            sunt. Esse qui aliquip adipisicing ea officia Lorem enim cupidatat
            Lorem amet tempor sint consequat.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.225, ease: "easeIn" }}
            className=""><button onClick={executeScroll} className="relative inline-flex items-center justify-center m-1 mt-6 text-center cursor-pointer lg:text-lg lg:px-2 lg:py-3 btn bg-r border-l1 hover:bg-r text-l1">Schedule your free estimate</button></motion.button>
        </div>
        </div>
      </div>
  )
}

export default HowSoon