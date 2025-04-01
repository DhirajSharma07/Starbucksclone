import React from 'react'
import Gift from './Gift';

function Congratulation() {
  return (
    <>
   <Gift />
      <div className=" h-12 w-full border-b-2  px-3 lg:px-40  capitalize flex items-center text-2xl font-bold">Congratulations</div>
      <div className="gift-container py-6 flex  flex-wrap gap-10 pl-16 lg:px-32 justify-center xl:justify-between  md:justify-center sm:items-center items-center " id="gift">

        <div className="flex w-96 h-44 items-center justify-end bg-white shadow-xl   rounded-lg relative z-10">
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-sm">Congrate</h1>
            <p className="mt-2 text-gray-600 text-xs">Bring in the festive season and make each celebration memorable.</p>

            <div className="flex item-center mt-2">
            </div>
            <div className=" items-center justify-center flex mt-3">
              <button className="px-3 py-2  bg-green-900 text-white text-xs font-bold  rounded-3xl">Add item</button>
            </div>
            
          </div>
          <div className=" absolute h-20 w-40  top-10 left-[-50px] z-30 shadow-2xl ">
            <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/97ee3280_2f05_43ad_bd94_f5c184d4f502_1_0a31455af9.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Congratulation;
