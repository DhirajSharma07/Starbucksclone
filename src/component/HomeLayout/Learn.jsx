import React from 'react'
import { Link } from 'react-router-dom'

function Learn() {
  return (
    <>
      <div className="container-second items-center h-[80vh] mt-10 p-4 lg:px-36" id="home">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl pt-4 font-bold">Learn more about the world of coffee!</h2>
          <a href="/">
            <h2 className="text-base text-green-900 font-medium pt-4 hidden md:block">Discover More</h2>
          </a>
        </div>
        <div className="relative bg-[url('https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_1_decd6c1b6f.jpg')] bg-cover  bg-no-repeat h-96 mt-8 w-full rounded-lg  overflow-hidden">

          <span className="absolute top-5 left-10 px-4 py-1 bg-white text-green-700 font-bold z-10 rounded-lg text-xs">Coffee culture</span>

          <div className="absolute inset-0 bg-black opacity-50  hover:opacity-60 hover:duration-700"></div>
          <div className="absolute left-5 bottom-5 lg:left-10 lg:bottom-10 z-10">
            <h2 className="text-white font-bold pb-4 text-3xl">Art & Science of Coffee Brewing</h2>
            <p className="text-white pb-8">Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
            <button className="px-16 py-2 bg-white rounded-3xl text-xs font-bold tracking-wider"><Link to="Learnmore">Learn More</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Learn
