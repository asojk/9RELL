import React from 'react'

const TwobyOne = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  <div className="h-32 bg-gray-100 rounded-lg lg:col-span-2"></div>
  <div className="h-32 bg-gray-100 rounded-lg"></div>
</div>
  )
}

export default TwobyOne