import React from 'react'
import { Link } from 'react-router-dom'
import('preline')

const SideMenu = () => {
  return (
<><button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition-all border border-transparent rounded-lg bg-l1 text-l1 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" data-hs-overlay="#hs-overlay-basic" aria-controls="hs-overlay-basic" aria-label="Toggle navigation">
  Open sidebar
</button>

<div id="hs-overlay-basic" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-d7 border-r border-d4 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0">
  <div className="flex items-center justify-between px-6">
    <a className="flex-none text-xl font-semibold" href="#" aria-label="Brand">Menu</a>

    <button type="button" className="inline-flex items-center justify-center w-8 h-8 gap-2 transition border rounded-md text-l1 border-d5 hover:text-l5" data-hs-overlay="#hs-overlay-basic" aria-controls="hs-overlay-basic" aria-label="Toggle navigation">
      <span className="sr-only">Close Sidebar</span>
      <svg className="w-3 h-3" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
      </svg>
    </button>
  </div>

  <nav className="flex flex-col flex-wrap w-full p-6">
    <ul className="space-y-1.5">
      <li><a className="flex items-center gap-x-3 py-2 px-2.5 bg-gray-100 text-sm text-l1 rounded-md hover:bg-d5 " href="#">

        Dashboard
      </a></li>
      <li><a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-l1 rounded-md hover:bg-d5" href="#">

        Users
      </a></li>
      <li><a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-l1 rounded-md hover:bg-d5" href="#">

        Account
      </a></li>
      <li><a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-l1 rounded-md hover:bg-d5" href="#">

        Projects
      </a></li>
      <li><a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-l1 rounded-md hover:bg-d5" href="#">

        Calendar
      </a></li>
      <li><a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-l1 rounded-md hover:bg-d5" href="#">

        Documentation
      </a></li>
    </ul>
  </nav>
</div></>
  )
}

export default SideMenu