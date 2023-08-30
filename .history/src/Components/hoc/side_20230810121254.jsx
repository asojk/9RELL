import React from 'react'
import('preline')

const SideMenu = () => {
  return (
    <><button type="button" data-hs-overlay="#hs-overlay-unstyled" aria-controls="hs-overlay-unstyled" aria-label="Toggle navigation">
      Open sidebar
    </button><div id="hs-overlay-unstyled" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white pt-3 pb-5 overflow-y-auto lg:block lg:translate-x-0 lg:right-auto lg:bottom-0">
        <div class="flex justify-end px-3">
          <button type="button" class="w-8 h-8" data-hs-overlay="#hs-overlay-unstyled" aria-controls="hs-overlay-unstyled" aria-label="Toggle navigation">
            <span class="sr-only">Close Sidebar</span>
            <svg class="w-3 h-3" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
      </div></>
  )
}

export default SideMenu