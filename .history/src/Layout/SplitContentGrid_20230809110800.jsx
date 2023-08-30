import React from 'react'

const SplitContentGrid = () => {
  return (
<section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div
      className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div
        className="max-w-lg mx-auto text-center lg:mx-0 ltr:lg:text-left"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">Find your career path</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
          aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
          Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
          Obcaecati, autem.
        </p>

        <a
          href="#"
          className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">



      </div>
    </div>
  </div>
</section>
  )
}

export default SplitContentGrid