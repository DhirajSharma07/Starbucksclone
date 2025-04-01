import React from 'react'
import { PiGreaterThan } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Bestseller() {
  return (
    <>
      <section className='order-bestseller pt-20 '>
        <div className=' h-10 flex   items-center text-sm font-thin w-full bg-slate-200  lg:px-40 px-3 gap-1'>Home  <PiGreaterThan className=" text-xs"/>   order</div>
        <div className="bestseller w-full h-40 lg:h-20 flex  flex-wrap items-center justify-center  sm:max-h-40  lg:px-40 px-3">
          <div className="flex  flex-wrap items-center  justify-between w-full">
            <div className="flex gap-2 items-center">
              <img
                src="https://www.starbucks.in/assets/icon/Location%20icon%203.svg"
                alt="Location Icon"
                className="w-5 h-5"
              />
              <div className="h-10 flex ">
                <input
                  type="text"
                  placeholder="No store selected"
                  className="border-b text-xs border-white bg-inherit outline-none text-white"
                />
              </div>
              <img
                src="https://www.starbucks.in/assets/icon/clock.svg"
                alt="Clock Icon"
                className="w-4 h-4"
              />
              <span className="text-sm text-white">00 mins</span>
            </div>

            <div className="flex h-10 w-80 justify-between">
      
              <div className="border border-white flex items-center w-1/2 gap-2 pl-4 ">
                <img
                  src="https://www.starbucks.in/assets/icon/Dinein.svg"
                  alt="Dine-in Icon"
                  className="w-5 h-5"
                />
                <p className="text-xs font-medium text-white">Dine-in</p>
              </div>
              <div className="bg-white flex items-center w-1/2 gap-2 pl-2">
                <img
                  src="https://www.starbucks.in/assets/icon/homegreen.svg"
                  alt="Home Icon"
                />
                <p className="text-xs font-medium">Takeaway</p>
              </div>
            </div>
          </div>
        </div>


        <div className='seller-container flex  lg:px-40 px-3 text-sm h-12 items-center bg-slate-200  flex-shrink-0 overflow-x-auto '>
          <div className=' pr-10 border border-r-black  flex-shrink-0'><NavLink to='/Sellerorder' className=' text-md'>Bestseller</NavLink></div>
          <div className=' px-10 border border-r-black' ><NavLink to='/Drinks' className=' text-md'>Drinks</NavLink></div>
          <div className=' px-10 border border-r-black' ><NavLink to='/Food' className=' text-md'>Food</NavLink></div>
          <div className=' px-10 border border-r-black' ><NavLink to='/Merchandise' className=' text-md'>Merchandise</NavLink></div>
          <div className=' px-10   border border-r-black  flex-shrink-0' ><NavLink to='/Coffee' className=' text-md'>Coffee At Home</NavLink></div>
          <div className=' px-10 border border-r-black  flex-shrink-0'><NavLink to='/' className=' text-md'>Ready To Eat</NavLink></div>
        </div>
      </section >

    </>
  )
}

export default Bestseller
