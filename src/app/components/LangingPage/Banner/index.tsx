import React from 'react'
import SideBar from '../SideBar'
import Slider from '../Slider'

const Banner = () => {
  return (
    
    <div className="container">
    <div className="md:grid md:grid-cols-[22%_78%] gap-4">
      <div className="md:pr-6 pt-8 md:border-r-2 ">
        <SideBar />
      </div>
      <div className="md:px-5 pt-8">
          <Slider />
      </div>
    </div>
  </div>
  )
}

export default Banner