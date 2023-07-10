import React from 'react'
import './heading.css'

const Heading = () => {
  return (
    <div className="anim-head">
    <h1 className="anim-1">
        <span className="1-span">We </span>
        <div class="message">
          <div class="word1">Build</div>
          <div class="word2">Repair</div>
          <div class="word3">Inspect</div>
          <div class="word4">Replace</div>
          <div class="word5">Warranty </div>
        </div>
    </h1>
    <h1 className="anim-2">
        <span className='2-span'>Commercial</span>
        </h1>
    <h1 className="anim-2">
        <span className='2-span'>Flat Roofs</span>
        </h1>
    </div>
  )
}

export default Heading