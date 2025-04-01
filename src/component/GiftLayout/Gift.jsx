
import { PiGreaterThan } from "react-icons/pi";
import { NavLink } from "react-router-dom";


function Gift() {
  return (
    <>
      <section className='order-bestseller w-full  pt-20 '>

        <div className=' h-10 flex   items-center text-sm font-thin w-full bg-slate-200  lg:px-40 px-3 gap-1 '>Home
          <PiGreaterThan className=" text-xs" />Gift
        </div>

        <div className="bestseller w-full h-12 flex  flex-wrap items-center justify-center  sm:max-h-40  lg:px-40 px-3">

        </div>
        
        <div className='seller-container flex  lg:px-40 px-3 text-sm h-12 items-center bg-slate-200  flex-shrink-0 overflow-x-auto '>

          <div className=' pr-10 border border-r-black  flex-shrink-0'>
            <NavLink to='/feature' className=' text-lg uppercase font-thin '>featured</NavLink>
          </div>

          <div className=' px-10 border border-r-black'>
            <NavLink to='/anytime' className=' text-lg uppercase font-thin  flex-shrink-0'>anytime</NavLink>
          </div>

          <div className=' px-10 border border-r-black'>
            <NavLink to='/Congratulation' className=' text-lg uppercase font-thin  flex-shrink-0'>congratulations</NavLink>
          </div>

          <div className=' px-10 ' >
            <NavLink to='/Thanku' className=' text-lg uppercase font-thin  flex-shrink-0'>thank you</NavLink>
          </div>
        </div>
   
      </section >
     
    </>

  )
}

export default Gift;
